import React from "react";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const TextField = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "TextField",
              description:
                "Text Fields let users enter and edit text.",
              code: "",
            }}
          />{" "}
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default TextField;
