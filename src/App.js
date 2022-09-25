import React, { useState, useEffect, useCallback } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import ApiObject from "./components/ApiObject/ApiObject";
import getApiDataStructure from "./helpers/getApiDataStructure";
import fetchApiAt from "./helpers/fetchApiAt";
import { RocketsPage } from "./components/Rockets/RocketsPage";

// https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f

// https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee
function App() {
  // could use React Redux here to avoid prop chaining and store app-wide states, this is likely only a small app so not entirely necessary here
  /* saving raw data here and transformed data in currentApiDetails in order to continue to use raw data as otherwise we'd have to loop through raw data array to transform it.
  Is there a better way? Storing in fetch function would cause alot of memory without a cleanup*/
  // this one goes to "Header - ApiMenu" and is used with the "currentIndex" to change "currentApiDetails"
  const [apiRawData, setApiRawData] = useState([]);
  // this one goes to "ApiObject" to display all details
  const [currentApiDetails, setCurrentApiDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentApiName, setCurrentApiName] = useState("rockets");
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeApiObject = (objectName) => {
    console.log(objectName, "vs", currentApiName);
    console.log(objectName !== currentApiName && objectName !== "");
    if (objectName !== currentApiName && objectName !== "") {
      setCurrentApiName(objectName);
      fetchApiHandler(objectName);
    }
  };
  const changeCurrentIndex = (index) => {
    if (index !== currentIndex && !isNaN(index)) {
      setCurrentIndex(index);
      console.log("changing index..");
      const details = getApiDataStructure(currentApiName, index, apiRawData);
      setCurrentApiDetails(details);
    }
  };

  const fetchApiHandler = useCallback(
    async (apiPath = currentApiName) => {
      setIsLoading(true);
      setError(null);
      console.log("fetching...");

      const fetchedData = await fetchApiAt(apiPath);
      if (fetchedData.error) {
        setError(fetchedData.error.message);
        return;
      }
      setCurrentApiDetails(fetchedData.details);
      setApiRawData(fetchedData.rawData);

      setCurrentIndex(0);

      setIsLoading(false);
    },
    [currentApiName]
  );

  useEffect(() => {
    fetchApiHandler();
  }, [fetchApiHandler]);

  let content = <p>Found no API objects.</p>;
  if (currentApiDetails !== null) {
    content = <ApiObject details={currentApiDetails} />;
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
          apiObjectData={apiRawData}
          activeIndex={currentIndex}
          error={error}
        />
        {/* <main>{content}</main> */}
        <RocketsPage />
      </div>
    </>
  );
}

export default App;
