import {
  HitsContainer,
  ElementorColumn,
  ElementorHeadingTitleLeft,
  ElementorDividerSeparator,
  ElementorTextEditor,
  ElementorElementPopulate,
  ElementorHeadingTitleRight,
  ElementorBackgroundOverlay,
} from "./PageHitsOfSales.style";
import "../../components/Carousel/Carousel.style.css";
import Cat1 from "../../images/jpg/img5.jpg";

const HitsOfSales = () => {
  return (
    <HitsContainer>
      <ElementorColumn>
        <ElementorBackgroundOverlay>
          <ElementorHeadingTitleLeft>
            FOTOGRAFIA COMMERCIALE
          </ElementorHeadingTitleLeft>
          <ElementorDividerSeparator />
          <ElementorTextEditor>
            La fotografia corporate come valorizzazione dell’azienda, delle
            persone, della filosofia, dei prodotti, dei processi produttivi.
          </ElementorTextEditor>
        </ElementorBackgroundOverlay>
      </ElementorColumn>

      <ElementorColumn>
        <ElementorElementPopulate>
          <img
            src={Cat1}
            alt="cat1"
            style={{ height: "100%", width: "100%" }}
          />
          <a href="/">
            <ElementorHeadingTitleRight>corporate</ElementorHeadingTitleRight>
          </a>
        </ElementorElementPopulate>
      </ElementorColumn>
    </HitsContainer>
  );
};

export default HitsOfSales;
