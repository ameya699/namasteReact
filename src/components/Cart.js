import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

  const productList=useSelector(cartStore=>cartStore.cart.items)
  const dispatch=useDispatch()
  if(productList.length===0){
    return (
      <h1 className='font-bold text-center pt-4 text-lg'>Your Cart is empty!</h1>
    )
  } 
  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>Clear Cart</button>
          <ItemList items={productList}/>
      </div>
    </div>
  )
}

export default Cart