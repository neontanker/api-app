const BASE_Launches_URL = `https://api.spacexdata.com/v4/launches/query`;

const fetchLaunchesApi = async (pageNumber = 1) => {
  // fetchOneObject...?
  const queryOptions = {
    query: {},
    options: {
      limit: 10,
      page: pageNumber,
      select: {
        name: 1,
        details: 1,
        links: 1,
      },
      populate: ["payloads", "rocket", "ships"],
    },
  };

  try {
    const response = await fetch(BASE_Launches_URL, {
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
    const { docs, ...pagination } = data;
    return { docs, pagination };
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

export default fetchLaunchesApi;
