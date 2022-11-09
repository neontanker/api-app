import React from "react";

import ApiDetailsCard from "../UI/ApiDetailsCard";
import classes from "./Payload.module.css";

const Payload = ({
  type,
  customers = [],
  nationalities = [],
  manufacturers = [],
  lifespan_years,
  mass_kg,
  name,
}) => {
  //Possible @TODO: add an interactive embed map for satellites: https://www.n2yo.com/widgets/ , create a custom Hook?
  /*
  useEffect(() => {
  const script = document.createElement('script');

  script.src = "https://www.n2yo.com/js/widget-tracker.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
}, []);
  */
  return (
    <>
      <ApiDetailsCard className={classes.payload}>
        <p>
          <strong>Name:</strong> {name}
        </p>

        {type && (
          <p>
            <strong>Type:</strong> {type}
          </p>
        )}

        {mass_kg && (
          <p>
            <strong>Mass:</strong> {mass_kg} kg
          </p>
        )}

        {customers && (
          <p>
            <strong>Customers:</strong>{" "}
            {customers.length > 1 ? customers.join(", ") : customers[0]}
          </p>
        )}

        {nationalities && (
          <p>
            <strong>Nationalities:</strong>{" "}
            {nationalities.length > 1
              ? nationalities.join(", ")
              : nationalities[0]}
          </p>
        )}
        {manufacturers && (
          <p>
            <strong>Manufacturers:</strong>{" "}
            {manufacturers.length > 1
              ? manufacturers.join(", ")
              : manufacturers[0]}
          </p>
        )}
        {lifespan_years && (
          <p>
            <strong>Life span:</strong> {lifespan_years} years
          </p>
        )}
      </ApiDetailsCard>
    </>
  );
};

export default Payload;
