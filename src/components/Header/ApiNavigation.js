import classes from "./ApiNavigation.module.css";

const vehicleTypes = [
  { key: "rockets", label: "Rocket" },
  { key: "dragons", label: "Dragon" },
  { key: "ships", label: "Ship" },
];

const ApiNavigation = ({ setVehicleType, vehicleType }) => {
  const onClickHandler = (name) => {
    setVehicleType(name);
  };

  return (
    <nav role="navigation" className={classes.nav}>
      <ul className={classes.ul}>
        {vehicleTypes.map(({ key, label }) => (
          <li key={key}>
            <button
              className={vehicleType === key ? `${classes.active}` : ""}
              href="#"
              onClick={() => onClickHandler(key)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ApiNavigation;
