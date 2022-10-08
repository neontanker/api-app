const BASE_ROCKETS_URL = `https://api.spacexdata.com/v4/rockets/`;

// https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee

const fetchRocketsApi = async () => {
  // const queryOptions = {
  //   query: {},
  //   options: {
  //     select: {
  //       name: 1,
  //       flickr_images: 1,
  //       mass: 1,
  //       height: 1,
  //       description: 1,
  //     },
  //   },
  // };

  // GET request slightly faster than the "query" POST request and enables automatic caching, we're using GET because rockets don't need Pagination
  try {
    const response = await fetch(BASE_ROCKETS_URL, {
      method: "GET",
      // body: JSON.stringify(queryOptions),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    // We could destructure/transform this data so we don't save any unused data in RocketsPage.js
    return data;
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export default fetchRocketsApi;
