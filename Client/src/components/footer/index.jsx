import { Link } from 'react-router-dom';
import Instagram from '../links/Instagram';
import FaceBook from '../links/Facebook';

const Footer = () => {
  return (
    <div className="mt-60">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a href="#about-us" className="link link-hover">
            About us
          </a>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <a href="tel:+4168366130" className="link link-hover">
            Phone
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Instagram />
            <FaceBook />
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by BNO Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
