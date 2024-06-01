// this componenet is to display the information of material used at the company

import { Link } from 'react-router-dom';

const MaterialInfo = () => {
  return (
    <div className="materialInfo my-28">
      <div className="description">
        <h1 className=" text-4xl sm:text-6xl font-bold flex justify-center align-middle uppercase">
          materials we Use
        </h1>
        <p className="mt-4 w-auto text-center mx-8 md:mx-24 text-md md:text-xl">
          At Brothers Exterior Stucco, we pride ourselves on delivering
          exceptional quality and customer satisfaction in every exterior stucco
          project we undertake. Our unwavering commitment to excellence drives
          us to utilize only the finest materials available. That's why we
          exclusively rely on industry-leading brands like ADEX and DuRock. By
          choosing us, you can trust that your project will be completed with
          precision and durability, ensuring not just a job well done, but a
          lasting masterpiece that exceeds your expectations.
        </p>
      </div>
      {/* this is the gird for the images  */}
      <div className="imagesForMaterials grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mt-10">
        <div className="durock" aria-label="Image for DuRock company">
          <Link to={'https://durock.ca/'} target="_blank">
            <img
              src="/images/material-imgs/durock.png"
              alt="DuRock Company"
              className="max-w-xs md:max-w-md object-contain"
            />
          </Link>
        </div>
        <div className="adex" aria-label="Image for Adex company">
          <Link to={'https://www.adex.ca/'} target="_blank">
            <img
              src="/images/material-imgs/adex.webp"
              alt="Adex Company"
              className="max-w-xs md:max-w-md object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaterialInfo;
