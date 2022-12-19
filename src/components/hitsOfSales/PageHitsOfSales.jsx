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
import beauty from "../../images/jpg/013.jpg";

const HitsOfSales = () => {
  return (
    <>
      <HitsContainer>
        <ElementorColumn>
          <ElementorBackgroundOverlay>
            <ElementorHeadingTitleLeft>КРАСОТА</ElementorHeadingTitleLeft>
            <ElementorDividerSeparator />
            <ElementorTextEditor>
              La fotografia corporate come valorizzazione dell’azienda, delle
              persone, della filosofia, dei prodotti, dei processi produttivi.
            </ElementorTextEditor>
          </ElementorBackgroundOverlay>
        </ElementorColumn>

        <ElementorColumn>
          {/* <a
            href="/"
            // style={{ width: "100%", height: "100%" }}
          > */}
            <ElementorElementPopulate>
              {/* <img
              src={beauty}
              alt="beauty"
              style={{
                height: "100%",
                width: "100%",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
              }}
            /> */}

              {/* <ElementorHeadingTitleRight>corporate</ElementorHeadingTitleRight> */}
            </ElementorElementPopulate>{" "}
          {/* </a> */}
        </ElementorColumn>
      </HitsContainer>

      <HitsContainer>
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
      </HitsContainer>

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
    </>
  );
};

export default HitsOfSales;
