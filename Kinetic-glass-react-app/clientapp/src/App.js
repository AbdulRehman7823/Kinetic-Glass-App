
import React from 'react';
import FrontPage from './Components/Pages/FrontPage';
import MainPage from './Components/Pages/MainPage';
import ErrorPage from './Components/Error/ErrorPage';
import LoginPage from './Components/Pages/LoginPage'
import RegisterPage from './Components/Pages/RegisterPage'
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import SellerHomePage from './Components/Pages/SellerPages/SellerHomePage';
import SellerAddComponentPage from './Components/Pages/SellerPages/SellerAddComponentPage';
import SellerDeleteComponentPage from './Components/Pages/SellerPages/SellerDeleteComponentPage';
import SellerOrdersPage from './Components/Pages/SellerPages/SellerOrdersPage';
import authServices from './Services/AuthServices'; 
import axios from 'axios';
import SideBarNavigation from './Components/MainPageComponents/Navigation/SideBarNavigation/SideBarNavigation';

 
import Installation  from './Components/MainPageComponents/InnerComponents/GettingStarted/Installation'
import Introduction  from './Components/MainPageComponents/InnerComponents/GettingStarted/Introduction'
import Version from './Components/MainPageComponents/InnerComponents/GettingStarted/Version';
import Comparison from './Components/MainPageComponents/InnerComponents/GettingStarted/Comparison';
import Priciples from './Components/MainPageComponents/InnerComponents/GettingStarted/Priciples';
import Button from './Components/MainPageComponents/InnerComponents/Form/Button';
import TextField from './Components/MainPageComponents/InnerComponents/Form/TextField';
import CheckBox from './Components/MainPageComponents/InnerComponents/Form/CheckBox';
import Radio from './Components/MainPageComponents/InnerComponents/Form/Radio';
import Select from './Components/MainPageComponents/InnerComponents/Form/Select';
import TextArea from './Components/MainPageComponents/InnerComponents/Form/TextArea';
import IconButton from './Components/MainPageComponents/InnerComponents/Form/IconButton';

import {BlogImageCard} from 'kinetic-glass-ui'

function App() {
  

  const [user,setUser] = React.useState({});
  const getUser =async ()=>{
    try{
          const url =  "http://localhost:5000/api/auth/login/success"
          const {data} = await axios.get(url,{withCredentials:true})

          setUser(data);
          
    }catch(e){
        console.log("Error");
    }

  }

  React.useEffect(
    ()=>{
      getUser();
    },[]
  )



  const data =  {
    title: {
      text: "HeadPhones",
      class: "",
    },
    img: {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      class: "",
    },
    body: {
      text: "lorejnjka njkfkadufna",
      class: "",
    },
    header: {
      text: "Not Mention",
      class: "",
    },
    button: {
      text: "not given",
      class: "",
    },
    views: {
      text: "0.0",
      class: "",
    },
  }

  return (
  
    

 
    <Router>
       <Routes>      
        {/*Getting Started Routes*/}
       <Route path={"/app/get-started"} element={<MainPage><Introduction/></MainPage>}></Route>
       <Route path={"/app/get-started/installation"} element={<MainPage><Installation/></MainPage>}></Route>
       <Route path={"/app/get-started/version"} element={<MainPage><Version/></MainPage>}></Route>
       <Route path={"/app/get-started/comparison"} element={<MainPage><Comparison/></MainPage>}></Route>
       <Route path={"/app/get-started/priciples"} element={<MainPage><Priciples/></MainPage>}></Route>

       <Route path={"/app/components"} element={<MainPage><Button/></MainPage>}></Route>
       <Route path={"/app/components/form/button"} element={<MainPage><Button/></MainPage>}></Route>
       <Route path={"/app/components/form/textfield"} element={<MainPage><TextField/></MainPage>}></Route>
       <Route path={"/app/components/form/checkbox"} element={<MainPage><CheckBox/></MainPage>}></Route>
       <Route path={"/app/components/form/radio"} element={<MainPage><Radio/></MainPage>}></Route>
       <Route path={"/app/components/form/select"} element={<MainPage><Select/></MainPage>}></Route>
       <Route path={"/app/components/form/textarea"} element={<MainPage><TextArea/></MainPage>}></Route>
       <Route path={"/app/components/form/iconBtn"} element={<MainPage><IconButton/></MainPage>}></Route>


         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/register" element={<RegisterPage/>}/>
         <Route path="/app/seller/home" element={user? <SellerHomePage/> : <Navigate to="/login"/> }/>
         <Route path="/app/seller/add" element={user?<SellerAddComponentPage/> : <Navigate to="/login"/> }/>
         <Route path="/app/seller/delete" element={user?<SellerDeleteComponentPage/> : <Navigate to="/login"/> }/>
         <Route path="/app/seller/orders" element={user?<SellerOrdersPage/> : <Navigate to="/login"/> }/>
         <Route path="/" element={<FrontPage/>}/>
         <Route path="/app" element={<MainPage/>}/>
         <Route path="*" element={<ErrorPage/>}/>
       </Routes>
  </Router>
  
  );
  
  
}
export default App;
