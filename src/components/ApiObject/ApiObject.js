import Card from "../UI/Card";
import ApiImageList from "./ApiImageList";
import ApiDetails from "./ApiDetails";
import classes from "./ApiObject.module.css";

const ApiObject = (props) => {
  return (
    <Card className={classes.card}>
      <ApiDetails details={props.details} />
      <p>hello</p>
      <ApiImageList images={props.images} />
    </Card>
  );
};

export default ApiObject;
