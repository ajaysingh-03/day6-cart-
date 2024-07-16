import React from 'react'
import './productlist.css'
function productlist({item, removeItem,  increment, decrement }) {
  return (
    <>
        <div className="product">
            <div className="product_details">
                <div className="prod_img">
                    <img src={item.imgPath} alt=""/>
                </div>
                <div className="item-info">
                    <h2>{item.name}</h2>
                    <span>${item.price}</span>
                    <span><a href="#"  onClick={() => {
                            removeItem(item.id);
                        }}>remove</a></span>
                </div>
            </div>
            <div className="product_countBtn">
                <div className="btns">
                    <button className='increment' onClick={increment}>+</button>
                    <span>{item.count}</span>
                    <button className='decrement' onClick={decrement}>-</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default productlist;