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
    // if same as last time: return old data for "caching?" instead of having seperate function to avoid sending multiple requests? (might take up alot of memory if seperate fetch functions)
  };
  //   setIsLoading(true);
  //   setError(null);
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
    const shipDetails = getApiDataStructure("ships", 0, rawData);
    return { rawData, shipDetails };
  } catch (error) {
    console.log(error.message);
  }
  //   setIsLoading(false);
};

export default fetchShipsApi;

//   if (currentApiName === "rockets") {
//     details = {
//       name: data[index].name,
//       images: data[index].flickr_images,
//       mass: data[index].mass.kg / 1000,
//       height: data[index].height.feet,
//       description: data[index].description,
//     };
//   }
