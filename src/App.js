import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import CartContext from "./utils/CartContext";
 


function App() {
  const [userInfo,setUserInfo]=useState();
  const [cartList,setCartList]=useState([]);
  useEffect(()=>{
    const data={
      name:"Ameya Awatade"
    }
    const cartdata={listval:[
      {
          id:"1",
          productName:"Burger",
          price:"149"
      },
      {   "id":"2",
          productName:"Chicken Breasts",
          price:"250"
      }
  ]}
    setCartList(cartdata.listval)
    setUserInfo(data.name)
  },[])

  return (
    <CartContext.Provider value={{productList:cartList}}>
      <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app">
      <Notice/>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
    </UserContext.Provider>
    </CartContext.Provider>
  );
}

 

export default App;
