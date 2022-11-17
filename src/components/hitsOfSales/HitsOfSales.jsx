import { HitsContainer, СellDiv } from "./HitsOfSales.style";
import "../../components/Carousel/Carousel.style.css";

const HitsOfSales = () => {
  return (
    <HitsContainer>
      <СellDiv>
        <h1>Хиты продаж</h1>
        <p>
          Самые популярные продукты компании, заслужившие признание потребителей
          во многих странах мира
        </p>
      </СellDiv>
      <СellDiv className="Img4"></СellDiv>
      <СellDiv className="Img4"></СellDiv>
      <СellDiv className="Img4"></СellDiv>
    </HitsContainer>
  );
};

export default HitsOfSales;
