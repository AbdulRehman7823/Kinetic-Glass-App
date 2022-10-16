import React from "react";
import './CheckList.css'

function CheckList(props) {

    const {items,...rest} = props;
  return (
    <div>
      <div id="checklist">
        
        {items.map((item,index) => {
            let num  = index+1;
          return ( <>
            <input id={`0${num}`} type="checkbox" name="r" value={`${num}`}  />
           <label id={`0${num}`}>{item}</label>
           </>)
        })}
      </div>
    </div>
  );
}

export default CheckList;
