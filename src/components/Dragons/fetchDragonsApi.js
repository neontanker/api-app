const BASE_DRAGONS_URL = `https://api.spacexdata.com/v4/Dragons/query`;
// https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f

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
  };

  try {
    const response = await fetch(BASE_DRAGONS_URL, {
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

export default fetchDragonsApi;
