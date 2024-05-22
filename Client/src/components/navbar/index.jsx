import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=" navbar flex justify-between bg-base-100 p-5">
      <Link to={'/'} className="btn btn-ghost text-2xl ml-48">
        Brothers <span className="exterior">Exterior</span> Stucoo
      </Link>

      <ul className="uppercase menu menu-horizontal px-1 mr-24 text-lg font-medium">
        <li>
          <Link>Phone Us</Link>
        </li>

        <li className="mx-6">
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
