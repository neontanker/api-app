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
    // if same as last time: return old data for "caching?" instead of having seperate function to avoid sending multiple requests? (might take up alot of memory if seperate fetch functions)
  };
  //   setIsLoading(true);
  //   setError(null);
  console.log("fetching...Rockets");
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
    console.log("Rocket data", data.docs);
    const rocketDetails = getApiDataStructure("rockets", 0, rawData);
    return { rawData, rocketDetails };
  } catch (error) {
    console.log(error.message);
  }
  //   setIsLoading(false);
};

export default fetchRocketsApi;

//   if (currentApiName === "rockets") {
//     details = {
//       name: data[index].name,
//       images: data[index].flickr_images,
//       mass: data[index].mass.kg / 1000,
//       height: data[index].height.feet,
//       description: data[index].description,
//     };
//   }
