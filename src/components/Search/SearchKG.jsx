// import { get } from "immer/dist/internal";
import { useState, useEffect } from "react";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import {
  Button,
  Input,
  Searchh,
  StyledLink,
  FillSpace,
} from "../Header/Header.styled";
import productsJson from "../Products/ItemProducts.json";
import "../Products/Products.css";

const Search = () => {
  const [change, setChanch] = useState(false);
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
    const text = event.target.value.trim();

    setValue(text);
  };

  const onTextСhange = (event) => {
    // const text = event.target.value.trim();
    // setValue(event.text);
    console.log(event);
    // event.preventDefault();
  };

  if (value !== "") {
    setChanch(true);
  }

  let Div;

  if (change === false) {
    Div = (
      <section>
        <FillSpace>
          <h1>ЧТО Ищешь?</h1>
        </FillSpace>
      </section>
    );
  } else {
    Div = (
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
    );
  }

  return (
    <form>
      <Searchh>
        <Input type="text" placeholder="Поиск..." onChange={onTextChanged} />
        <StyledLink to="/buy" onClick={onTextСhange}>
          <Button>
            <Magnifier />
          </Button>
        </StyledLink>
      </Searchh>

      {Div}
    </form>
  );
};

export default Search;
