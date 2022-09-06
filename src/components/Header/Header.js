import ApiMenuList from "./ApiMenuList";
import ApiNavigation from "./ApiNavigation";
import classes from "./Header.module.css";

const Header = (props) => {
  const changeApiObjectHandler = (object) => {
    props.changeApiObject(object);
  };
  const changeCurrentIndexHandler = (index) => {
    props.changeCurrentIndex(index);
  };
  // Todo: loading... for ApiMenuList
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
        changeCurrentIndex={changeCurrentIndexHandler}
        apiObjectData={props.apiObjectData}
      />
    </header>
  );
};

export default Header;
