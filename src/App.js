import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import reduxStore from "./redux/store";
import Category from "./Components/Category";
import "./assets/css/main.css";
import Featured from "./Components/Featured";
import Trending from "./Components/Trending";
import Testimonial from "./Components/Testimonial";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";

const store = reduxStore;
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Category />
      <Featured />
      <Trending/>
      <Testimonial/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
