import React from 'react'

const DisplayFood = ({foodItem}) => {
  return (
    
    <div style={{height:"100px",width:"500px",border:"1px dotted grey",background:"#EBDFD7",display:"flex",justifyContent:"space-between"}} key={foodItem.card.info.id}>
        <h4 style={{paddingLeft:"5px"}}>{foodItem.card.info.name} - ₹{foodItem.card.info.price/100 || foodItem.card.info.defaultPrice/100}</h4>
        {console.log(foodItem)}
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${foodItem.card.info.imageId}`} className='foodlogo' alt='foodimg'/>
    </div>
  )
}

export default DisplayFood