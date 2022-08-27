import classes from "./ApiImageList.module.css";
import ApiImageItem from "./ApiImageItem";

const ApiImageList = (props) => {
  const images = props.images.map((image, i) => {
    return <ApiImageItem key={i} imageLink={image} />;
  });

  return <ul className={classes.list}>{images}</ul>;
};

export default ApiImageList;
