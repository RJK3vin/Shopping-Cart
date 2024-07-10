import './App.css';
import { useState } from "react";
import Navbar from "./Navbar";

function Showdisplay ({show, setShow, products, handleClick, }) {
  return show ? <div><h3 style = {{ color: "gray" }}>The Best Shopping Page in the World</h3> <button onClick={setShow}>Shop Now</button></div> : <ShowProducts products={products} onClick={handleClick}/>

}

function ShowProducts(props) {
  return (
    <>
      <div>
          {props.products.map((product) => {
            return <button key={product.id} onClick={() => props.onClick(product)}>{product.name}</button>;
          })}
      </div>
    </>
  );
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

  function testing(product) {
      setCounter(counter + 1)
      setCart([...cart, product])
      console.log(product)
    }
  

  return (
  <>
    <Navbar setShow = {setShow} counter = {counter} />   
    <Showdisplay show = {show} setShow = {() => setShow(false)} products={products} handleClick={testing}/>
    <p>Cart: </p>
    {cart.map(cart => (
      <p key={cart.id}>{cart.name}</p> 
    ))}
  </>  
  )
    
    
    
// one array with all the items as jsons. Another empty array. Anytime I click on one of the item buttons, copy that json and push it to the empty array. Then set the new array state. 
  
}

