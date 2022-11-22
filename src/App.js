import Header from "./components/Header/Header";

// import Footer from './components/Footer/Footer'
// import HitsOfSales from './components/hitsOfSales/HitsOfSales'
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Carousel.style.css";
import Products from './components/Products/Products'

const App = () => {
  return (
    <>
      <Header />
      <Carousel>
        <div className="Img1"></div>
        <div className="Img2"></div>
        <div className="Img3"></div>
      </Carousel>
      <Products/>
      {/* <HitsOfSales /> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
