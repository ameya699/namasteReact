import React, { useEffect, useState } from 'react'
import ResCard from './ResCard';
import data from "../data/Data"
import Loader from './Loader';
import { ShimmerSimpleGallery } from "react-shimmer-effects";




const Body = () => {

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData=async()=>{
      try
      {const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6599188&lng=75.9063906&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json=await data.json()
      const restData=await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setData(restData)
    }
    catch{
      <>
        <Loader load={false}/>
      </>
    }
    }

    const [foodData,setData]=useState([]);
    const [topRatedFilter,setTopRatedFilter]=useState(false);

    //initialize the button color
    const [buttonColor,setButtonColor]=useState({
      background:"rgb(217, 212, 212)",
      borderRadius:"4px"
    })

    //set the data and button color
    const triggerFilter=()=>{
      if(topRatedFilter){
        fetchData()
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
          {console.log(foodData)}
          <Loader load={Boolean(foodData.length)}/>
          {foodData.length===0?<ShimmerSimpleGallery card imageHeight={250} row={2} col={4}  caption />:""}
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