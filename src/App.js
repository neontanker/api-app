import React, { useState, useEffect, useCallback } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import ApiObject from "./components/ApiObject/ApiObject";
import whichApiObject from "./components/Helpers/whichApiObject";

// Note:COMPLETED (Alternate method: get all rockets/(etc) and map out the names onto a menu, then only load/filter selected rocket by id of the selected menu item
// Remove dropdown menu, have different sections of rockets/dragons and make a request when those buttons are clicked Get all rockets(etc) map out the Name + Id's
// to a new menu inpage)

// https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f

// https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee
function App() {
  // could use React Redux here to avoid prop chaining and store app-wide states, this is likely only a small app so not entirely necessary here
  const [apiObjectData, setObjectsData] = useState([]);
  const [apiObjectDetails, setObjectDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiObjectName, setApiObject] = useState("rockets");
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeApiObject = (objectName) => {
    if (objectName !== apiObjectName && objectName !== "") {
      setApiObject(objectName);
      fetchObjectHandler(objectName);
    }
  };
  const changeCurrentIndex = (index) => {
    if (index !== currentIndex && !isNaN(index)) {
      setCurrentIndex(index);
      console.log("changing index..");
      // have to store response data into objectsData and then call whichApiObject here. But atleast we're not sending a request to the API everytime we change index
      const details = whichApiObject(apiObjectName, index, apiObjectData);
      setObjectDetails(details);
    }
  };

  /* There is (I believe) a better way to send requests by using the /query path https://github.com/r-spacex/SpaceX-API/blob/master/docs/queries.md
  for example to better include the /launches path with pagination, perhaps create a seperate request for each API endpoint
  instead of just changing the data structure so we only request the data we need. (example: only fetching all "name" (& "index"?) properties for ApiMenuList)*/
  const fetchObjectHandler = useCallback(
    async (apiPath = apiObjectName) => {
      setIsLoading(true);
      setError(null);
      console.log("fetching...");
      try {
        const response = await fetch(
          `https://api.spacexdata.com/v4/${apiPath}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        const details = whichApiObject(apiPath, 0, data);

        setCurrentIndex(0);
        // storing data outside of fetch function in objectsData so we can change our current apiObject using it's index without sending another API request
        setObjectsData(data);
        setObjectDetails(details);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [apiObjectName]
  );

  useEffect(() => {
    fetchObjectHandler();
  }, [fetchObjectHandler]);

  let content = <p>Found no API objects.</p>;
  if (apiObjectDetails !== null) {
    content = <ApiObject details={apiObjectDetails} />;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <div className={classes.body}>
        <Header
          changeApiObject={changeApiObject}
          changeCurrentIndex={changeCurrentIndex}
          apiObjectData={apiObjectData}
        />
        <main>{content}</main>
      </div>
    </>
  );
}

export default App;
