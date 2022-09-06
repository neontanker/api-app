import classes from "./ApiImageList.module.css";
import ApiImageItem from "./ApiImageItem";

const ApiImageList = (props) => {
  let images = [];
  if (Array.isArray(props.images)) {
    images = props.images.map((image, i) => {
      return <ApiImageItem key={i} imageLink={image} />;
    });
  } else {
    images = <ApiImageItem imageLink={props.images} />;
  }

  return <ul className={classes.list}>{images}</ul>;
};

export default ApiImageList;
