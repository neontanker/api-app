import DragonsPage from "../Dragons/DragonsPage";
import RocketsPage from "../Rockets/RocketsPage";
import ShipsPage from "../Ships/ShipsPage";
import classes from "./Main.module.css";

const Main = ({ currentApiName }) => {
  let content = <p>Found no API objects.</p>;
  if (currentApiName === "rockets") {
    content = <RocketsPage />;
  }
  if (currentApiName === "dragons") {
    content = <DragonsPage />;
  }
  if (currentApiName === "ships") {
    content = <ShipsPage />;
  }
  return <main className={classes.main}>{content}</main>;
};

export default Main;
