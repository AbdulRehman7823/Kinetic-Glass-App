
import React from "react";
import CheckList from "./CheckList.jsx"
import CheckListItem from "../CheckListItem/CheckListItem.jsx";
import { checkListItem } from "../CheckListItem/CheckListItem.stories.js";

export default {
    title: 'List/CheckList',
    component: CheckList
}



const ListTemplate = ({ items, ...args }) => (
  <div style={{width: '300px', height: '300px'}}>
    <CheckList >
      {items.map((item) => (
        <CheckListItem {...item} />
      ))}
    </CheckList>
    </div>
  );
  
  export const CheckListWithItems = ListTemplate.bind({});
  CheckListWithItems.args = {
    items: [
      {
        title:"Maaanni ",
      },
      {
        title:"Maaanni ",
      },
      {
        title:"Maaanni ",
      },
     
    ],
  };