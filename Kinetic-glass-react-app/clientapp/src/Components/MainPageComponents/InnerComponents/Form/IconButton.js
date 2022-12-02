import React from "react";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const IconButton = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "Icon Button",
              description:
                "Sometimes you need a button to indicate an action using only an icon",
              code: "<IconButton   props={{ button: {  class: '',     text: 'Buy Now' }   }}     />    ",
            }}
          />{" "}
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default IconButton;
