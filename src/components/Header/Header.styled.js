import styled from "styled-components";
import zelenii from "../../images/png/zelenii-fon.png";
// import { NavLink } from "react-router-dom";

export const Headerr = styled.header`
  border-bottom: 1px ffffff solid;
  height: 60px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #ffffff;
  position: sticky;
  z-index: 1000;
  top: 0px;
`;

export const LogInContainer = styled.div`
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  height: 60px;
  background-image: url(${zelenii});
`;

export const HeaderLogo = styled.a`
  width: 28px;
  height: 27px;
  font-family: "Abril Fatface";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #242a37;
  display: inline-block;
  padding-top: 19px;
  padding-bottom: 14px;
`;

export const Button = styled.button`
  display: block;
  background-color: #f5f7fa;
  border: none;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: #f5f7fa;
  }
  &.active {
    background-color: #f5f7fa;
  }
`;

export const ButtonSun = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  margin: 16px 0 0 45px;
  background-color: #f5f7fa;
  border: none;
  border-radius: 50%;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #f5f7fa;
  }
  &.active {
    background-color: #f5f7fa;
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 28px;
  margin-right: 15px;
  &:hover {
    cursor: text;
  }
`;

export const Search = styled.div`
  display: flex;
  margin: 14px;
`;

export const BackgroundChange = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  padding: 5px;
`;

export const DropContainer = styled.div`
  display: flex;
  margin: 5px auto;
  text-align: center;
  @media screen and (max-width: 1023px) {
    opacity: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
`;

export const DropLi = styled.li`
  z-index: 1;
  width: 120px;
`;



export const MenuLinks = styled.a`
  color: rgba(255, 255, 255, 0.6);
  padding: 12px 16px;
  display: block;
`;

export const DropMenu = styled.ul`
  background-color: green;
  box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 19px 0 21px 0;
  position: absolute;
  top: 0;
  transform: translateY(-101%);
  transition: transform;
  transition-duration: 1s;
  opacity: 0;
`;

export const Div = styled.div`
  height: 175px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
`;

export const DivLinks = styled.div`
  &:focus ${DropMenu} {
    transform: translateY(0%);
    opacity: 1;
  }
  &:hover ${DropMenu} {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const MenuLi = styled.li`
  color: black;
  font-size: 16px;

  &:hover ${DropMenu} {
    transform: translateY(0%);
    opacity: 1;
  }
`;


