// this is the root homepage component that will have all the other components in it

import Hero from '../components/hero section/hero';
import MaterialInfo from '../components/material Info';
import ServicesProvided from '../components/servicesProvided';
import AboutUs from '../components/about us';
import HousesCarousel from '../components/carousel/index.jsx';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <MaterialInfo />
      <ServicesProvided />
      <HousesCarousel />
      <AboutUs />
    </div>
  );
};

export default Homepage;
