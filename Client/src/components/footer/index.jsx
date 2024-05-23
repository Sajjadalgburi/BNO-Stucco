import { Link } from 'react-router-dom';

import Instagram from '../links/Instagram';
import FaceBook from '../links/Facebook';

const Footer = () => {
  return (
    <div className=" mt-60">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to={'/about-me'} className="link link-hover">
            About us
          </Link>

          <Link to={'contact'} className="link link-hover">
            Contact
          </Link>

          <Link to={'phone'} className="link link-hover">
            Phone
          </Link>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <Instagram />

            <FaceBook />
          </div>
        </nav>

        <aside>
          <p>Copyright © 2024 - All right reserved by Cool Games Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
