
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

  return (
 
    <Router>
       <Routes>      
        {/*Getting Started Routes*/ }
       <Route path={"/app/get-started"} element={<MainPage><Introduction/></MainPage>}></Route>
       <Route path={"/app/get-started/installation"} element={<MainPage><Installation/></MainPage>}></Route>

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
