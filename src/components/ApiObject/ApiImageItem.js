import classes from "./ApiImageItem.module.css";

const ApiImageItem = (props) => {
  return (
    <li className={classes.listItem}>
      <img src={props.imageLink} alt=""></img>
    </li>
  );
};

export default ApiImageItem;
