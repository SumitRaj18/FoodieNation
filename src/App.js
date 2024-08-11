import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';

import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Signup from './Components/Signup';
import { CartProvider } from './Components/ContextReducer';
import MyOrder from './Components/MyOrders';

function App() {
  return (
    <div className="App" style={{backgroundColor:"black",width:"100%",marginRight:"100px"}}>
      <CartProvider>
      <Router>
        
      <Navbar/>
      
     <Routes>
     <Route exact path='/' element={<Home/>} />

      <Route exact path='/createuser' element={<Signup/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/myorders' element={<MyOrder/>} />
     

     </Routes>
     
     </Router>
     </CartProvider>
    </div>
  );
}

export default App;
