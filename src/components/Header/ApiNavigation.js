import classes from "./ApiNavigation.module.css";

const ApiNavigation = (props) => {
  const onClickHandler = (event) => {
    const object = event.target.value;
    props.changeApiObject(object);
  };

  return (
    <nav role="navigation" className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <button href="#" value="rockets" onClick={onClickHandler}>
            Rocket
          </button>
        </li>
        <li>
          <button href="#" value="dragons" onClick={onClickHandler}>
            Dragon
          </button>
        </li>
        <li>
          <button href="#" value="ships" onClick={onClickHandler}>
            Ship
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ApiNavigation;
