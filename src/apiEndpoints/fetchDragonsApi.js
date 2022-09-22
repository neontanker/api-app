import getApiDataStructure from "../helpers/getApiDataStructure";

const fetchDragonsApi = async () => {
  const queryOptions = {
    query: {},
    options: {
      select: {
        name: 1,
        flickr_images: 1,
        launch_payload_mass: 1,
        height_w_trunk: 1,
        description: 1,
      },
    },

    // if same as last time: return old data for "caching?" instead of having seperate function to avoid sending multiple requests? (might take up alot of memory if seperate fetch functions)
  };
  //   setIsLoading(true);
  //   setError(null);
  console.log("fetching...Dragons");

  try {
    const response = await fetch(
      `https://api.spacexdata.com/v4/dragons/query`,
      {
        method: "POST",
        body: JSON.stringify(queryOptions),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    const rawData = data.docs;
    const dragonDetails = getApiDataStructure("dragons", 0, rawData);
    return { rawData, dragonDetails };
  } catch (error) {
    console.log(error.message);
  }
  //   setIsLoading(false);
};

export default fetchDragonsApi;
