const whichApiObject = (apiName, index, data) => {
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