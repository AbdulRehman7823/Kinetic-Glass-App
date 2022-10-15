import React from "react";
import TextField from "./TextField"

export default {
    title: 'Input Field',
    component: TextField
}


const Template = (args) => <TextField {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    variant: 'primary',
    type:"underlined",
    label: "Title",
    helper:"Helper text here!",
};


export const Secondary = Template.bind({});

Secondary.args = {
    variant: 'secondary',
    type:"underlined",
    label: "Title",
    helper:"Helper text here!",
    
};

export const Success = Template.bind({});

Success.args = {
    variant: 'success',
    type:"underlined",
    label: "Title",
    helper:"Helper text here!",
};

export const danger = Template.bind({});

danger.args = {
    variant: 'danger',
    type:"underlined",
    label: "Title",
    helper:"Helper text here!",
};


export const PrimaryFilled = Template.bind({});

PrimaryFilled.args = {
    variant: 'primary',
    type:"filled",
    label: "Title",
    helper:"Helper text here!",
};


export const SecondaryFilled = Template.bind({});

SecondaryFilled.args = {
    variant: 'secondary',
    type:"filled",
    label: "Title",
    helper:"Helper text here!",
    
};

export const SuccessFilled = Template.bind({});

SuccessFilled.args = {
    variant: 'success',
    type:"filled",
    label: "Title",
    helper:"Helper text here!",
};

export const dangerFilled = Template.bind({});

dangerFilled.args = {
    variant: 'danger',
    type:"filled",
    label: "Title",
    helper:"Helper text here!",
};


export const Small = Template.bind({});

Small.args = {
    variant: 'primary',
    type:"filled",
    label: "Title",
    helper:"Helper text here!",
    size: "small"
};



export const Medium = Template.bind({});

Medium.args = {
    variant: 'primary',
    type:"filled",
    label: "Title",
    helper:"Helper text here!",
    size: "medium"
};

export const Large = Template.bind({});

Large.args = {
    variant: 'primary',
    type:"filled",
    label: "Title",
    helper:"Helper text here!",
    size: "large"
};
