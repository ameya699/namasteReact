import { useEffect, useState } from "react";


const useRestaurantMenu=(resId,lat,long)=>{
    
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();    
    },[])

    const fetchData=async()=>{
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${resId}`
          );
        const json = await data.json();
        //working on combining all the arrays of objects into one
        // let dat=json.data
        // dat=dat?.cards[dat?.cards.length-1].groupedCard?.cardGroupMap?.REGULAR?.cards
        // dat=dat.filter((card)=>card.card?.card?.hasOwnProperty("itemCards"))
        // dat=dat.map((item)=>item.card.card.itemCards)
        // let temp=[]
        // for (let index = 0; index < dat.length; index++) {
        //     temp=[...temp,...dat[index]]
            
        // }
        
        // console.log(dat)
        setResInfo(json.data)
    }
    return resInfo
}


export default useRestaurantMenu