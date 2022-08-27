import classes from "./Header.module.css";

const Header = (props) => {
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
    </header>
  );
};

export default Header;
