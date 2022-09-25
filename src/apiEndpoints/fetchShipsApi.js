import getApiDataStructure from "../helpers/getApiDataStructure";

const fetchShipsApi = async () => {
  //todo: set up pagination with "load more" button
  const queryOptions = {
    query: {},
    options: {
      select: {
        name: 1,
        image: 1,
        mass_kg: 1,
        year_built: 1,
        imo: 1,
        link: 1,
        roles: 1,
      },
      limit: 50,
    },
  };

  try {
    const response = await fetch(`https://api.spacexdata.com/v4/ships/query`, {
      method: "POST",
      body: JSON.stringify(queryOptions),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    const rawData = data.docs;
    const details = getApiDataStructure("ships", 0, rawData);
    return { rawData, details };
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export default fetchShipsApi;
