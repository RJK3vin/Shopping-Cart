import { Link } from "react-router-dom";
import { useState } from "react";
import './App.css';

const Navbar = (props) => {

    return (
        <div className="navigationbar">
      <h1 style = {{ color: "red" }}>RJ's Shopping Page</h1>
        <button onClick={() => props.setShow(true)}>Home Page</button>
        <button onClick={() => props.setShow(false)}>Shopping Page</button>
      <Link to="/cart">
        <button style = {{height: "40px", width: "45px"}}>
          <img style = {{height: "30px", width: "30px"}}src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="></img>  
        </button>
      </Link>
      <p style = {{ color: "red" }}>{props.counter}</p>
    </div>
    )

}

export default Navbar;