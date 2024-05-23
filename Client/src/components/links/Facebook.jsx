import { Link } from 'react-router-dom';

const FaceBook = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      to="https://www.facebook.com/ali.albaghdadi.1291"
    >
      <button className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          width="50"
          height="50"
          className="h-8 w-8"
          fill="currentColor"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S275.84 0 255.36 0c-73.22 0-121.31 44.38-121.31 124.72v70.62H83.89V288h50.16v224h100.2V288z" />
        </svg>
      </button>
    </Link>
  );
};

export default FaceBook;
