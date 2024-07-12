import './App.css';
import { useState } from "react";
import Navbar from "./Navbar";
import get_products_from_api from './product-api';

function ShowProducts({show, setShow, products, handleClick }) {
  return show ? <div> <h3 style = {{ color: "red" }}>The Clothing Shopping Page in the World</h3>  <button onClick={setShow}>Shop Now</button> </div> 
  : 
  <div> 
    {products.map((product) => (
      <button key={product.id} products={products} onClick = {(event) => handleClick(event, product)}>{product.name}</button>
    ))}
  </div>
}  

export default function App() {

  const [show, setShow] = useState(true)
  const [counter, setCounter] = useState(0)
  const [products, setProducts] = useState([
            {"name": "Add Shirt to cart", "id": 1},
            {"name": "Add shorts to cart", "id": 2},
            {"name": "Add Underwear to cart", "id": 3},
        ])
  const [cart, setCart] = useState({})

  function testing(event, product) {
      if (product["name"] in cart) {
        cart[product["name"]]++
      } else {
        cart[product["name"]] = 1
      }
      setCounter(counter + 1)
      setCart({...cart})
    }
  function Upcount(event, cart, key) {
    cart[key]++
    setCart({...cart})
    setCounter(counter + 1)
  }
  function Downcount(event, cart, key) {
    if (cart[key] === 1) {
      delete cart[key]
      setCart({...cart})
    } else {
      cart[key]--
      setCart({...cart})
    }  
    setCounter(counter - 1)  
  }

  return (
  <>
    <div style = {{
      background: "lightblue",
      height: "100vh"
    }}>
    <Navbar setShow = {setShow} counter = {counter} />   
    <ShowProducts show = {show} setShow={() => setShow(false)} products={products} handleClick={testing}/>
    <p style = {{ color: "red" }}>Cart: </p>
    {Object.keys(cart).map((key) => (
          <p key={key} style = {{ color: "red" }}>{key}: <button style = {{ width: 20, height: 20 }} onClick={(event) => {Downcount(event, cart, key)}}>-</button> {cart[key]} <button style = {{ width: 20, height: 20}} onClick={(event) => {Upcount(event, cart, key)}}>+</button></p> 
    ))}
    </div>
  </>  
  )  
}

