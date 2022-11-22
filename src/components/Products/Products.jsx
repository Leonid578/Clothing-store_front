import {
    Cards,
    ProductImg,
    ImgI,
    CardsInf,
    ProductDec,
    DecP,
    DecSpan,
    ProductInform,
    InformP,
    InformSpan,
    ProductBtn,
    BtnGo,
} from "./Products.styled";
import luboeNazvanie from "../../images/jpg/img00.jpg";
const ProductsCard = () => {
    return (
        <Cards>
            <ProductImg>
                <ImgI >
                    <img width={300} src={luboeNazvanie} alt="luboeNazvanie"/>
                </ImgI>
            </ProductImg>
            <CardsInf>
                <ProductDec>
                    <DecP>Пакет</DecP>
                    <DecSpan></DecSpan>
                </ProductDec>
                <ProductInform>
                    <InformP>Большой пакет АТБ</InformP>
                    <InformSpan>12 - 2 000 000 UAH</InformSpan>
                </ProductInform>
                <ProductBtn>
                    <BtnGo>Перейти</BtnGo>
                </ProductBtn>
            </CardsInf>
        </Cards>
    );
};

export default ProductsCard;