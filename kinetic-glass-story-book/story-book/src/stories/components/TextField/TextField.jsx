import React from "react";
import "./TextField.css";
function TextField(props) {


    const {variant, type, label , helper,icon,size,...rest} = props;
    
  return (
    <div className="input-group">
      <label className={`${type} ${variant}`}>
        <input required  className={size}/>
        <span className="input-label">{label}</span>
        <span className="input-helper">{helper}</span>
        <span className="input-icon"> 
        </span>
      </label>
    </div>
  );
}

export default TextField;
