import './App.css';
import { useState } from "react";
import Navbar from "./Navbar";
import get_products_from_api from './product-api';

function ShowProducts({show, setShow, products, handleClick }) {
  return show ? <div> <h3 style = {{ color: "red" }}>The Best Clothing Shopping Page in the World</h3>  <button onClick={setShow}>Shop Now</button> </div> 
  : 
  <div> 
    {products.map((product) => (
      <button key={product.id} products={products} onClick = {(event) => handleClick(event, product)}>{product.name} ${product.price}</button>
    ))}
  </div>
}  

export default function App() {

  const [show, setShow] = useState(true)
  const [counter, setCounter] = useState(0)
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([
            {"name": "Add Shirt to cart", "id": 1, "price" : 8},
            {"name": "Add shorts to cart", "id": 2, "price" : 10},
            {"name": "Add Underwear to cart", "id": 3, "price" : 5},
        ])
  const [cart, setCart] = useState({})

  function testing(event, product) {
      if (product["name"] in cart) {
        cart[product["name"]].count++
        cart[product["name"]].totalPrice += product["price"]
        setCart({...cart})
      } else {
        cart[product["name"]]= {
          count: 1,
          totalPrice: product["price"],
          price: product["price"]
        }         
      }
      setTotal(total + product["price"])
      setCounter(counter + 1)
      setCart({...cart})
    }
  
  function Upcount(event, cart, key) {
    cart[key].count++
    cart[key].totalPrice += cart[key].price
    setCart({...cart})
    setCounter(counter + 1)
    setTotal(total + cart[key].price)
  }
  function Downcount(event, cart, key) {
    if (cart[key].count === 1) {
      setTotal(total - cart[key].price)
      delete cart[key]
    } else {
      cart[key].count--
      cart[key].totalPrice -= cart[key].price
    }  
    setTotal(total - cart[key].price)
    setCart({...cart})
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
          <p key={key} style = {{ color: "red" }}>{key}: ${cart[key].totalPrice}<button style = {{ width: 20, height: 20 }} onClick={(event) => {Downcount(event, cart, key)}}>-</button> {cart[key].count} <button style = {{ width: 20, height: 20}} onClick={(event) => {Upcount(event, cart, key)}}>+</button></p> 
    ))}
    <p style = {{ color: "red" }}>$: {total}</p>
    </div>
  </>  
  )  
}

