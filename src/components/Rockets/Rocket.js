import React from "react";

import ApiImageList from "../Shared/ApiImageGallery/ApiImageList";
import ApiDetailsCard from "../UI/ApiDetailsCard";

const Rocket = ({ description, flickr_images, height, mass = [], name }) => {
  const tons = mass.kg ? mass.kg / 1000 : null;

  const elephantMath = `(approximately ${Math.round(tons / 6)} elephants)`;

  return (
    <>
      <ApiDetailsCard>
        <p>
          <strong>Name:</strong> {name}
        </p>

        {mass && (
          <p>
            <strong>Mass:</strong> {`${tons} tons ${elephantMath}`}
          </p>
        )}

        {height.feet && (
          <p>
            <strong>Height:</strong> {height.feet} feet
          </p>
        )}
        {description && (
          <p>
            <strong>Description:</strong> {description}
          </p>
        )}
      </ApiDetailsCard>

      <ApiImageList images={flickr_images} />
    </>
  );
};

export default Rocket;
