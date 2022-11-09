import classes from "./PageMenuItem.module.css";

const PageNumberItem = (props) => {
  const onClickHandler = () => {
    props.onClick(props.number);
  };
  return (
    <button
      className={`${classes.pageMenuButton} ${props.active && classes.active}`}
      onClick={onClickHandler}
    >
      {props.children || props.number}
    </button>
  );
};
export default PageNumberItem;
