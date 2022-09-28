const BASE_SHIPS_URL = `https://api.spacexdata.com/v4/ships/query`;

const fetchShipsApi = async () => {
  const queryOptions = {
    query: {},
    options: {
      pagination: false,
      select: {
        name: 1,
        image: 1,
        mass_kg: 1,
        year_built: 1,
        imo: 1,
        link: 1,
        roles: 1,
      },
    },
  };

  try {
    const response = await fetch(BASE_SHIPS_URL, {
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

export default fetchShipsApi;
