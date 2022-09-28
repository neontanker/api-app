import React, { useEffect, useState } from "react";
import ApiMenuItem from "../UI/ApiMenuItem";
import Card from "../UI/Card";
import fetchShipsApi from "./fetchShipsApi";
import Ship from "./Ship";
import "../UI/apiDetailsWrapperCard.css";

const ShipsPage = () => {
  const [ships, setShips] = useState(null);
  const [selectedShip, setSelectedShip] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function getShips() {
      const data = await fetchShipsApi();
      console.log("fetching...");
      if (data.error) {
        setError(data.error);
        return;
      }
      setShips(data);
      setSelectedShip(data[0]);
      setError(null);
    })();
  }, [setShips]);
  if (error) return <p>{error.message}</p>;
  if (!ships) return <div>Loading...</div>;

  return (
    <>
      {ships.map((ship) => (
        <ApiMenuItem
          onClick={() => {
            setSelectedShip(ship);
          }}
          active={selectedShip === ship}
          name={ship.name}
          key={ship.name}
        />
      ))}
      <Card className="detailsWrapperCard">
        {selectedShip && <Ship {...selectedShip} />}
      </Card>
    </>
  );
};

export default ShipsPage;
