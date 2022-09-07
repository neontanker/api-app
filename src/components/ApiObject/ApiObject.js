import Card from "../UI/Card";
import ApiImageList from "./ApiImageList";
import ApiDetails from "./ApiDetails";
import classes from "./ApiObject.module.css";

const ApiObject = (props) => {
  const { images, ...details } = props.details;
  return (
    <Card className={classes.card}>
      <ApiDetails details={details} />

      <ApiImageList images={images} />
    </Card>
  );
};

export default ApiObject;
