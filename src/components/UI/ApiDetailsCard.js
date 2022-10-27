import classes from "./ApiDetailsCard.module.css";

const ApiDetailsCard = (props) => {
  const style = `${classes.apiDetails} + ${props.className}`;

  return <div className={style}>{props.children}</div>;
};

export default ApiDetailsCard;
