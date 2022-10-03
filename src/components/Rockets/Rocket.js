import React from "react";

import Card from "../UI/Card";
import ApiImageList from "../Shared/ApiImageList";
import "../UI/apiDetailsCard.css";

const Rocket = ({ description, flickr_images, height, mass, name }) => {
  const tons = mass.kg / 1000;

  const elephantMath = `(approximately ${Math.round(tons / 6)} elephants)`;

  return (
    <>
      <Card className="detailsCard">
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
      </Card>

      <ApiImageList images={flickr_images} />
    </>
  );
};

export default Rocket;
