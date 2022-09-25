import getApiDataStructure from "../helpers/getApiDataStructure";

const fetchRocketsApi = async () => {
  const queryOptions = {
    query: {},
    options: {
      select: {
        name: 1,
        flickr_images: 1,
        mass: 1,
        height: 1,
        description: 1,
      },
    },
  };

  try {
    const response = await fetch(
      `https://api.spacexdata.com/v4/rockets/query`,
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
    const details = getApiDataStructure("rockets", 0, rawData);
    return { rawData, details };
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export default fetchRocketsApi;
