import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import {useState } from 'react';
import "aos/dist/aos.css";

function App() {
  const [count , setCount] = useState (0) ;
  const setCartCount = () => {
    setCount (count + 1) ;
  }
  return (
    <div className="App">
      <Header count= {count}></Header>
      <Products setCartCount = {setCartCount}></Products>
    </div>
  );
}

export default App;
