const AboutUs = () => {
  return (
    <div className="aboutUs my-44">
      <div className="mainHeading">
        <h1 className="text-4xl sm:text-6xl font-bold flex justify-center align-middle uppercase">
          About Us
        </h1>
        <p className="mt-4 w-auto text-center mx-8 md:mx-24 text-md md:text-xl">
          Owned and operated by brothers, Brothers Exterior Stucco is driven by
          a shared passion for delivering exceptional exterior stucco services.
          With a focus on craftsmanship and client satisfaction, we bring years
          of experience and expertise to every project. By combining premium
          materials from trusted suppliers like ADEX and DuRock with
          personalized service and attention to detail, we ensure superior
          results that enhance the aesthetic appeal and value of our clients'
          properties. As a family-owned business, we are deeply committed to our
          community and strive to make a positive impact through our work and
          involvement. Choose Brothers Exterior Stucco for stucco solutions that
          exceed expectations, backed by a dedication to quality, integrity, and
          excellence.
        </p>
      </div>

      <div className="avatar flex flex-wrap justify-center items-center mt-10 gap-4">
        <div className="w-96 rounded m-2  flex-shrink">
          <img src="../images/house11.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2  flex-shrink">
          <img src="../images/house12.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2  flex-shrink">
          <img src="../images/house13.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2  flex-shrink">
          <img src="../images/house14.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2  flex-shrink">
          <img src="../images/house15.jpg" alt="house image" />
        </div>
        <div className="w-96 rounded m-2  flex-shrink">
          <img src="../images/house16.jpg" alt="house image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
