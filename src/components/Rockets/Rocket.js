import React from "react";
import ApiImageList from "../ApiObject/ApiImageList";

/**
 * Re-usable components - not actually
 * used by Rockets though so these need
 * to be moved within Ship component
 */
const Location = ({ value }) => (
  <a
    href={`https://www.vesselfinder.com/?imo=${value}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    https://www.vesselfinder.com/?imo=${value}
  </a>
);

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export function Rocket({ description, flickr_images, height, mass, name }) {
  const tons = mass.kg / 1000;

  const elephantMath = `(approximately ${Math.round(tons / 6)} elephants)`;

  return (
    <>
      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Mass:</strong> {`${tons} tons ${elephantMath}`}
      </p>

      <p>
        <strong>Height:</strong> {height.feet} feet
      </p>

      {/* Not used by Rocket - move */}
      {/* <p>
        {roles.join(", ")}
      </p> */}

      <ApiImageList images={flickr_images} />
    </>
  );
}
