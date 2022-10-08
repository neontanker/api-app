import React from "react";
import Card from "../UI/Card";
import ApiImageList from "../Shared/ApiImageGallery/ApiImageList";
import "../UI/apiDetailsCard.css";

const Dragon = ({
  description,
  flickr_images,
  height_w_trunk,
  launch_payload_mass,
  name,
}) => {
  const tons = launch_payload_mass.kg / 1000;

  const elephantMath = `(approximately ${Math.round(tons / 6)} elephants)`;

  return (
    <>
      <Card className="detailsCard">
        <p>
          <strong>Name:</strong> {name}
        </p>

        {launch_payload_mass && (
          <p>
            <strong>Mass:</strong> {`${tons} tons ${elephantMath}`}
          </p>
        )}

        {height_w_trunk && (
          <p>
            <strong>Height with trunk:</strong> {height_w_trunk.feet} feet
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

export default Dragon;
