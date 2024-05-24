const ServicesProvided = () => {
  return (
    <div className="service my-44">
      <div className="service">
        <h1 className="text-4xl sm:text-6xl font-bold flex justify-center align-middle uppercase">
          Services we provide
        </h1>
        <p className="mt-4 w-auto text-center mx-8 md:mx-24 text-md md:text-xl">
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
      <div className="avatar flex flex-wrap justify-center items-center mt-10 gap-4">
        <div className="w-96 rounded m-2 flex-grow flex-shrink">
          <img src="../images/house2.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2 flex-grow flex-shrink">
          <img src="../images/house3.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2 flex-grow flex-shrink">
          <img src="../images/house1.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2 flex-grow flex-shrink">
          <img src="../images/house4.jpg" alt="house image" />
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
