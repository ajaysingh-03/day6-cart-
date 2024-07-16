import React from 'react'
import './cart.css';
import Productlist from '../ProductList/productlist';
function cart({cartItems, setCartItems}) {
  function TotalSum(){
    let sum=0;
    for(let cartItem of cartItems){
        sum+=cartItem.price* cartItem.count;
    }
    return sum;
  }

  function removeItem(itemId) {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(newCartItems);
  } 

  function updateCount(itemId, count) {
    const newCartItems = [...cartItems];
    for (let cartItem of newCartItems) {
        if (cartItem.id === itemId) {
            cartItem.count = count;
            break;
        }
    }
    setCartItems(newCartItems);
}


  {if(cartItems.length==0){
    return(
        <div className="empty-container">
          <h1>Your Bag</h1>
            <p>is currently empty</p>
        </div>
    )
     
  }}

  return (
    <>
      <div className="cart-container">
        <div className="cart-content">
          <div className="heading">
              <span>your bag</span>
          </div>
          <div className="products">
              {cartItems.map((cartItem)=>(
                <Productlist item={cartItem} key={cartItem.id} removeItem={removeItem} 
                decrement={() => {
                  updateCount(cartItem.id, cartItem.count - 1);
              }}
              increment={() => {
                  updateCount(cartItem.id, cartItem.count + 1);
              }}/>
              ))}
              
          </div>
        </div>
        <div className="total">
                <p>Total</p>
                <button className='Clearcart' onClick={() => {
                    setCartItems([]);
                }}>Clear Cart</button>
                <p>{TotalSum()}</p>
                
        </div>
            
        </div>
    </>
  )
}

export default cart;