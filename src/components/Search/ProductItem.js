import React from "react";
import {
  InformationCard,
  Card,
  BtnCard,
  ProductCard,
  NameCard,
  BtnGo,
} from "./Search.styled";
import { useTranslation } from "react-i18next";
import "../utils/i18next";
export default function ProductItem({ title, link, img, volume }) {
  const { t } = useTranslation();
  return (
    <Card>
      <div>
        <img
          src={require("../../images/jpg/" + img + ".jpg")}
          alt="country.img"
          width={300}
          height={350}
        />
      </div>
      <InformationCard>
        <NameCard>
          <span> {t(volume)}</span>
        </NameCard>
        <ProductCard>
          <p>{t(title)}</p>
        </ProductCard>
        <BtnCard>
          <BtnGo>Перейти</BtnGo>
        </BtnCard>
      </InformationCard>
    </Card>
  );
}
