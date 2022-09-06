import Card from "../UI/Card";

import classes from "./ApiDetails.module.css";

const ApiDetails = (props) => {
  const elephantMath = `(approximately ${Math.round(
    props.details.mass / 6
  )} elephants)`;

  return (
    <Card className={classes.card}>
      <p>
        <strong>Name:</strong> {props.details.name}
      </p>
      {props.details.mass ? (
        <p>
          <strong>Mass:</strong> {props.details.mass} tons {elephantMath}
        </p>
      ) : (
        ""
      )}
      {props.details.height && (
        <p>
          <strong>Height:</strong> {props.details.height} feet
        </p>
      )}
    </Card>
  );
};

export default ApiDetails;
