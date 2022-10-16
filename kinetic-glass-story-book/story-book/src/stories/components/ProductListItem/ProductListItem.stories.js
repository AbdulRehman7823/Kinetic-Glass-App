import React from "react";
import ListItem from "./ProductListItem";


export default{
    title: "List/Product List/List Item",
    component: ListItem,
}


const Template = (args) => <ListItem {...args} />;

export const Item = Template.bind({});
Item.args = {
    image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
    title:"Maaanni ",
    price:"334",
    tag:"$"
}

