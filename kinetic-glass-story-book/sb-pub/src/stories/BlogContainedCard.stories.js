import React from "react";
import {BlogContainedCard as Card} from "../Components/BlogContainedCard";

export default {
  title: "Card/Contained Card",
  component: Card,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => {
  return <Card {...args}></Card>;
};

export const SimpleContainedCard = Template.bind({});

SimpleContainedCard.args = {
  props: {
    title: {
      text: "not mention",
      class: "",
    },
    img: {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      class: "",
    },
    body: {
      text: "Not Mention",
      class: "",
    },
    header: {
      text: "Not Mention",
      class: "",
    },
    button: {
      text: "not given",
      class: "",
    },
    views: {
      text: "0.0",
      class: "",
    },
  },
};
