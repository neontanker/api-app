import ApiDetailsWrapperCard from "./ApiDetailsWrapperCard";
import classes from "./RelatedItems.module.css";

const RelatedItem = ({ title, className, children, isShown = true }) => {
  if (!isShown) {
    return null;
  }
  return (
    <div className={classes.wrapper}>
      <h2>{title}</h2>
      <ApiDetailsWrapperCard className={className}>
        {children}
      </ApiDetailsWrapperCard>
    </div>
  );
};

export default RelatedItem;
