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
} from "../../Search/Search.styled";
import productsJson from "./ActiveComponentJ.json";

import { CatalogBreadcrumbs, Home, Arrow, SelectedTab } from "../Page.style";
import home from "../../../images/png/home.png";

const Product2 = () => {
  return (
    <Container>
      <Div>
        <CatalogBreadcrumbs>
          <Home to="/">
            <img src={home} alt="home" width={12} />
          </Home>
          <Arrow />
          <SelectedTab>Active Component</SelectedTab>
        </CatalogBreadcrumbs>
      </Div>

      <UlCard>
        {productsJson.map((country, index) => {
          return (
            <Card key={index}>
              <div>
                <img
                  src={require("../../../images/jpg/" + country.img + ".jpg")}
                  alt={country.img}
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

export default Product2;
