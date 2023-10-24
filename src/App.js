import { BrowserRouter } from "react-router-dom/dist";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/header/Hero/Hero";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <Slider />
        <Virtual />
        <Products />
        <Testimonials />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
