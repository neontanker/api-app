import React, { useCallback, useEffect, useState } from "react";

import ApiMenuItem from "../UI/ApiMenuItem";
import fetchLaunchesApi from "./fetchLaunchesApi";
import Launch from "./Launch";
import PageNumberList from "../Shared/PageNumberMenu/PageMenuList";
import ApiDetailsWrapperCard from "../UI/ApiDetailsWrapperCard";

const LaunchesPage = () => {
  const [launches, setLaunches] = useState([]);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [error, setError] = useState(null);
  const [paginationOptions, setPaginationOptions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getLaunches = useCallback(async (pageNumber) => {
    setIsLoading(true);
    const data = await fetchLaunchesApi(pageNumber);
    if (data.error) {
      setError(data.error);
      return;
    }
    setLaunches(data.docs);
    setSelectedLaunch(data.docs[0]);
    setPaginationOptions(data.pagination);
    setError(null);
    setIsLoading(false);
  }, []);
  const changePageHandler = (pageNumber) => {
    // const options = {
    //   pageNumber: 2,
    // };
    getLaunches(pageNumber);
  };

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  const launchMenu = launches.map((launch) => (
    <ApiMenuItem
      onClick={() => {
        setSelectedLaunch(launch);
      }}
      active={selectedLaunch === launch}
      name={launch.name}
      key={launch.name}
    />
  ));

  return (
    <>
      {launchMenu}
      <PageNumberList
        paginationOptions={paginationOptions}
        changePageHandler={changePageHandler}
      />
      <ApiDetailsWrapperCard>
        {selectedLaunch && <Launch {...selectedLaunch} />}
      </ApiDetailsWrapperCard>
    </>
  );
};

export default LaunchesPage;
