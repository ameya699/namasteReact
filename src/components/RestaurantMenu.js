import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import DisplayFood from "./DisplayFood";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {

  const {resId,lat,long}=useParams();
  
  const resinfo=useRestaurantMenu(resId,lat,long);
  // console.log(resinfo)
  //  console.log(resinfo?.cards[resinfo?.cards.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.hasOwnProperty("title"))
   
  const bannerobj =resinfo?.cards[2]?.card?.card?.info
  const filteredData=resinfo?.cards[resinfo?.cards.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards
  let RecommendedItems=filteredData?.filter((card)=>card.card?.card?.hasOwnProperty("itemCards"))
  


  const itemCards=resinfo?.cards[resinfo?.cards.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const categories=resinfo?.cards[resinfo?.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log("The categories are ",categories)
   return resinfo === null ? (
    <ShimmerSimpleGallery card imageHeight={250} row={2} col={4} caption />
  ) : (
    // <div className="p-20">
    //   <h1><b className='text-[24px]'>{bannerobj.name}</b><h3>{bannerobj.avgRatingString}⭐️</h3></h1>
    //   <h4 className="text-[22px]">{bannerobj.cuisines.join(", ")} - {bannerobj.costForTwoMessage}</h4>
    //   <h2 className="text-[18px]">Menu</h2>
    //   <ul style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>

    //     {
    //         itemCards.map((item)=>{
    //       return <li key={item.card.info.id} className="list-none p-1"><DisplayFood foodItem={item}/></li>
    //       })
    //     }
    //   </ul>
    // </div>
    <div className="text-center">
      <h1 className='font-bold my-6 text-2xl'>{bannerobj.name}</h1>
      <p className="font-bold text-lg">{bannerobj.cuisines.join(", ")} - {bannerobj.costForTwoMessage}</p>
      {
        categories.map((category)=>{
          {console.log(category)}
           return (
            
           <ResCategory data={category?.card?.card}/>
          )
        })
      }
    </div>
  );
};

export default RestaurantMenu;
