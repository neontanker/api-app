import classes from "./ApiDetailsItem.module.css";

const ApiDetailsItem = (props) => {
  const value = props.content;
  let content = value;
  if (props.name === "location") {
    content = (
      <a
        href={`https://www.vesselfinder.com/?imo=${value}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.vesselfinder.com/?imo=${value}
      </a>
    );
  }
  if (props.name === "link") {
    content = (
      <a href={value} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    );
  }
  if (props.name === "mass") {
    content = `${value} tons ${props.elephant}`;
  }
  if (props.name === "height") {
    content += " feet";
  }
  if (props.name === "roles") {
    content = value.join(", ");
  }

  return props.content ? (
    <p className={classes.p}>
      <strong>{props.name}:</strong> {content}
    </p>
  ) : (
    ""
  );
};

export default ApiDetailsItem;

/*
  return props.content ? (
    <p className={classes.p}>
      <strong>{props.name}:</strong>{" "}
      {props.name === "location" ? "https://www.vesselfinder.com/?imo=" : ""}
      {props.content}
      {props.name === "mass" ? "tons " + props.elephant : ""}
      {props.name === "height" ? "feet" : ""}
    </p>
  ) : (
    ""
  );
  */
