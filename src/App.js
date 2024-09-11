import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import CartContext from "./utils/CartContext";
import {Provider} from "react-redux" 
import appStore from "./utils/appStore";


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
      {   id:"2",
          productName:"Chicken Breasts",
          price:"250"
      },
      {
        id:"3",
        productName:"Gulab Jamun",
        price:"50"
      }
  ]}
    setCartList(cartdata.listval)
    setUserInfo(data.name)
  },[])

  return (
    <Provider store={appStore}>
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
    </Provider>
  );
}

 

export default App;
