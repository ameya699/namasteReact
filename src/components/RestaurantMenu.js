import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import DisplayFood from "./DisplayFood";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const {resId,lat,long}=useParams();
  
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${resId}`
    );
    const json = await data.json();
    console.log(json.data)
    setResInfo(json.data);
  };

   
   
   const bannerobj =resinfo?.cards[2]?.card?.card?.info
   const itemCards=resinfo?.cards[resinfo?.cards.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  //  console.log(itemCards)
  return resinfo === null ? (
    <ShimmerSimpleGallery card imageHeight={250} row={2} col={4} caption />
  ) : (
    <div className="menu">
      <h1>{bannerobj.name}<h3>{bannerobj.avgRatingString}⭐️</h3></h1>
      <h4>{bannerobj.cuisines.join(", ")} - {bannerobj.costForTwoMessage}</h4>
      <h2>Menu</h2>
      <ul style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
        {
          itemCards.map((item)=>{
            // return <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
          return <li key={item.card.info.id} style={{listStyleType:"none",padding:"5px"}}><DisplayFood foodItem={item}/></li>
          })
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
