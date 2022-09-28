import React, { useEffect, useState } from "react";
import ApiMenuItem from "../UI/ApiMenuItem";
import Card from "../UI/Card";
import fetchDragonsApi from "./fetchDragonsApi";
import Dragon from "./Dragon";

import "../UI/apiDetailsWrapperCard.css";

const DragonsPage = () => {
  const [dragons, setDragons] = useState(null);
  const [selectedDragon, setSelectedDragon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function getDragons() {
      const data = await fetchDragonsApi();
      if (data.error) {
        setError(data.error);
        return;
      }
      setDragons(data);
      setSelectedDragon(data[0]);
      setError(null);
    })();
  }, [setDragons]);

  if (error) return <p>{error.message}</p>;
  if (!dragons) return <div>Loading...</div>;

  return (
    <>
      {dragons.map((dragon) => (
        <ApiMenuItem
          onClick={() => {
            setSelectedDragon(dragon);
          }}
          active={selectedDragon === dragon}
          name={dragon.name}
          key={dragon.name}
        />
      ))}
      <Card className="detailsWrapperCard">
        {selectedDragon && <Dragon {...selectedDragon} />}
      </Card>
    </>
  );
};

export default DragonsPage;
