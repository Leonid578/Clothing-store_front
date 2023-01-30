// import { get } from "immer/dist/internal";
import { useState, useEffect } from "react";
import {
  UlCard,
  Input,
  Searchh,
  Leftarroww,
  LeftarrowwText,
  Container,
  InformationCard,
  Card,
  BtnCard,
  ProductCard,
  NameCard,
  BtnGo,
  Svg,
} from "./Search.styled";
import { ReactComponent as Leftarrow } from "../../images/svg/leftarrowsign.svg";
import productsJson from "../Products/ItemProducts.json";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("");
  // const getProducts = () => {
  //   get("products.title").then((response) => {
  //     setProduct(response.json);
  //   });
  // };
  useEffect(() => {
    const getProducts = () => {
      setProducts(productsJson);
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(value.toLowerCase());
  });

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const onTextChanged = (event) => {
    const text = event.target.value.trim();
    setValue(text);
  };

  return (
    <Container>
      <Leftarroww to="/" onClick={scrollTop}>
        <Svg>
          <Leftarrow/>
        </Svg>
        <LeftarrowwText>Назад</LeftarrowwText>
      </Leftarroww>
      <Searchh>
        <Input
          type="text"
          placeholder="Поиск..."
          onChange={onTextChanged}
        />
      </Searchh>
      <UlCard>
        {value !== "" &&
          filteredProducts.map((country, index) => {
            return (
              <Card key={index}>
                <div>
                  <img
                    src={require("../../images/jpg/" + country.img + ".jpg")}
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

export default Search;
