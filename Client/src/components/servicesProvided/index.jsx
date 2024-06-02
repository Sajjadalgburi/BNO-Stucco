const houseImages = [
  'house0.jpg',
  'house1.jpg',
  'house2.jpg',
  'house3.jpg',
  'house4.jpg',
];

const ServicesProvided = () => {
  return (
    <div className="service my-44">
      <div className="service">
        <h1 className="text-3xl sm:text-6xl font-bold flex justify-center align-middle uppercase">
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

      {/* looping through each house and giving them idential css styling to follow DRY principles */}
      <div className="avatar flex flex-wrap justify-center items-center mt-10 gap-4">
        {houseImages.map((image, index) => {
          return (
            <div className="w-96 rounded m-2  flex-shrink" key={index}>
              <img src={`/images/house-images/${image}`} alt="house image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesProvided;
