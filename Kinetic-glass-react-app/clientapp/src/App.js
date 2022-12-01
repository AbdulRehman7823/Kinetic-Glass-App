
import FrontPage from './Components/Pages/FrontPage';
import MainPage from './Components/Pages/MainPage';
import ErrorPage from './Components/Error/ErrorPage';
import LoginPage from './Components/Pages/LoginPage'
import RegisterPage from './Components/Pages/RegisterPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SellerHomePage from './Components/Pages/SellerPages/SellerHomePage';
import SellerAddComponentPage from './Components/Pages/SellerPages/SellerAddComponentPage';
import SellerDeleteComponentPage from './Components/Pages/SellerPages/SellerDeleteComponentPage';
import SellerOrdersPage from './Components/Pages/SellerPages/SellerOrdersPage';

 
function App() {
  const props= {
    title: {
      text: "not mention",
      class: "",
    },
    img: {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      class: "",
    },
    body: {
      text: "Not Mention",
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
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/register" element={<RegisterPage/>}/>
         <Route path="/app/seller/home" element={<SellerHomePage/>}/>
         <Route path="/app/seller/add" element={<SellerAddComponentPage/>}/>
         <Route path="/app/seller/delete" element={<SellerDeleteComponentPage/>}/>
         <Route path="/app/seller/orders" element={<SellerOrdersPage/>}/>
         <Route path="/" element={<FrontPage/>}/>
         <Route path="/app" element={<MainPage/>}/>
         <Route path="*" element={<ErrorPage/>}/>
       </Routes>
  </Router>);
  
  
}
export default App;
