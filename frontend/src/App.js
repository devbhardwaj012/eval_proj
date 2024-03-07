import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Testing from './Components/Testing/Testing';
import Products from './Components/Products/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">



      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Testing/>} />
        <Route path='/products' element ={<Products />} /> 

      </Routes>
      </BrowserRouter>
      <Footer/>
 
    </div>
  );
}

export default App;
