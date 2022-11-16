import HeaderMenu from "./components/Header/Header";
import FooterMenu from './components/Footer/Footer'
import { Carousel } from "./components/Carousel/Carousel";
import "./components/Carousel/Carousel.style.css";


const App = () => {
  return (
    <>
      <HeaderMenu />
      <Carousel>
        <div className="Img1"></div>
        <div className="Img2"></div>
        <div className="Img3"></div>
      </Carousel>
      <FooterMenu />
    </>
  );
};

export default App;
