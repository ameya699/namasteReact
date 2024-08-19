import React, { useEffect, useState } from 'react'
import ResCard from './ResCard';
import data from "../data/Data"


const Body = () => {

    useEffect(()=>{
      setData(data)
    },[])

    const [foodData,setData]=useState([]);
    const [topRatedFilter,setTopRatedFilter]=useState(false);

    const [buttonColor,setButtonColor]=useState({
      background:"rgb(217, 212, 212)",
      borderRadius:"4px"
    })

    const triggerFilter=()=>{
      if(topRatedFilter){
        setData(data)
        setButtonColor({...buttonColor,background:"rgb(217, 212, 212)"})
      }
      else{
        const filteredData=foodData.filter((restaurant)=>parseFloat(restaurant.info.avgRatingString)>4.0)
        setData(filteredData)
        setButtonColor({...buttonColor,background:"#FF8B32"})
      }
      setTopRatedFilter(!topRatedFilter)
    }
    
    
    

    return (
      <div className="body">
        <div className="filter">
          <button className='filter-btn' onClick={triggerFilter} style={buttonColor} >Top Rated Restaurants</button>
          {topRatedFilter&&<b><span>Showing top rated ⭐️ restaurants</span></b>}
          </div>
        <div className="res-container">
          {
            foodData.map((ele,index)=><ResCard  key={ele.info.id} resData={ele}/>)
          }
        </div>
      </div>
    );
  };

export default Body