const BASE_ROCKETS_URL = `https://api.spacexdata.com/v4/rockets/query`;

// https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee

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
    const response = await fetch(BASE_ROCKETS_URL, {
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
    return data.docs;
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export default fetchRocketsApi;
