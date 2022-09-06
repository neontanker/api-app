import classes from "./ApiMenuItem.module.css";

const ApiMenuItem = (props) => {
  const onClickHandler = (event) => {
    const index = event.target.value;
    props.changeCurrentIndex(index);
  };

  return (
    <button
      className={classes.button}
      onClick={onClickHandler}
      value={props.value}
    >
      {props.name}
    </button>
  );
};

export default ApiMenuItem;
