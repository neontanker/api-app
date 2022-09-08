const whichApiObject = (apiName, index, data) => {
  // Todo: add more data & more API endpoints
  /* To add new data to display: find out the data structure of the API endpoint either by using the example on github: (Rockets docs) https://github.com/r-spacex/SpaceX-API/blob/master/docs/rockets/v4/all.md
  or sending a postman request (or just console.log the request data) then ammend the "details" object below associated with the chosen api endpoint.
  If the data needs any extras with it (like "feet" or "metres") you can add a if statement in ApiObject/ApiDetailsItem.js*/

  // To add a new API endpoint you will need to add a new button to Header/ApiNavigation.js with a value of the api endpoint, then create a new if statement and details object here.
  let details = {};
  if (apiName === "rockets") {
    details = {
      name: data[index].name,
      images: data[index].flickr_images,
      mass: data[index].mass.kg / 1000,
      height: data[index].height.feet,
      description: data[index].description,
    };
  }
  if (apiName === "dragons") {
    details = {
      name: data[index].name,
      images: data[index].flickr_images,
      mass: data[index].launch_payload_mass.kg / 1000,
      height: data[index].height_w_trunk.feet,
    };
  }
  if (apiName === "ships") {
    details = {
      name: data[index].name,
      images: data[index].image,
      mass: data[index].mass_kg / 1000,
      built: data[index].year_built,
      location: data[index].imo,
      link: data[index].link,
      roles: data[index].roles,
    };
  }

  return details;
};
export default whichApiObject;
