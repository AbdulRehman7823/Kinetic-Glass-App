import React from "react";
import './CheckList.css'

function CheckList(props) {

    const {children, ...rest} = props;
  return (
    
      <div id="checklistD" {...rest}>
         {children}
      </div>
    
  );
}

export default CheckList;
