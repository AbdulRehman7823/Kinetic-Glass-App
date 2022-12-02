import React from "react";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const Button = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "Button",
              description:
                "Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows ",
              code: "<Button> Click me!! </Button>",
            }}
          />{" "}
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Button;
