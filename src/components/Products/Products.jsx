// import {
//     CardsContent,
//     CardsUl,
//     Card,
//     ProductImg,
//     ImgI,
//     CardsInf,
//     ProductDec,
//     DecP,
//     DecSpan,
//     ProductInform,
//     InformP,
//     InformSpan,
//     ProductBtn,
//     BtnGo,
// } from "./Products.styled";
// import ATBbag from "../../images/jpg/img00.jpg";
// import ATBEcoBag from "../../images/jpg/img001.jpg";
// import BMWbag from "../../images/jpg/img002.jpg";
import products from "./ItemProducts.json";
import "../Products/Products.css";

const ProductsCard = () => {
  return (
    <section className="cards__content">
      <ul className="cards__ul">
        {products.map((country) => {
          return (
            <li className="card" key={country.id}>
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

        {/* <li className="card">
          <div className="product__img">
            <img src={ATBbag} width={300} height={350} alt="ATBbag" />
          </div>
          <div className="card__inf">
            <div className="product__name">
              <p>фол</p>
              <span></span>
            </div>
            <div className="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div className="product__btn">
              <button classNameName="btn__go">Перейти</button>
            </div>
          </div>
        </li> */}
        {/* <li className="card">
          <div className="product__img">
            <img src={ATBEcoBag} width={300} height={350} alt="ATBEcoBag" />
          </div>
          <div className="card__inf">
            <div className="product__name">
              <p>кап</p>
              <span></span>
            </div>
            <div className="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div className="product__btn">
              <button classNameName="btn__go">Перейти</button>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="product__img">
            <img src={BMWbag} width={300} height={350} alt="BMWbag" />
          </div>
          <div className="card__inf">
            <div className="product__name">
              <p>геп</p>
              <span></span>
            </div>
            <div className="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div className="product__btn">
              <button classNameName="btn__go">Перейти</button>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="product__img">
            <img src={BMWbag} width={300} height={350} alt="BMWbag" />
          </div>
          <div className="card__inf">
            <div className="product__name">
              <p>геп</p>
              <span></span>
            </div>
            <div className="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div className="product__btn">
              <button classNameName="btn__go">Перейти</button>
            </div>
          </div>
        </li> */}
      </ul>
    </section>
  );
};

export default ProductsCard;
