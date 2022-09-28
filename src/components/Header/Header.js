import ApiNavigation from "./ApiNavigation";
import classes from "./Header.module.css";

const Header = (props) => {
  const changeApiObjectHandler = (object) => {
    props.changeApiObject(object);
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
    </header>
  );
};

export default Header;
