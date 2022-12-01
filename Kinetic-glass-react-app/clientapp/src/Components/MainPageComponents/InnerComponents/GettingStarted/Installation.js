import React from "react";
import MiddlePanel from "../../middlePanel/MiddlePanel";
import MainPanel from "../../mainPanel/MainPanel";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";

export const Installation = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "Button",
              description:
                "lorem lorem lorem ipsum dolor sit amet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip lorem ipsum dolor lorem ipsum<",
              code: "<Button> Click me!! </Button>",
            }}
          />
         
          <ReactLivePreview
            props={{
              title: "Button",
              description:
                "lorem lorem lorem ipsum dolor sit amet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip lorem ipsum dolor lorem ipsum<",
              code: "<Button> Click me!! </Button>",
            }}
          />
           <hr className="mx-10 my-6"></hr>
           <ReactLivePreview
            props={{
              title: "Button",
              description:
                "lorem lorem lorem ipsum dolor sit amet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip loamet, consectetur adip lorem ipsum dolor lorem ipsum<",
              code: "<Button> Click me!! </Button>",
            }}
          />
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Installation;
