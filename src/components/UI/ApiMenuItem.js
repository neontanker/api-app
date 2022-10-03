import classes from "./ApiMenuItem.module.css";

/**
 * Display an API navigation item
 */
const ApiMenuItem = (props) => {
  const { onClick, active, name } = props;

  let cssClasses = `${classes.button}`;

  if (active) {
    cssClasses = `${classes.button} ${classes.active}`;
  }

  return (
    <button className={cssClasses} onClick={onClick}>
      {name}
    </button>
  );
};

export default ApiMenuItem;
