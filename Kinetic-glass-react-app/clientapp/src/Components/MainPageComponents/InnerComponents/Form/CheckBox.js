import React from "react";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const CheckBox = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "Chech Box",
              description:
                "Get started with the checkbox component to allow the user to select one or more options in the form of a square box available in multiple sizes and colors",
              code: "<Checkbox props={{ input: {  class: ''  }, label: {  class: '',   text: 'Default checkbox'  }      }}     />    ",
            }}
          />{" "}
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default CheckBox;
