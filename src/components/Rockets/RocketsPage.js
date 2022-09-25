import React, { useEffect, useState } from "react";
import ApiImageList from "../ApiObject/ApiImageList";
import ApiMenuItem from "../UI/ApiMenuItem";
import Card from "../UI/Card";
import fetchRocketsApi from "./fetchRocketsApi";
import { Rocket } from "./Rocket";
import classes from "./RocketsPage.module.css";

/**
 * Handle rockets API state and renders a list of rockets
 */
export function RocketsPage() {
  const [rockets, setRockets] = useState(null);
  const [selectedRocket, setSelectedRocket] = useState(null);
  // const [selectedRocketIndex, setSelectedRocketIndex] = useState(null);
  // const selectedRocket = rockets && rockets[selectedRocketIndex]

  useEffect(() => {
    async function getRockets() {
      const data = await fetchRocketsApi();
      setRockets(data);
      setSelectedRocket(data[0]);
    }
    getRockets();
  }, [setRockets]);

  console.log(rockets);

  if (!rockets) return <div>loading</div>;

  return (
    <Card className={classes.card}>
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

      {selectedRocket && <Rocket {...selectedRocket} />}
    </Card>
  );
}
