import { useState, useEffect } from 'react';
// Import everything needed to use the `useQuery` hook
import { useQuery } from '@apollo/client';

import { GET_HOUSE_IMAGES } from '../../utils/queries';

export default function Carousel() {
  const { loading, error, data } = useQuery(GET_HOUSE_IMAGES);

  const [houseImages, setHouseImages] = useState([]);

  useEffect(() => {
    if (data && data.getHouseImages) {
      const sliceData = data.getHouseImages.slice(7, 11);
      setHouseImages(sliceData);
    }
  }, [data]); // when the data loads from the backend, add it to the dependency array for every mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center">
      <div className="carousel w-8/12 md:w-5/12">
        {houseImages.map((image, index) => {
          const slideId = `slide${index + 1}`; // Generate slide ID: slide1, slide2, ...

          // Calculate next and previous slide IDs for navigation
          const nextSlideId = `slide${index === houseImages.length - 1 ? 1 : index + 2}`;
          const prevSlideId = `slide${index === 0 ? houseImages.length : index}`;

          return (
            <div
              id={slideId}
              className="carousel-item relative w-full"
              key={image.ETag} // Assuming ETag is the appropriate key
            >
              <img
                src={`${image.ImgURL}`}
                alt="house image"
                className="w-full"
              />

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${prevSlideId}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#${nextSlideId}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
