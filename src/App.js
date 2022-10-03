import React, { useState } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

//@TODO: use React Query to avoid double API call, also perhaps reduce the "loading..." time (check out "Suspense" too)

function App() {
  const [vehicleType, setVehicleType] = useState("rockets");

  return (
    <>
      <div className={classes.body}>
        <Header setVehicleType={setVehicleType} vehicleType={vehicleType} />
        <Main vehicleType={vehicleType} />
      </div>
    </>
  );
}

export default App;
