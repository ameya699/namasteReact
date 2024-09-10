import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
 


function App() {
  const [userInfo,setUserInfo]=useState();
  useEffect(()=>{
    const data={
      name:"Ameya Awatade"
    }
    setUserInfo(data.name)
  },[])

  return (
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app">
      <Notice/>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
    </UserContext.Provider>
  );
}

 

export default App;
