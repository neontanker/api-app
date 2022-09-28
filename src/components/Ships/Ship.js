import React from "react";

import Card from "../UI/Card";
import ApiImageList from "../Shared/ApiImageList";
import "../UI/apiDetailsCard.css";

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

const Ship = ({ image, imo, link, mass_kg, name, roles, year_built }) => {
  const tons = mass_kg / 1000;

  const elephantMath = `(approximately ${Math.round(tons / 6)} elephants)`;

  return (
    <>
      <Card className="detailsCard">
        <p>
          <strong>Name:</strong> {name}
        </p>

        {mass_kg && (
          <p>
            <strong>Mass:</strong> {`${tons} tons ${elephantMath}`}
          </p>
        )}

        {imo && (
          <p>
            <strong>Location: </strong>
            <Location value={imo} />
          </p>
        )}
        {link && (
          <p>
            <strong>Link:</strong> <Link href={link}>{link}</Link>
          </p>
        )}
        {roles && (
          <p>
            <strong>Roles:</strong> {roles.join(", ")}
          </p>
        )}
        {year_built && (
          <p>
            <strong>Year Built:</strong> {year_built}
          </p>
        )}

        {/* Not used by Rocket - move */}
        {/* <p>
        {roles.join(", ")}
      </p> */}
      </Card>

      <ApiImageList images={image} />
    </>
  );
};

export default Ship;
