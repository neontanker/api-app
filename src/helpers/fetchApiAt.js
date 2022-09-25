import fetchRocketsApi from "../apiEndpoints/fetchRocketsApi";
import fetchDragonsApi from "../apiEndpoints/fetchDragonsApi";
import fetchShipsApi from "../apiEndpoints/fetchShipsApi";

const fetchApiAt = async (apiPath) => {
  if (apiPath === "rockets") {
    const rocketsData = await fetchRocketsApi();
    return {
      details: rocketsData.details,
      rawData: rocketsData.rawData,
      error: rocketsData.error,
    };
  }
  if (apiPath === "dragons") {
    const dragonsData = await fetchDragonsApi();
    return {
      details: dragonsData.details,
      rawData: dragonsData.rawData,
      error: dragonsData.error,
    };
  }
  if (apiPath === "ships") {
    const shipsData = await fetchShipsApi();
    return {
      details: shipsData.details,
      rawData: shipsData.rawData,
      error: shipsData.error,
    };
  }
};

export default fetchApiAt;
