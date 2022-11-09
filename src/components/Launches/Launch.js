import React, { Suspense } from "react";

import RelatedItem from "../UI/RelatedItem";
import Rocket from "../Rockets/Rocket";
import Payload from "../Payloads/Payload";
import ApiDetailsCard from "../UI/ApiDetailsCard";
import classes from "./Launch.module.css";
import ApiDetailsWrapperCard from "../UI/ApiDetailsWrapperCard";
import Ship from "../Ships/Ship";
// import ApiImageList from "../Shared/ApiImageGallery/ApiImageList";

// Needed or not?
const ApiImageList = React.lazy(() =>
  import("../Shared/ApiImageGallery/ApiImageList")
);

const Launch = ({ details, name, payloads, rocket, links = {}, ships }) => {
  const launchImages = links.flickr.original;
  const payloadList = payloads.map((payload, i) => {
    return <Payload key={i} {...payload} />;
  });
  const shipList = ships.map((ship, i) => {
    return (
      <>
        <Ship key={i} {...ship} />
        <hr className={classes.divider}></hr>
      </>
    );
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
      {launchImages.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <ApiDetailsWrapperCard className={classes.launchImagesCard}>
            <ApiImageList
              images={launchImages}
              className={classes.launchGallery}
            />
          </ApiDetailsWrapperCard>
        </Suspense>
      )}
      <hr className={classes.divider}></hr>
      <RelatedItem className={classes.rocketCard} title={"Rocket used:"}>
        <Rocket galleryClassName={classes.rocketGallery} {...rocket} />
      </RelatedItem>
      <RelatedItem
        className={classes.payloadCard}
        title={"Payloads:"}
        isShown={payloadList.length > 0}
      >
        {payloadList}
      </RelatedItem>

      <RelatedItem
        className={classes.shipCard}
        title={"Ships:"}
        isShown={shipList.length > 0}
      >
        {shipList}
      </RelatedItem>
    </>
  );
};

export default Launch;
