import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 20px;
  background-color: #e9eaee;
  min-height: calc(100vh - 362px);
  display: flex;
  justify-content: center;
  //  align-items: center;
  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 332px);
  }

  @media screen and (max-width: 575px) {
    min-height: calc(100vh - 482px);
  }
`;

export const UlCard = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 25px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1900px;
  @media screen and (min-width: 576px) {
    margin-left: -15px;
  }
`;

export const LiCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  flex-wrap: wrap;
  margin-left: -30px;
`;

export const Input = styled.input`
  &:hover {
    cursor: text;
  }
  @media screen and (min-width: 320px) {
    width: 100px;
    height: 28px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 28px;
  }
`;
export const Searchh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Leftarroww = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 5px;
  position: absolute;
  margin: 2px 0px 0 20px;
  border-radius: 20px;
  background-color: #fff;

  @media screen and (min-width: 576px) {
    width: 90px;
    margin: 2px 0px 0 30px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
    background-color: #00fb00;
  }
`;

export const Svg = styled.div`
  height: 22px;
  @media screen and (min-width: 320px) {
    width: 18px;
  }
  @media screen and (min-width: 576px) {
    width: 22px;
  }
`;

export const LeftarrowwText = styled.p`
  color: black;
  margin: 0 0 0 5px;
  font-size: 14px;
  user-select: none;

  @media screen and (min-width: 576px) {
    font-size: 16px;
    margin: 0 0 0 6px;
  }
`;

// export const ImgCard = styled.img`
//   color: black;
//   margin: 0 0 0 8px;
// `;

export const InformationCard = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  border: 3px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  // height: 450px;
  margin-top: 30px;
  flex-basis: calc(100% - 64px);

  @media screen and (min-width: 576px) {
    margin-left: 15px;
    flex-basis: calc(40% - 15px);
  }
  @media screen and (min-width: 1024px) {
    margin-left: 15px;
    flex-basis: calc(26.666% - 15px);
  }
  @media screen and (min-width: 1280px) {
    margin-left: 15px;
    flex-basis: calc(20%);
  }
`;

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const NameCard = styled.div`
  color: black;
  margin: 0 0 0 8px;
  margin: 10px;
`;

export const BtnCard = styled.div`
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const BtnGo = styled.button`
  border: 0px;
  width: 100%;
  height: 30px;
  color: aliceblue;
  background-color: red;
`;
