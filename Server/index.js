// this is the main backend file that will run the server and connect to the database

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const path = require('path');
const db = require('./config/dbConnection');
const { expressMiddleware } = require('@apollo/server/express4');

const { typeDefs, resolvers } = require('./schema');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

// Define the startApolloServer function
const startApolloServer = async () => {
  try {
    await server.start();

    // Applying required middleware for the application
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server));

    // Serving different files based on the environment
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../Client/dist')));

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
      });
    }

    // Connect to the database and start the Express.js server
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  } catch (error) {
    console.error(
      'Error starting the Apollo Server or connecting to the database:',
      error,
    );
  }
};

startApolloServer();
