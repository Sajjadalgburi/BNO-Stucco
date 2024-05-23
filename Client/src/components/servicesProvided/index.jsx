const ServicesProvided = () => {
  return (
    <div className="service my-44">
      <div className="description">
        <h1 className="text-5xl font-bold flex justify-center align-middle uppercase">
          Services we provide
        </h1>
        <p className="mt-4 w-auto text-center mx-24 text-lg">
          Elevate your exterior with Brothers Exterior Stucco, commitment to
          quality craftsmanship and client satisfaction. With expertise in
          expert installation using premium materials from brands like ADEX and
          DuRock, we guarantee durability and aesthetic appeal. Our tailored
          solutions, meticulous attention to detail, and steadfast commitment to
          timely completion ensure a superior stucco experience. Contact us
          today to discuss your project needs and discover the difference
          firsthand.
        </p>
      </div>
      {/* this is the gird for the images  */}
      <div className="imagesForHouseWork grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mt-10">
        <div className="house" aria-label="Image for house">
          <img
            src="../images/house2.jpg"
            alt="house"
            className="max-w-xs md:max-w-md object-contain"
          />
        </div>
        <div className="house" aria-label="Image for house">
          <img
            src="../images/house1.jpg"
            alt="house"
            className="max-w-xs md:max-w-md object-contain"
          />
        </div>
        <div className="house" aria-label="Image for house">
          <img
            src="../images/house3.jpg"
            alt="house"
            className="max-w-xs md:max-w-md object-contain"
          />
        </div>
        <div className="house" aria-label="Image for house">
          <img
            src="../images/house4.jpg"
            alt="house"
            className="max-w-xs md:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
