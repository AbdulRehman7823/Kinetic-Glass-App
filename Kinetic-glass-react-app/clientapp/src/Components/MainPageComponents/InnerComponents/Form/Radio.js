import React from "react";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const Radio = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "Radio Button",
              description:
                "Get started with the radio component to let the user choose a single option from multiple options in the form of a circle based on multiple styles and colors",
              code: "<Radio props={{  input: {    class: '',    name: 'Default-radio'     },  label: {   class: '',   text: 'Default Radio-Button'        }     }}    />    ",
            }}
          />{" "}
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Radio;
