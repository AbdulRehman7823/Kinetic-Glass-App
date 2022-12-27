import React from 'react'

const FileInput=(prop)=> {
    const {props,children,...rest} = prop;
    const dataObj = {
        label:{
            text:"Upload File",
            class:"",
        },
        input:{
            class:"",         
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
        <label className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input ${data.label.class}`}>{data.label.text}</label>
<input className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ${data.input.class}`} id="file_input" type="file"></input>
    </div>
  )
}

