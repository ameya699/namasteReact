import React from 'react'

const ResCard = (props) => {
  
    const {resData}=props;
    const data=resData.info
    
    return (
     <div className="p-1 w-52 h-100 bg-gray-200 border border-white m-1 flex-basis-52 hover:border-orange-500 hover:cursor-pointer transition duration-500 hover:flex-basis-56">
        <img 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`} 
          alt="res-logo"
          className="w-full h-[100px] object-cover"
        />
        <h3><b className='text-[24px]'>{data.name}</b></h3>
        <h4>{data.cuisines.join(" ,")}</h4>
        <h4>{data.avgRatingString==='--'||data.avgRatingString==='NEW'?"No ratings"  :data.avgRatingString+" ⭐️"}</h4>
        <h4>{data.costForTwo}</h4>
        <h4>Delivery in {data.sla.slaString}</h4>
      </div>
    );
  };


export const withPromotedLabel=(ResCard)=>{
  return (props)=>{
    return (
      <div>
        <h2 className='absolute bg-black text-white rounded-lg p-1'>Promoted</h2>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard