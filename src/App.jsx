import './App.css';
import { useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from 'react';

function ShowProducts({show, setShow, datas, manageClick }) {
  return show ? <div> <h3 style = {{ color: "red" }}>The Best Shopping Page in the World</h3>  <button onClick={setShow}>Shop Now</button> </div> 
  : 
  <>
  <div>
  {datas.map((data) => (
      <button style = {{ width: 150, height: 100 }}key={data.id} onClick = {(event) => manageClick(event, data)}>{data.title} <img style = {{ width: 100, height: 50 }}src = {data.image}/> ${data.price}</button>
    ))}
  </div>
  </>
}

export default function App() {
  const [show, setShow] = useState(true)
  const [counter, setCounter] = useState(0)
  const [total, setTotal] = useState(0)

  const [datas, setDatas] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json => {setDatas(json)})
  }, []);

  const [cart, setCart] = useState({})

  function secondtest(event, data) {
    if ([data["title"]] in cart) {
      cart[data["title"]].count++
      cart[data["title"]].totalPrice += data["price"]
      setCart({...cart})
    } else {
      cart[data["title"]] = {
        count: 1,
        totalPrice: data["price"],
        price: data["price"]
      }
    }
    setTotal(total + data["price"])
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
      setCounter(counter - 1)  
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
    <ShowProducts show = {show} setShow={() => setShow(false)} datas={datas} manageClick={secondtest}/>
    <p style = {{ color: "red" }}>Cart: </p>
    {Object.keys(cart).map((key) => (
          <p key={key} style = {{ color: "red" }}>{key}: ${cart[key].totalPrice}<button style = {{ width: 20, height: 20 }} onClick={(event) => {Downcount(event, cart, key)}}>-</button> {cart[key].count} <button style = {{ width: 20, height: 20}} onClick={(event) => {Upcount(event, cart, key)}}>+</button></p> 
    ))}
    <p style = {{ color: "red" }}>$: {total}</p>
    </div>
  </>  
  )  
}

