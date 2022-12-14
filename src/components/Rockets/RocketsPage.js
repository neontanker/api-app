import React, { useEffect, useState } from "react";
import ApiMenuItem from "../UI/ApiMenuItem";

import fetchRocketsApi from "./fetchRocketsApi";
import Rocket from "./Rocket";
import ApiDetailsWrapperCard from "../UI/ApiDetailsWrapperCard";

/**
 * Handle rockets API state and renders a list of rockets
 */
const RocketsPage = () => {
  const [rockets, setRockets] = useState(null);
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [error, setError] = useState(null);
  // const [selectedRocketIndex, setSelectedRocketIndex] = useState(null);
  // const selectedRocket = rockets && rockets[selectedRocketIndex]

  useEffect(() => {
    (async function getRockets() {
      const data = await fetchRocketsApi();
      if (data.error) {
        setError(data.error);
        return;
      }

      setRockets(data);
      setSelectedRocket(data[0]);
      setError(null);
    })();
  }, []);
  if (error) return <p>{error.message}</p>;
  if (!rockets) return <div>Loading...</div>;

  return (
    <>
      {rockets.map((rocket) => (
        <ApiMenuItem
          onClick={() => {
            setSelectedRocket(rocket);
          }}
          active={selectedRocket === rocket}
          name={rocket.name}
          key={rocket.name}
        />
      ))}
      <ApiDetailsWrapperCard>
        {selectedRocket && <Rocket {...selectedRocket} />}
      </ApiDetailsWrapperCard>
    </>
  );
};

export default RocketsPage;
