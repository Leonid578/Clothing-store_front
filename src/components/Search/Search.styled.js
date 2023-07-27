import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 50px;
  background-color: #e9eaee;
  min-height: calc(100vh - 362px);
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 332px);
  }

  @media screen and (max-width: 575px) {
    min-height: calc(100vh - 482px);
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 80px;
  left: 10%;

  @media screen and (min-width: 1024px) {
    top: 110px;
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
  margin-bottom: 30px;
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
  // width: 250px;
  display: flex;
  // align-items: center;
  flex-direction: column;

  padding: 15px;
`;

export const Card = styled.div`
  // border: 3px;
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // background: white;
  // margin-top: 30px;
  // flex-basis: calc(100% - 64px);
  // padding: 15px;

   width: 300px;
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 10px;
    text-align: center;
    transition: transform 0.3s ease;

  cursor: pointer;

  &:hover{
    transform: translateY(-5px);
  }

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
  display: block;
  white-space: nowrap;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: calc(16px + (18 - 16) * (100vw - 575px) / (1920 - 575));
  line-height: calc(18px + (24 - 18) * (100vw - 575px) / (1920 - 575));
  color: #36424c;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding-top: 12px;

  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
  margin-bottom: 12px;

    width: 100%;
    max-height: 200px;
    object-fit: cover;
`;

export const NameCard = styled.div`
  text-transform: uppercase;
  font-size: calc(18px + (20 - 18) * (100vw - 575px) / (1920 - 575));
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: 0.8px;
  text-align: left;
  color: #adbfbf;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 12px;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 4px;

   font-size: 20px;
    margin: 10px 0;
`;

export const BtnCard = styled.div`
  // width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
// background-color: #007bff;
  // &:hover{
  //    background-color: #0056b3;
  // }
`;

export const BtnGo = styled.button`
background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover{
      background-color: #0056b3;
   }
    
  // border: 0px;
  // width: 100%;
  // height: 30px;
  // color: aliceblue;
  // background-color: red;
  
`;

export const ImgCard = styled.img`
width: 100%;
max-height: 200px;
object-fit: cover;
  
`;