import classes from "./ApiMenuItem.module.css";

const ApiMenuItem = (props) => {
  let cssClasses = `${classes.button}`;

  const onClickHandler = (event) => {
    const index = event.target.value;
    props.changeCurrentIndex(+index);
  };

  if (props.activeIndex === props.value) {
    cssClasses = `${classes.button} ${classes.active}`;
  }

  return (
    <button className={cssClasses} onClick={onClickHandler} value={props.value}>
      {props.name}
    </button>
  );
};

export default ApiMenuItem;
