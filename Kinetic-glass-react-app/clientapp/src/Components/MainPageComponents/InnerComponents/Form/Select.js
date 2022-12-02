import React from "react";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const Select = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "Select",
              description:
                "Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants",
              code: "<Select props={{  label: {   class: '',   text: 'Select an option'},    select: {       class: ''   }       }}         />     ",
            }}
          />{" "}
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Select;
