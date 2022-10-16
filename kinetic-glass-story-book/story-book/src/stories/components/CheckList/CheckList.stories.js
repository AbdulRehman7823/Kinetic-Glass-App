import React from "react";
import CheckList from "./CheckList.jsx"

export default {
    title: 'List/CheckList',
    component: CheckList
}


const Template = (args) => <CheckList {...args} />;
export const CheckList1 = Template.bind({});

CheckList1.args={
   items:["Task1","Task2","Task3"]
}