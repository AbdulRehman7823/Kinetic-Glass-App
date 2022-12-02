import React from "react";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";
const Version = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <h1 className="uppercase text-4xl font-bold pb-4 text-gray-700">
          Version
        </h1>
        <p className="pb-6 px-2 text-gray-700">
          Kinetic Glass is focused on providing compatibility for React 18. Doing
          so we had to introduce some breaking changes. That lead us to remove
          some features that we deprecated previously.
        </p>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Version;
