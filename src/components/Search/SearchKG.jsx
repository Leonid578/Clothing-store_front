// import { get } from "immer/dist/internal";
import { useState, useEffect } from "react";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import { Button, Input, Searchh } from "../Header/Header.styled";
import productsJson from "../Products/ItemProducts.json";
import "../Products/Products.css";

const Search = () => {
  const [products, setProducts] = useState([]);
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
  const [value, setValue] = useState("");
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <form>
      <Searchh>
        <Input
          type="text"
          placeholder="Поиск..."
          id="searchInput"
          className="search__img"
          onChange={(event) => setValue(event.target.value)}
        />
        <Button type="submit">
          <Magnifier />
        </Button>
      </Searchh>
      {/* <>
        {filteredProducts.map((country, index) => {
          return (
            <li className="card" key={index}>
              <div className="product__img">
                <img
                  src={require("../../images/jpg/" + country.img + ".jpg")}
                  alt="country.img"
                  width={300}
                  height={350}
                />
              </div>
              <div className="card__inf">
                <div className="product__name">
                  <p>{country.title}</p>
                  <span></span>
                </div>
                <div className="product__cost">
                  <p>Полное название</p>
                  <span>{country.price}</span>
                </div>
                <div className="product__btn">
                  <button className="btn__go">Перейти</button>
                </div>
              </div>
            </li>
          );
        })}
      </> */}
    </form>
  );
};

export default Search;
