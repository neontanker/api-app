import Card from "../UI/Card";
import ApiImageList from "./ApiImageList";
import ApiDetails from "./ApiDetails";
import classes from "./ApiObject.module.css";

const ApiObject = (props) => {
  return (
    <Card className={classes.card}>
      <ApiDetails details={props.details} />

      <ApiImageList images={props.details.images} />
    </Card>
  );
};

export default ApiObject;
