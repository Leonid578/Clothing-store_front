// import { get } from "immer/dist/internal";
import { useState, useEffect } from "react";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import { Button, Input, Searchh, StyledLink } from "../Header/Header.styled";
import productsJson from "../Products/ItemProducts.json";
import "../Products/Products.css";

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

  const onTextChanged = (event) => {
    const text = event.target.value.trim(); // удаляем пробелы
    setValue(text);
    // console.log("onTextChanged");
  };

  const onTextСhange = (event) => {
    // const text = event.target.value.trim(); // удаляем пробелы
    // setValue(event.text);
    console.log(event);
    // event.preventDefault();
  };

  return (
    <form>
      <Searchh>
        <Input
          type="text"
          placeholder="Поиск..."
          // id="searchInput"
          // className="search__img"
          onChange={onTextChanged}
        />
        <StyledLink to="/buy" onClick={onTextСhange}>
          <Button>
            <Magnifier />
          </Button>
        </StyledLink>
      </Searchh>
      <section className="cards__content">
        <ul className="cards__ul">
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
                    <span> {country.volume} </span>
                  </div>
                  <div className="product__cost">
                    <p>{country.title}</p>
                  </div>
                  <div className="product__btn">
                    <button className="btn__go">Перейти</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </form>
  );
};

export default Search;
