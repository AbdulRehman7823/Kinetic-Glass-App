import React from "react";
import { TextField } from "../Components/TextField";

export default {
  title: "Controls/TextField",
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  props:{
    label:{
        text:"label",
        class:"",
    },
    input:{
        type:"text",
        class:"",
        placeholder:"username",
        required:false,
    }
  }
};
