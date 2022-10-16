import React from 'react'
import "./ProductListItem.css";
function ProductListItem(props) {

    const {image, title, price,tag,...rest} = props

  return (
    
    <div className="item-container" {...rest}>
        <img className="item-image" src={image} alt=""/>
        <span className="item-name">{title}</span>
        <span className="item-value">{price}
        <span >{tag}</span>
        </span>
    </div>
  )
}

export default ProductListItem;