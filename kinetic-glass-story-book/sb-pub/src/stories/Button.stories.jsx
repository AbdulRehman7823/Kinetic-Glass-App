import React from "react";
import { Button } from "../Components/Button";

export default {
  title: "Controls/Button",
  component: Button,
};

const Template = (args) => <Button {...args} >Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color:"primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color:"secondary",
};

export const Success = Template.bind({});
Success.args = {
  color:"success",
};


export const Error = Template.bind({});
Error.args = {
  color:"error",
};


export const Large = Template.bind({});
Large.args = {
  size:"large",
};

export const Small = Template.bind({});
Small.args = {
  size:"small",
};
