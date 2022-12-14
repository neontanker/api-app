import DragonsPage from "../Dragons/DragonsPage";
import LaunchesPage from "../Launches/LaunchesPage";
import RocketsPage from "../Rockets/RocketsPage";
import ShipsPage from "../Ships/ShipsPage";
import classes from "./Main.module.css";

const Main = ({ vehicleType }) => {
  let content = <p>Found no API objects.</p>;
  if (vehicleType === "rockets") {
    content = <RocketsPage />;
  }
  if (vehicleType === "dragons") {
    content = <DragonsPage />;
  }
  if (vehicleType === "ships") {
    content = <ShipsPage />;
  }
  if (vehicleType === "launches") {
    content = <LaunchesPage />;
  }
  return <main className={classes.main}>{content}</main>;
};

export default Main;
