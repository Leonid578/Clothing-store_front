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
import ATBbag from "../../images/jpg/img00.jpg";
import ATBEcoBag from "../../images/jpg/img001.jpg";
import BMWbag from "../../images/jpg/img002.jpg";
// import products from './ItemProducts.json'
import "../Products/Products.css";


const ProductsCard = () => {
  return (
    <section class="cards__content">
      <ul class="cards__ul">
        <li class="card">
          <div class="product__img">
            <img src={ATBbag} width={300} height={350} alt="ATBbag" />
          </div>
          <div class="card__inf">
            <div class="product__name">
              <p>фол</p>
              <span></span>
            </div>
            <div class="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div class="product__btn">
              <button className="btn__go">Перейти</button>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="product__img">
            <img src={ATBEcoBag} width={300} height={350} alt="ATBEcoBag" />
          </div>
          <div class="card__inf">
            <div class="product__name">
              <p>кап</p>
              <span></span>
            </div>
            <div class="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div class="product__btn">
              <button className="btn__go">Перейти</button>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="product__img">
            <img src={BMWbag} width={300} height={350} alt="BMWbag" />
          </div>
          <div class="card__inf">
            <div class="product__name">
              <p>геп</p>
              <span></span>
            </div>
            <div class="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div class="product__btn">
              <button className="btn__go">Перейти</button>
            </div>
          </div>
        </li>
        <li class="card">
          <div class="product__img">
            <img src={BMWbag} width={300} height={350} alt="BMWbag" />
          </div>
          <div class="card__inf">
            <div class="product__name">
              <p>геп</p>
              <span></span>
            </div>
            <div class="product__cost">
              <p>Польное название</p>
              <span>цена</span>
            </div>
            <div class="product__btn">
              <button className="btn__go">Перейти</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ProductsCard;
