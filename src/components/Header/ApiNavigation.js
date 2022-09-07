import { useState } from "react";

import classes from "./ApiNavigation.module.css";

const ApiNavigation = (props) => {
  const [activeApi, setActiveApi] = useState("rockets");
  const onClickHandler = (event) => {
    const object = event.target.value;
    props.changeApiObject(object);
    setActiveApi(object);
  };

  return (
    <nav role="navigation" className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <button
            className={activeApi === "rockets" ? `${classes.active}` : ""}
            href="#"
            value="rockets"
            onClick={onClickHandler}
          >
            Rocket
          </button>
        </li>
        <li>
          <button
            className={activeApi === "dragons" ? `${classes.active}` : ""}
            href="#"
            value="dragons"
            onClick={onClickHandler}
          >
            Dragon
          </button>
        </li>
        <li>
          <button
            className={activeApi === "ships" ? `${classes.active}` : ""}
            href="#"
            value="ships"
            onClick={onClickHandler}
          >
            Ship
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ApiNavigation;
