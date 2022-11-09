import classes from "./ApiDetailsWrapperCard.module.css";

const ApiDetailsWrapperCard = (props) => {
  const style = `${classes.apiDetailsWrapper} + ${props.className}`;

  return <div className={style}>{props.children}</div>;
};

export default ApiDetailsWrapperCard;
