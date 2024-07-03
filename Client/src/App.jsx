// component for the main app
import Navbar from './components/navbar';
import Footer from './components/footer';

// apollo client for graphql
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// react router
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
}
