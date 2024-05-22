// this componenet is to display the information of material used at the company

const MaterialInfo = () => {
  return (
    <div className="materialInfo my-28">
      <div className="description">
        <h1 className="text-5xl font-bold flex justify-center align-middle uppercase">
          Materilas we Use
        </h1>
        <p className="mt-4 w-auto text-center mx-24 text-lg">
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
          <img
            src="../images/Material-Images/durock.png"
            alt="DuRock"
            className="max-w-xs md:max-w-md object-contain"
          />
        </div>
        <div className="adex" aria-label="Image for Adex company">
          <img
            src="../images/Material-Images/adex.webp"
            alt="Adex"
            className="max-w-xs md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MaterialInfo;