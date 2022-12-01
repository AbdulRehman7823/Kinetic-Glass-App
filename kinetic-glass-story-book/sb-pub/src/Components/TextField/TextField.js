import React from "react";

export const TextField=(prop)=> {

  const {props,children,...rest} = prop;
    
  const dataObj = {
    label:{
        text:"label",
        class:"",
    },
    input:{
        type:"text",
        class:"",
        placeholder:"",
        required:false,
    }
  }

  const [data,setData] = React.useState(dataObj)

  const merge = (dst,src) => {
    Object.keys(src).forEach((key) => {
      if (!dst[key]) {
        dst[key] = src[key];
      } else if (typeof src[key] === 'object' && src[key] !== null && typeof dst[key] === 'object' && dst[key] !== null) {
        merge(dst[key], src[key]);
      }
    })
  }
  React.useEffect( ()=>{
    let p2 = JSON.parse(JSON.stringify(dataObj));
    merge(p2,props)
    setData(p2)
  },[])

  return (
    <div>
      <label
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${data.label.class}`}
      >
        {data.label.text}
      </label>
      <input
        type={data.input.type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${data.input.class}`}
        placeholder={data.input.placeholder}
        required
        {...rest}
      />
      {children}
    </div>
  );
}
