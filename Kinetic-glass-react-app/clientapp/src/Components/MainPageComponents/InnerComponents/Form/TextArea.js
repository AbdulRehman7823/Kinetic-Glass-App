import React from "react";
import ReactLivePreview from "../../LivePreview/ReactLivePreview";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const TextArea = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="p-4">
          <ReactLivePreview
            props={{
              title: "Text Area",
              description:
                "Use the textarea component as a multi-line text field input and use it inside form elements available in multiple sizes, styles, and variants",
              code: "<TextArea   props={{     label: {  class: '',     text: 'Your Message'      },      textarea: {   class: '',    placeholder: 'Write your thoughts here...',      rows: '4'    }   }}  />  ",
            }}
          />{" "}
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default TextArea;
