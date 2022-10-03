import ApiNavigation from "./ApiNavigation";
import classes from "./Header.module.css";

const Header = ({ setVehicleType, vehicleType }) => {
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
      <ApiNavigation
        setVehicleType={(apiName) => setVehicleType(apiName)}
        vehicleType={vehicleType}
      />
    </header>
  );
};

export default Header;
