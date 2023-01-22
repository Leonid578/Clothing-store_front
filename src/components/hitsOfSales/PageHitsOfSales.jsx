import {
  HitsContainer,
  ElementorColumn,
  ElementorColumn2,
  ElementorHeadingTitleLeft,
  ElementorDividerSeparator,
  ElementorTextEditor,
  ElementorElementPopulate,
  ElementorHeadingTitleRight,
  ElementorBackgroundOverlay,
} from "./PageHitsOfSales.stylee";
import "./style.css";

const HitsOfSales = () => {
  return (
    <>
      <HitsContainer>
        <ElementorColumn className="white">
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

        <ElementorColumn2>
          <a href="/">
            <ElementorElementPopulate className="img1">
              <ElementorHeadingTitleRight>corporate</ElementorHeadingTitleRight>
            </ElementorElementPopulate>
          </a>
        </ElementorColumn2>
      </HitsContainer>

      <HitsContainer>
        <ElementorColumn2>
          <a href="/">
            <ElementorElementPopulate className="img2">
              <ElementorHeadingTitleRight>corporate</ElementorHeadingTitleRight>
            </ElementorElementPopulate>
          </a>
        </ElementorColumn2>
        <ElementorColumn className="light">
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
      </HitsContainer>

      <HitsContainer>
        <ElementorColumn className="white">
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

        <ElementorColumn2>
          <a href="/">
            <ElementorElementPopulate className="img3">
              <ElementorHeadingTitleRight>corporate</ElementorHeadingTitleRight>
            </ElementorElementPopulate>
          </a>
        </ElementorColumn2>
      </HitsContainer>
    </>
  );
};

export default HitsOfSales;
