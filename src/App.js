import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Notice from "./components/Notice";


function App() {
  return (
    <div className="app">
      <Notice/>
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
