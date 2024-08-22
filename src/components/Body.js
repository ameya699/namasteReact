import React, { useEffect, useState } from 'react'
import ResCard from './ResCard';
import data from "../data/Data"
import Loader from './Loader';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { RiUserLocationFill } from "react-icons/ri";






const Body = () => {
    useEffect( ()=>{
      getLatLong()
    },[])

    
    const fetchData=async()=>{
      try
      { 
      const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const json=await data?.json()
 
      const restData=await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setData(restData)
      setFilteredRest(restData)
    }
    catch(error){
      <>
      {console.log(error)}
        <Loader load={false}/>
      </>
    }
    }

    const [foodData,setData]=useState([]);
    const [topRatedFilter,setTopRatedFilter]=useState(false);
    const [searchValue,setSearchValue]=useState("");
    const [filteredRest,setFilteredRest]=useState([])
    const [location,setLocation]=useState({latitude:17.6599188,longitude:75.9063906})
    //initialize the button color
    const [buttonColor,setButtonColor]=useState({
      background:"rgb(217, 212, 212)",
      borderRadius:"4px"
    })

    const getLatLong=()=>{
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position)=> {
          const latitude = position.coords.latitude 
          const longitude = position.coords.longitude 
          const details={
            latitude,
            longitude
          }
          setLocation(details)
          fetchData()
          
          // console.log(location)
        });
      }
      else{
        alert('Please allow location access')
      }
    }

    const handleLocation=()=>{
     try {
      getLatLong()
     } catch (error) {
      console.log(error);
     }
      // setLocation(locationObject)
      // console.log(locationObject)
    }
    //set the data and button color
    const triggerFilter=()=>{
      if(topRatedFilter){
        setFilteredRest(foodData)
        // console.log(filteredRest)
        setButtonColor({...buttonColor,background:"rgb(217, 212, 212)"})
      }
      else{
        const filteredData=foodData.filter((restaurant)=>parseFloat(restaurant.info.avgRatingString)>4.0)
        setFilteredRest(filteredData)
        // console.log(filteredData)
        setButtonColor({...buttonColor,background:"#FF8B32"})
      }
      setTopRatedFilter(!topRatedFilter)
    }
    
    const handleSearch=()=>{
      const searchedData=foodData.filter((restaurant)=>(restaurant.info.name).toLowerCase().includes(searchValue.toLowerCase()))
      setFilteredRest(searchedData)
    }
    
    const handleTextChange=(e)=>{
      setSearchValue(e.target.value);
      // const searchedData=foodData.filter((restaurant)=>(restaurant.info.name).toLowerCase().includes(searchValue.toLowerCase()))
      // setData(searchedData)
    }

    return data.length ? (
      <div className="body">
        {console.log(filteredRest)}
        <div className="filter">
          <div className='search'>
            <input type='text' className='search-box' value={searchValue} name='searchText' placeholder='Search for restaurants and food' onChange={handleTextChange}/>
            <button onClick={handleSearch} className='search-button'>Search</button>
          </div>
          <button className='filter-btn' onClick={triggerFilter} style={buttonColor} >Top Rated Restaurants</button>
          <RiUserLocationFill onClick={handleLocation} className='user-location'/>
        </div>
          {topRatedFilter&&<b><span style={{alignSelf:'center'}}>Showing top rated ⭐️ restaurants</span></b>}
          {console.log("this is aboe filtered rest")}
          {console.log(filteredRest)}
          <Loader load={Boolean(filteredRest.length)}/>
          {filteredRest.length===0?<ShimmerSimpleGallery card imageHeight={250} row={2} col={4}  caption />:""}
        <div className="res-container">
          {
            filteredRest.map((ele,index)=><ResCard  key={ele.info.id} resData={ele}/>)
          }
        </div>
      </div>
    ):"";
  };

export default Body