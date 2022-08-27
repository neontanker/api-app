import React, { useState, useEffect, useCallback } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import ApiObject from "./components/ApiObject/ApiObject";

// dragon
// https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f

// "5e9d0d95eda69955f709d1eb"
// "5e9d0d95eda69973a809d1ec"
// "5e9d0d95eda69974db09d1ed"
// https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee
function App() {
  const [objectImages, setObjectImages] = useState([]);
  const [objectDetails, setObjectDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [apiObject, setApiObject] = useState("dragonAPI");

  // let url = ""

  const fetchObjectHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data, "fetching Data");

      const {
        name: vame = null,
        description,
        height: { meters } = 500,
        diameter,
        mass: { kg } = 500,
        flickr_images: images,
      } = data;

      const details = {
        name: vame,
        description,
        height: meters, // <-- try for stuff
        mass: +kg / 1000,
      };
      console.log(details, "details");

      // for (const key in data.flickr_images) {
      // loadedImages.push({
      //     id: key,
      //     title: data[key].title,
      //     openingText: data[key].openingText,
      //     releaseDate: data[key].releaseDate,
      //   });
      // }
      setObjectDetails(details);
      setObjectImages(images);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchObjectHandler();
  }, [fetchObjectHandler]);

  // async function addMovieHandler(movie) {
  //   console.log(movie);
  //   const response = await fetch(
  //     "https://react-http-c6a81-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(movie),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }

  let content = <p>Found no API objects.</p>;

  if (objectImages.length > 0) {
    content = <ApiObject images={objectImages} details={objectDetails} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <div className={classes.body}>
        <Header />
        <main>{content}</main>
      </div>
    </>
  );
}

export default App;
