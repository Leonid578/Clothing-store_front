import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 20px;
  background-color: #e9eaee;
  min-height: calc(100vh - 332px);

  @media screen and (max-width: 575px) {
    min-height: calc(100vh - 483px);
  }
`;

export const UlCard = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  flex-wrap: wrap;

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
  width: 65px;
  padding: 5px;
  position: absolute;
  margin: 2px 0px 0 20px;
  border-radius: 20px;
  background-color: #fff;

  @media screen and (min-width: 576px) {
    width: 80px;
    margin: 2px 0px 0 30px;
    height: 22px;
  }

  &:hover {
    cursor: pointer;
    background-color: #00fb00;
  }
`;

export const Svg = styled.div`
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
  font-size: 13px;

  @media screen and (min-width: 576px) {
    font-size: 15px;
    margin: 0 0 0 8px;
  }
`;

export const ImgCard = styled.img`
  color: black;
  margin: 0 0 0 8px;
`;

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
  height: 450px;
  margin-top: 30px;
  flex-basis: calc(100% - 15px);

  @media screen and (min-width: 576px) {
    margin-left: 15px;
    flex-basis: calc(50% - 15px);
  }
  @media screen and (min-width: 1024px) {
    margin-left: 15px;
    flex-basis: calc(33.333% - 15px);
  }
  @media screen and (min-width: 1280px) {
    margin-left: 15px;
    flex-basis: calc(25% - 15px);
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
