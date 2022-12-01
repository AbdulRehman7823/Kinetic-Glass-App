
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
