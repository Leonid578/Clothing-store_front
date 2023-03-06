import {
  Container,
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
import { useTranslation } from "react-i18next";
import "../utils/i18next";

const HitsOfSales = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HitsContainer>
        <ElementorColumn className="white">
          <ElementorBackgroundOverlay>
            <ElementorHeadingTitleLeft>
            {t("about.part1")}
            </ElementorHeadingTitleLeft>
            <ElementorDividerSeparator />
            <ElementorTextEditor>
            {t("links.Health")}
            </ElementorTextEditor>
          </ElementorBackgroundOverlay>
        </ElementorColumn>

        <ElementorColumn2>
          <a href="/">
            <ElementorElementPopulate className="img1">
              <ElementorHeadingTitleRight>
                {t("links.links_one")}
              </ElementorHeadingTitleRight>
            </ElementorElementPopulate>
          </a>
        </ElementorColumn2>
      </HitsContainer>

      <HitsContainer>
        <ElementorColumn2>
          <a href="/">
            <ElementorElementPopulate className="img2">
              <ElementorHeadingTitleRight>
                {t("links.links_two")}
              </ElementorHeadingTitleRight>
            </ElementorElementPopulate>
          </a>
        </ElementorColumn2>
        <ElementorColumn className="light">
          <ElementorBackgroundOverlay>
            <ElementorHeadingTitleLeft>
            {t("about.part2")}
            </ElementorHeadingTitleLeft>
            <ElementorDividerSeparator />
            <ElementorTextEditor>
            {t("links.Beauty")}
            </ElementorTextEditor>
          </ElementorBackgroundOverlay>
        </ElementorColumn>
      </HitsContainer>

      <HitsContainer>
        <ElementorColumn className="white">
          <ElementorBackgroundOverlay>
            <ElementorHeadingTitleLeft>
            {t("about.part3")}
            </ElementorHeadingTitleLeft>
            <ElementorDividerSeparator />
            <ElementorTextEditor>
            {t("links.Nutrition")}
            </ElementorTextEditor>
          </ElementorBackgroundOverlay>
        </ElementorColumn>

        <ElementorColumn2>
          <a href="/">
            <ElementorElementPopulate className="img3">
              <ElementorHeadingTitleRight>
                {t("links.links_tree")}
              </ElementorHeadingTitleRight>
            </ElementorElementPopulate>
          </a>
        </ElementorColumn2>
      </HitsContainer>
    </Container>
  );
};

export default HitsOfSales;
