import "./App.css";
import ClassComp from "./component/ClassComp";
import FunA from "./component/FunA";
import FunB from "./component/FunB";
import Form from "./component/Form";
import Header from "./Meme/Header";
import Meme from "./Meme/Meme";
import UseContext from "./component/UseContext";
// import Weather from "./weatherApp/Weather";
import Tempapp from "./tempApp/Tempapp";
import Navbar from "./Router/Navbar";
import Home from "./Router/Home";
import Products from "./Router/Products";
import Contact from "./Router/Contact";
import About from "./Router/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        {/* <FunA firstName={"Good"} lastName={"mk"} /> */}
        {/* <FunB /> */}
        {/* <ClassComp charData={[{name: "Charlie",job: "Janitor"},{name: "Mac",job: "Bouncer"}]}/> */}
        {/* <Form /> */}
        {/* <Header /> */}
        {/* <Meme /> */}
        {/* <UseContext /> */}
        {/* <Weather /> */}
        {/* <Tempapp /> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
