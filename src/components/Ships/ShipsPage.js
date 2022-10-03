import React, { useEffect, useState } from "react";

import ApiMenuItem from "../UI/ApiMenuItem";
import Card from "../UI/Card";
import fetchShipsApi from "./fetchShipsApi";
import Ship from "./Ship";
import "../UI/apiDetailsWrapperCard.css";
// import PageNumberList from "./PageNumberMenu/PageNumberList";

const ShipsPage = () => {
  // WIP: Pagination
  const [ships, setShips] = useState(null);
  const [selectedShip, setSelectedShip] = useState(null);
  const [error, setError] = useState(null);
  // const [totalPages, setTotalPages] = useState(0);

  const getShips = async (pageNumber) => {
    const data = await fetchShipsApi(pageNumber);
    if (data.error) {
      setError(data.error);
      return;
    }
    setShips(data.docs);
    setSelectedShip(data.docs[0]);
    // setTotalPages(data.totalPages);
    setError(null);
  };
  // const changePageHandler = (pageNumber) => {
  //   // const options = {
  //   //   pageNumber: 2,
  //   // };
  //   getShips(pageNumber);
  // };

  useEffect(() => {
    getShips();
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
      {/* <PageNumberList
        totalPages={totalPages}
        changePageHandler={changePageHandler}
      /> */}
      <Card className="detailsWrapperCard">
        {selectedShip && <Ship {...selectedShip} />}
      </Card>
    </>
  );
};

export default ShipsPage;
