import React from 'react'

const DisplayFood = ({foodItem}) => {
  return (
    
    <div className='h-[100px] w-[500px] border-dotted border-gray-500 bg-[#EBDFD7] flex justify-between' key={foodItem.card.info.id}>
        <h4 className='text-lg font-bold' style={{paddingLeft:"5px"}}>{foodItem.card.info.name} - ₹{foodItem.card.info.price/100 || foodItem.card.info.defaultPrice/100}</h4>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodItem.card.info.imageId}`} className='foodlogo' alt='foodimg'/>
    </div>
  )
}

export default DisplayFood