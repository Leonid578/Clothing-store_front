// import { useState } from "react";
import {
  UlCard,
  Container,
  InformationCard,
  Card,
  BtnCard,
  ProductCard,
  NameCard,
  BtnGo,
} from "../../Search/Search.styled";
import productsJson3 from "./BeautyJ.json";

import { CatalogBreadcrumbs, Home, Arrow, SelectedTab } from "../Page.style";
import home from "../../../images/png/home.png";

const Beauty = () => {
  return (
    <Container>
      <CatalogBreadcrumbs>
        <Home to="/">
          <img src={home} alt="home" width={10} />
        </Home>
        <Arrow />
        <SelectedTab>Beauty</SelectedTab>
      </CatalogBreadcrumbs>
      <UlCard>
        {productsJson3.map((country, index) => {
          return (
            <Card key={index}>
              <div>
                <img
                  src={require("../../../images/jpg/" + country.img + ".jpg")}
                  alt="country.img"
                  width={300}
                  height={350}
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

export default Beauty;
