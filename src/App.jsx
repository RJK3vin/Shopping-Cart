import './App.css';
import { useState } from "react";
import Navbar from "./Navbar";

function ShowProducts({show, setShow, products, handleClick }) {
  return show ? <div> <h3 style = {{ color: "gray" }}>The Best Shopping Page in the World</h3>  <button onClick={setShow}>Shop Now</button> </div> 
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
            {name: "Add Shirt to cart", id: 1},
            {name: "Add shorts to cart", id: 2},
            {name: "Add Underwear to cart", id: 3},
        ])
  const [cart, setCart] = useState([])

  function testing(event, product) {
      setCounter(counter + 1)
      setCart([...cart, product])
      console.log(product)
      console.log(event)
    }
  
  return (
  <>
    <Navbar setShow = {setShow} counter = {counter} />   
    <ShowProducts show = {show} setShow={() => setShow(false)} products={products} handleClick={testing}/>
    <p>Cart: </p>
    {cart.map(cart => (
      <p key={cart.id}>{cart.name}</p> 
    ))}
  </>  
  )  
}

