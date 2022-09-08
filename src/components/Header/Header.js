import { useState } from "react";

import ApiMenuList from "./ApiMenuList";
import ApiNavigation from "./ApiNavigation";
import classes from "./Header.module.css";

const Header = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeApiObjectHandler = (object) => {
    props.changeApiObject(object);
    setActiveIndex(0);
  };
  const changeCurrentIndexHandler = (index) => {
    props.changeCurrentIndex(index);
    setActiveIndex(index);
  };
  return (
    <header className={classes.header}>
      <h1>
        <a
          href="https://github.com/r-spacex/SpaceX-API"
          target="_blank"
          rel="noopener noreferrer"
        >
          SpaceX API
        </a>
      </h1>
      <ApiNavigation changeApiObject={changeApiObjectHandler} />
      <ApiMenuList
        activeIndex={activeIndex}
        changeCurrentIndex={changeCurrentIndexHandler}
        apiObjectData={props.apiObjectData}
      />
    </header>
  );
};

export default Header;
