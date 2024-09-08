import React, { useEffect, useState } from 'react'
import ResCard from './ResCard';
import data from "../data/Data"
import Loader from './Loader';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { RiUserLocationFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';




const Body = () => {


    const [foodData,setData]=useState([]);
    const [topRatedFilter,setTopRatedFilter]=useState(false);
    const [searchValue,setSearchValue]=useState("");
    const [filteredRest,setFilteredRest]=useState([])
    const [location,setLocation]=useState({latitude:17.6599188,longitude:75.9063906})
    
    useEffect(()=>{
      setData([]);
      setFilteredRest([])
      fetchData();
    },[location])

    
    const fetchData=async()=>{
      try
      { 
        
      const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.latitude}&lng=${location.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const json=await data?.json()
 
      const finData=await json?.data?.cards
      const listWithRestaurants=finData.filter((restaurant)=>restaurant?.card?.card?.id==="restaurant_grid_listing")
      const restData=listWithRestaurants[0].card?.card?.gridElements?.infoWithStyle?.restaurants
      setData(restData)
      setFilteredRest(restData)
      
      
    }
    catch(error){
      <>
        <Loader load={false}/>
      </>
    }
    }

    
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
        });
      }
      else{
        alert('Please allow location access')
      }
    }

    const handleLocation=()=>{
     try {
      getLatLong(); 
     } catch (error) {
      console.log(error);
     }
    }
    //set the data and button color
    const triggerFilter=()=>{
      if(topRatedFilter){
        setFilteredRest(foodData)
        setButtonColor({...buttonColor,background:"rgb(217, 212, 212)"})
      }
      else{
        const filteredData=foodData.filter((restaurant)=>parseFloat(restaurant.info.avgRatingString)>4.2)
        setFilteredRest(filteredData)
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

    const onlineStatus=useOnlineStatus()

    if(onlineStatus===false){
      return (
        <h1>You might not be connected to the internet, try establishing a stable connection</h1>
      )
    }

    return data.length ? (
      <div className="pb-[450px]">
        <div className="flex">
          <div className='p-2 flex gap-2'>
            <input type='text' size="50" className='text-[16px] border border-black rounded-[4px]' value={searchValue} name='searchText' placeholder='Search for restaurants and food' onChange={handleTextChange}/>
            <button onClick={handleSearch} className='cursor-pointer border-none h-12 bg-gray-300 rounded-md'>Search</button>
          </div>
          <button className='m-2 cursor-pointer border-none h-12' onClick={triggerFilter} style={buttonColor} >Top Rated Restaurants</button>
          <RiUserLocationFill onClick={handleLocation} className='self-center text-2xl cursor-pointer hover:text-orange-500 transition duration-200 ease-linear'/>
        </div>
          {topRatedFilter&&<b><span className='self-center'>Showing top rated ⭐️ restaurants</span></b>}
          <Loader load={Boolean(filteredRest.length>0)}/>
          {filteredRest.length===0?<ShimmerSimpleGallery card imageHeight={250} row={2} col={4}  caption />:""}
        <div className="flex flex-wrap gap-2.5">
          {
            filteredRest.map((ele,index)=><Link to={`/restaurants/${ele.info.id}/${location.latitude}/${location.longitude}`}><ResCard  key={ele.info.id} resData={ele}/></Link>)
          }
        </div>
      </div>
    ):"";
  };

export default Body