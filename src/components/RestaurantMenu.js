import React, { useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId=23706"
    );
    const json = await data.json();
    console.log(json.data.cards[2]?.card?.card?.info)
    setResInfo(json.data);
  };

   const bannerobj =resinfo?.cards[2]?.card?.card?.info
   const itemCards=resinfo?.cards[resinfo?.cards.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
   console.log(itemCards)
  return resinfo === null ? (
    <ShimmerSimpleGallery card imageHeight={250} row={2} col={4} caption />
  ) : (
    <div className="menu">
      <h1>{bannerobj.name}</h1>
      <p>{bannerobj.cuisines.join(", ")} - {bannerobj.costForTwoMessage}</p>
      
      <h3>{bannerobj.avgRatingString}⭐️</h3>
    </div>
  );
};

export default RestaurantMenu;
