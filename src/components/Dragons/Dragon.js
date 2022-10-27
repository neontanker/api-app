import React from "react";

import ApiImageList from "../Shared/ApiImageGallery/ApiImageList";
import ApiDetailsCard from "../UI/ApiDetailsCard";

const Dragon = ({
  description,
  flickr_images,
  height_w_trunk,
  launch_payload_mass = [],
  name,
}) => {
  const tons = launch_payload_mass.kg ? launch_payload_mass.kg / 1000 : null;

  const elephantMath = `(approximately ${Math.round(tons / 6)} elephants)`;
  return (
    <>
      <ApiDetailsCard>
        <p>
          <strong>Name:</strong> {name}
        </p>

        {tons && (
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
      </ApiDetailsCard>

      <ApiImageList images={flickr_images} />
    </>
  );
};

export default Dragon;
