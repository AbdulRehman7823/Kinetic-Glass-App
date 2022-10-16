import React from "react";
import ProductList from "./ProductList";
import ProductListItem from "../ProductListItem/ProductListItem";
import {Item as Unchecked} from "../ProductListItem/ProductListItem.stories";


export default{
    title: "List/Product List",
    component:ProductList,
}


const ListTemplate = ({ items, ...args }) => (
    <ProductList>
      {items.map((item) => (
        <ProductListItem {...item} />
      ))}
    </ProductList>
  );
  
  export const OneItem = ListTemplate.bind({});
  OneItem.args = {
    items: [
      {
        image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        title:"Maaanni ",
        price:"334",
        tag:"$"
      },
      {
        image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        title:"Umar Chatha ",
        price:"23",
        tag:"B"
      },
      {
        image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        title:"Abdul Rehman ",
        price:"232",
        tag:"E"
      },
      {
        image:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
        title:"Sohaib Hassan ",
        price:"32",
        tag:"#"
      },
    ],
  };