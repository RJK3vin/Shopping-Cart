import { Link } from "react-router-dom";
import './App.css';
import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0)
  
  return (
  <>
    <div className="navigationbar">
      <h1 style = {{ color: "lightblue" }}>RJ's Shopping Page</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <Link to="/shopping">
        <button>Shopping Page</button>
      </Link>
      <Link to="/cart">
        <button style = {{height: "40px", width: "45px"}}>
          <img style = {{height: "30px", width: "30px"}}src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="></img>  
        </button>
      </Link>
      <p style = {{ color: "red" }}>{counter}</p>
    </div>

    <div>
      <h3 style = {{ color: "gray" }}>
        The Best Shopping Page in the World
      </h3>
      <Link to="/shopping">
        <button>Shop Now</button>
      </Link>
    </div>
  </>
  )
}

export default App;