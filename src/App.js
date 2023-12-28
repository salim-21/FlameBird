import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/home";
import About from "./About/about";
import Contact from "./Contact/contact";
import { Footer } from "./Footer/footer";
import Service from "./Service/service";
import Digital from "./Digital/digital";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
        <Routes>
          <Route path="/" element={<Contact/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Digital" element={<Digital/>} />
        </Routes>
      </BrowserRouter>
     

      <Footer />
    </div>
  );
}

export default App;
