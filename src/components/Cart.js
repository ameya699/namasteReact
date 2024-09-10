import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../utils/CartContext';

const Cart = () => {
  const [cartItems,setCartItems]=useState([]);
  const {productList}=useContext(CartContext);

  useEffect(()=>{
    setCartItems(productList)  
  })

  if(cartItems.length===0){
    return (
      <h1 className='font-bold text-center pt-4 text-lg'>Your Cart is empty!</h1>
    )
  } 

  return (
    <div className='gap-y-3 flex flex-col items-center pt-10 w-auto'>
      {
        cartItems.map((item)=>{
          return (
            <div className='flex flex-col gap-2 bg-[#EBDFD7] p-6 w-1/2 rounded-lg' key={item.id}>
          <h1 className='font-bold text-xl'>{item.productName}</h1>
          <h1 className='font-semibold'>{item.price}</h1>
          </div>
          )
        })
      }
    </div>
  )
}

export default Cart