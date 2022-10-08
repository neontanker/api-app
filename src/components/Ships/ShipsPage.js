import React, { useCallback, useEffect, useState } from "react";

import ApiMenuItem from "../UI/ApiMenuItem";
import Card from "../UI/Card";
import fetchShipsApi from "./fetchShipsApi";
import Ship from "./Ship";
import "../UI/apiDetailsWrapperCard.css";
import PageNumberList from "../Shared/PageNumberMenu/PageMenuList";

const ShipsPage = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [error, setError] = useState(null);
  const [paginationOptions, setPaginationOptions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getShips = useCallback(async (pageNumber) => {
    setIsLoading(true);
    const data = await fetchShipsApi(pageNumber);
    if (data.error) {
      setError(data.error);
      return;
    }
    setShips(data.docs);
    setSelectedShip(data.docs[0]);
    setPaginationOptions(data.pagination);
    setError(null);
    setIsLoading(false);
  }, []);
  const changePageHandler = (pageNumber) => {
    // const options = {
    //   pageNumber: 2,
    // };
    getShips(pageNumber);
  };

  useEffect(() => {
    getShips();
  }, [getShips]);
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  const shipMenu = ships.map((ship) => (
    <ApiMenuItem
      onClick={() => {
        setSelectedShip(ship);
      }}
      active={selectedShip === ship}
      name={ship.name}
      key={ship.name}
    />
  ));

  return (
    <>
      {shipMenu}
      <PageNumberList
        paginationOptions={paginationOptions}
        changePageHandler={changePageHandler}
      />
      <Card className="detailsWrapperCard">
        {selectedShip && <Ship {...selectedShip} />}
      </Card>
    </>
  );
};

export default ShipsPage;
