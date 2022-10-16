import React from 'react'
import "./ProductList.css"

function ProductList(props) {

    const {children,...rest} = props;

  return (
       
        <div className="list-items" >
            {children}
        </div>

  )
}

export default ProductList;