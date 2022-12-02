import React from "react";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const Priciples = () => {
  return (
    <MainPanel>
      <MiddlePanel>
        <div className="px-4">
          <h1 className="uppercase text-4xl font-bold pb-4 text-gray-700">
            Design Principles
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            Kinetic Glass is established on principles that keep its components
            fairly consistent. Understanding these concepts will help you better
            contribute to Kinetic Glass.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            Our goal is to design simple, composable components that cater to
            real-life UI design problems. In order to do that, we developed a
            set of principles that help us always be on that path.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Style Props:</span> All component styles
            can be overridden or extended via style props to reduce the use of
            css prop or styled(). Compose new components from Box.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Simplicity:</span> Strive to keep the
            component API fairly simple and show real world scenarios of using
            the component.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Composition:</span> Break down
            components into smaller parts with minimal props to keep complexity
            low, and compose them together. This will ensure that the styles and
            functionality are flexible and extensible.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Accessibility:</span> When creating a
            component, keep accessibility top of mind. This includes keyboard
            navigation, focus management, color contrast, voice over, and the
            correct aria-* attributes.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Naming Props:</span> We all know naming
            is the hardest thing in this industry. Generally, ensure a prop name
            is indicative of what it does. Boolean props should be named using
            auxiliary verbs such as does, has, is and should. For example,
            Button uses isDisabled, isLoading, etc.
          </p>
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Priciples;
