import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import HitsOfSales from './components/hitsOfSales/HitsOfSales'
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Carousel.style.css";


const App = () => {
  return (
    <>
      <Header />
      <Carousel>
        <div className="Img1"></div>
        <div className="Img2"></div>
        <div className="Img3"></div>
      </Carousel>
      <HitsOfSales />
      <Footer />
    </>
  );
};

export default App;
