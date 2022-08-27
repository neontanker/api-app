import classes from "./Card.module.css";

const Card = (props) => {
  const style = `${classes.card} + ${props.className}`;
  return <div className={style}>{props.children}</div>;
};

export default Card;
