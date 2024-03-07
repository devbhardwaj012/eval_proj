import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Testing from './Components/Testing/Testing';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Testing/>
      <Footer/>
 
    </div>
  );
}

export default App;
