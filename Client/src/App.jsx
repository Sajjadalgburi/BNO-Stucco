// component for the main app
import Navbar from './components/navbar';
import Footer from './components/footer';

// react router
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
