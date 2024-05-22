import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="text-4xl font-extrabold my-6">OOPS!</h1>
      <p>
        Sorry, an unexpected error has occurred. Click the button to go back!
      </p>
      <Link to={'/'} className="button-wrapper">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
