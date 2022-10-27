import React, { Suspense } from "react";

import RelatedItem from "../UI/RelatedItem";
import Rocket from "../Rockets/Rocket";
import Payload from "../Payloads/Payload";
import ApiDetailsCard from "../UI/ApiDetailsCard";
import classes from "./Launch.module.css";
import ApiDetailsWrapperCard from "../UI/ApiDetailsWrapperCard";
// import ApiImageList from "../Shared/ApiImageGallery/ApiImageList";

// Needed or not?
const ApiImageList = React.lazy(() =>
  import("../Shared/ApiImageGallery/ApiImageList")
);

const Launch = ({ details, name, payloads, rocket, links = {} }) => {
  // const tons = mass_kg / 1000;

  // const elephantMath = `(approximately ${Math.round(tons / 6)} elephants)`;
  const flickerImages = links.flickr.original;
  const payloadList = payloads.map((payload, i) => {
    return <Payload key={i} {...payload} />;
  });
  //@TODO: Add more details
  return (
    <>
      <ApiDetailsCard className={classes.launchDetails}>
        <p>
          <strong>Name:</strong> {name}
        </p>

        {details && (
          <p>
            <strong>Details:</strong> {details}
          </p>
        )}
      </ApiDetailsCard>
      <Suspense fallback={<div>Loading...</div>}>
        <ApiDetailsWrapperCard className={classes.launchImagesCard}>
          {flickerImages.length > 0 && <ApiImageList images={flickerImages} />}
        </ApiDetailsWrapperCard>
      </Suspense>
      <hr className={classes.divider}></hr>
      <RelatedItem className={classes.rocketCard} title={"Rocket used:"}>
        <Rocket {...rocket} />
      </RelatedItem>
      <RelatedItem className={classes.payloadCard} title={"Payloads:"}>
        {payloadList}
      </RelatedItem>
    </>
  );
};

export default Launch;
