import React, { useState } from 'react';
import './App.css';
import Product from './component/productComponent'


function App() {
  let data = localStorage.getItem("cart-data")

  if (data === null) {
    data=[
      {
        name:"Apple Iphone",
        price:120,
        quantity:1
      },
      {
        name:"Samsung Mobile",
        price:120,
        quantity:1
      },
    ]  
  }else{
    data = JSON.parse(data)
  }
  
  

  const [stateData, setData] = useState(data);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

    const setStateData = (changedData)=>{
      localStorage.setItem("cart-data",JSON.stringify(changedData))
      setData(changedData)
    }

    let totalValue = 0
    stateData.map((item,i) => 
      totalValue = totalValue + (item.quantity * item.price)
    )

    const addItem = ()=>{
      var newItem = {
        name:name,
        price:parseInt(price) || 0,
        quantity:1
      }
      setStateData([...stateData,newItem]) 
    }

    const reset = ()=>{
      stateData.map((item,i) => 
        item.quantity = 0
      )
      setStateData([...stateData]) 
    }



  return (
    <div className="App">
      <div className="add-item-container">
        <div>
          <span className="text">Name</span> <br />
          <input className="input" type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <span className="text">Price</span> <br />
          <input className="input" type="text" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>
        <div className="button" onClick={()=>{addItem()}}>
          <span>Add</span>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        {
          stateData.map((item,i)=>
            <Product id={i} name={item.name} price={item.price} quantity={item.quantity} change={setStateData} data={stateData}/> 
          )
        }
        <br />
        <br />
        
      </div>
      <div className="footer-container">
        <div className="footer reset" onClick={()=>{reset()}}>
          <span>Reset</span>
        </div>
        <div className="footer data">
          <span>$ {totalValue}</span>
        </div>
        <div className="footer pay-now">
          <span>Pay Now</span>
        </div>
      </div>
    </div>
  );
}

export default App;
