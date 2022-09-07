import Card from "../UI/Card";

import classes from "./ApiDetails.module.css";
import ApiDetailsItem from "./ApiDetailsItem";

const ApiDetails = (props) => {
  // atm may aswell just be props.details instead..
  const { ...rest } = props.details;
  const elephantMath = `(approximately ${Math.round(rest.mass / 6)} elephants)`;

  const content = Object.keys(rest).map((keyName, i) => (
    <ApiDetailsItem
      key={i}
      name={keyName}
      content={rest[keyName]}
      elephant={elephantMath}
    />
  ));
  return <Card className={classes.card}>{content}</Card>;
};

export default ApiDetails;
