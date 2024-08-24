import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Notice from "./components/Notice";
import { Outlet } from "react-router-dom";
 


function App() {
  return (
    <div className="app">
      <Notice/>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

 

export default App;
