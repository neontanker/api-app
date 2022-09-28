import React, { useState } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

//todo: remove all unused components and focus on new refactor,
// add ships components, create a card style for the details - Completed
// create a way to change API's using the buttons in Header - Completed: is there a better way?
// perhaps create a "apiCard" component in "Shared" and use it to display the details nicely - Completedish - just created reusable CSS files in "UI"

function App() {
  // could use React Redux here to avoid prop chaining and store app-wide states, this is likely only a small app so not entirely necessary here
  /* saving raw data here and transformed data in currentApiDetails in order to continue to use raw data as otherwise we'd have to loop through raw data array to transform it.
  Is there a better way? Storing in fetch function would cause alot of memory without a cleanup*/
  // this one goes to "Header - ApiMenu" and is used with the "currentIndex" to change "currentApiDetails"
  // this one goes to "ApiObject" to display all details

  const [currentApiName, setCurrentApiName] = useState("rockets");

  // todo: needs changing? check what "objectName" is - I think it's fine as it stops the button running twice if clicked twice - maybe we can perform this check earlier?
  const changeApiObject = (objectName) => {
    if (objectName !== currentApiName && objectName !== "") {
      setCurrentApiName(objectName);
    }
  };

  return (
    <>
      <div className={classes.body}>
        <Header changeApiObject={changeApiObject} />
        <Main currentApiName={currentApiName} />
      </div>
    </>
  );
}

export default App;
