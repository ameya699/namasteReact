import React from 'react'
import { Link } from 'react-router-dom';

const ResCard = (props) => {
  
    const {resData}=props;
    const data=resData.info
    
    // console.log(data)
    return (
     <div className="res-card">
        <img 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`} 
          alt="res-logo"
          className="res-logo"
        />
        <h3>{data.name}</h3>
        <h4>{data.cuisines.join(" ,")}</h4>
        <h4>{data.avgRatingString==='--'||data.avgRatingString==='NEW'?"No ratings"  :data.avgRatingString+" ⭐️"}</h4>
        <h4>{data.costForTwo}</h4>
        <h4>Delivery in {data.sla.slaString}</h4>
      </div>
    );
  };

export default ResCard