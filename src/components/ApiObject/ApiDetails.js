import Card from "../UI/Card";

import classes from "./ApiDetails.module.css";

const ApiDetails = (props) => {
  const elephantMath = `(approximately ${Math.round(
    props.details.mass / 6
  )} elephants).`;
  return (
    <Card className={classes.card}>
      <p>Name: {props.details.name}</p>
      <p>
        Mass: {props.details.mass} tons {elephantMath}
      </p>
    </Card>
  );
};

export default ApiDetails;
