import products from "./ItemProducts.json";
import "../Products/Products.css";

const ProductsCard = () => {
  return (
    <section className="cards__content">
      <ul className="cards__ul">
        {products.map((country, index) => {
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
      </ul>
    </section>
  );
};

export default ProductsCard;
