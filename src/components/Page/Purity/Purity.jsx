// import { useState, useEffect } from "react";
import {
  UlCard,
  Container,
  InformationCard,
  Card,
  BtnCard,
  ProductCard,
  NameCard,
  BtnGo,
  Div,
  ImgCard
} from "../../Search/Search.styled";
import productsJson from "./PurityJ.json";
// import {  } from "../../../images/purity/AliveUltraConcentrated.webp";
import { CatalogBreadcrumbs, Home, Arrow, SelectedTab } from "../Page.style";
import home from "../../../images/png/home.png";

const Product1 = () => {
  return (
    <Container>
      <Div>
        <CatalogBreadcrumbs>
          <Home to="/">
            <img src={home} alt="home" width={12} />
          </Home>
          <Arrow />
          <SelectedTab>Purity</SelectedTab>
        </CatalogBreadcrumbs>
      </Div>
      <UlCard>
        {productsJson.map((country, index) => {
          return (
            <Card key={index}>
              <div>
                <ImgCard
                  src={require("../../../images/purity/" +
                    country.img +
                    ".webp")}
                  alt="country.img"
                  width={285}
                  height={190}
                />
              </div>
              <InformationCard>
                <NameCard>
                  <span> {country.volume}</span>
                </NameCard>
                <ProductCard>
                  <p>{country.title}</p>
                </ProductCard>
                <BtnCard>
                  <BtnGo>Перейти</BtnGo>
                </BtnCard>
              </InformationCard>
            </Card>
          );
        })}
      </UlCard>
    </Container>
  );
};

export default Product1;
