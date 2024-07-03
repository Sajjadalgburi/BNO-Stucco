import { useState, useEffect } from 'react';
// Import everything needed to use the `useQuery` hook
import { useQuery } from '@apollo/client';

import { GET_HOUSE_IMAGES } from '../../utils/queries';

const ServicesProvided = () => {
  const { loading, error, data } = useQuery(GET_HOUSE_IMAGES);

  const [houseImages, setHouseImages] = useState([]);

  useEffect(() => {
    if (data && data.getHouseImages) {
      const sliceData = data.getHouseImages.slice(0, 7);
      setHouseImages(sliceData);
    }
  }, [data]); // when the data loads from the backend, add it to the dependency array for every mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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

      {/* looping through each house and giving them identical css styling to follow DRY principles */}
      <div className="avatar flex flex-wrap justify-center items-center mt-10 gap-4">
        {houseImages.map((image, ETag) => {
          return (
            <div className="w-96 rounded m-2  flex-shrink" key={ETag}>
              <img src={`${image.ImgURL}`} alt="house image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesProvided;
