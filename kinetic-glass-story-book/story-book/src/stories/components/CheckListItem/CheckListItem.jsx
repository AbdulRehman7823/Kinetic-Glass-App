import React from "react";
import "./CheckListItem.css"
function CheckListItem(props) {
  const { title, ...rest } = props;
  let num = 1;
  return (
    <div id="checklist" {...rest}>
      <input
        type="checkbox"
        name="r"
      />
      <label>{title}</label>
    </div>
  );
}

export default CheckListItem;
