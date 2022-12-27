import React from "react";
import MainPanel from "../../mainPanel/MainPanel";
import MiddlePanel from "../../middlePanel/MiddlePanel";

const Comparison = () => {
  return (
    /**new version */
    /**this is new commit again from abdul rehman */
    <MainPanel>
      <MiddlePanel>
        <div className="px-4">
          <h1 className="uppercase text-4xl font-bold pb-4 text-gray-700">
            Comparison
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            When building a product, website, or application, it is a common
            question to consider the design system or component library to use
            to help you ship quality products fast, and deliver value to your
            customers in a way that scales with your team.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            Here's a comparison between Kinetic Glass and other popular UI or
            CSS frameworks like Theme UI, Tailwind CSS, and Material UI to help
            you make the best decision.
          </p>
          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            How is Kinetic Glass different from Tailwind CSS?
          </h1>
          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            Overview
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Tailwind CSS:</span> CSS Framework that
            provides atomic CSS classes to help you style components, leaving
            you to handle lots of other things like accessibility, component
            composition, keyboard navigation, style overrides, etc.{" "}
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Kinetic Glass:</span> A library of
            carefully created React components that comes with all the styling
            benefits of Tailwind and takes care of all the details.
          </p>

          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            Learning Curve
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Tailwind CSS:</span> If you come from a
            bootstrap or bulma CSS background, you might find it easy to pick up
            Tailwind. However, from a styled-components or emotion background,
            the learning curve can be rather steep.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Kinetic Glass:</span> Comes with a very
            intuitive, CSS-like, and prop based model of styling components,
            making it easy to learn. The components name and prop names are also
            very easy to understand.
          </p>
          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            Responsive Styles
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Tailwind CSS:</span> Authoring
            responsive styles in tailwind requires a combination of
            pseudo-classes. This can get rather lengthy as your project grows.
            The API: img class="w-16 md:w-32 lg:w-48" src="..."
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Kinetic Glass:</span> Authoring
            responsive styles in a very easy and intuitive way. You can use
            either the array or object notation.
          </p>
          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            Style Overrides
          </h1>
          <p className="pb-6 px-2 text-gray-700">
            In most applications, it is a common challenge to want to override
            styles for a specific context to match design requirements.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Tailwind CSS:</span> Given that Tailwind
            is a CSS utility framework, you may need to figure out the best way
            to override specific classNames, or write custom CSS.
          </p>
          <p className="pb-6 px-2 text-gray-700">
            <span className="font-bold">Kinetic Glass:</span> Given that Kinetic
            Glass styles are prop-based, overrides is as easy as passing a prop.
          </p>
          <h1 className="uppercase text-2xl font-bold pt-4 pb-4 text-gray-700">
            How is Kinetic Glass different from Material UI?
          </h1>
          <p className="pb-6 px-2 text-gray-700 text-justify">
            The Material UI React library provides users with a handful of UI
            layout tools but is most famous for its large breadth of pre-styled
            UI components to which developers can apply custom styles to
            override out-of-the-box base styles. Kinetic Glassis a more robust,
            layout-focused library that also provides developers with UI
            components similar to those that Material UI provides, but has a
            greater focus on the creation of flexible, composable, and scalable
            code.
          </p>
          <p className="pb-6 px-2 text-gray-700 text-justify">
            A core concept to be considered when comparing the two frameworks is
            'Ease of Modification'. Comparatively, Material UI adds far more
            classes to individual HTML tags related to exported components and
            layouts, forcing developers to fight against base styles when
            customizing their interface. Kinetic Glass gives developers far more
            freedom to manipulate CSS classes of exported components and layouts
            and often requires less code to do so. For example, Material UI
            requires separate code to control responsive styling based on
            viewport changes, while Kinetic Glass provides built-in support for
            responsive styling without the need to create CSS classes or media
            queries. If custom styling is not a major concern for your project,
            Material UI is beneficial as you can avoid the creation of custom
            components that the library provides. If scalable, custom designs
            are important for your project (which oftentimes they are), Kinetic
            Glass developer convenience shines brighter than Material UI's
            especially as a project scales over time.
          </p>
        </div>
      </MiddlePanel>
    </MainPanel>
  );
};

export default Comparison;
