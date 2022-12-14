import React from "react";

function DetailedProductCard(prop) {

   const {props, children,...rest} = prop;

   const dataObj = {
          img:{
            url:"",
            class:"",
          },
          brand:{
            text:"",
            class:"",
          },
          title:{
            text:"",
            class:"",
          },
          ratings:{
            text:"",
            class:""
          },
          price:{
            text:"",
            class:"",
          },
          button:{
            text:"",
            class:"",
          },
          catagories:{
            text:"",
            list:[],
          },
          description:{
            text:"",
            class:"",
          },
          colors:[]
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
    <section className="text-gray-600 body-font overflow-hidden" {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className= {`${data.img.class} lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded`}
            src={data.img.url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className={`${data.brand.class} text-sm title-font text-gray-500 tracking-widest`}>
              {data.brand.text}
            </h2>
            <h1 className={`${data.title.class} text-gray-900 text-3xl title-font font-medium mb-1`}>
              {data.title.text}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">

                {[...Array(Number(data.ratings.text))].map(item=>{
                      <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                })}
                <span className={`${data.ratings.class} text-gray-600 ml-3`}>{data.ratings.text}</span>
              </span>
            </div>
            <p className={`${data.description.class}leading-relaxed`}>{data.description.text}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {data.colors.map((color) => {
                 return <button style={{background:{color}}} className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>;
                })}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">{data.catagories.text}</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    
                   {data.catagories.list.map(size=>{
                       return <option>{size}</option>
                   })} 
                    
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className={`${data.price.class} title-font font-medium text-2xl text-gray-900`}>
                {data.price.text}
              </span>
              <button className={`${data.button.class} flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"`}>
                {data.button.text}
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailedProductCard;
