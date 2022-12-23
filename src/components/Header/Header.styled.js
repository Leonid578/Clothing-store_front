import styled from "styled-components";

export const Dddiv = styled.div`
`;

export const Headerr = styled.header`
  border-bottom: 1px ffffff solid;
  height: 60px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  position: sticky;
  z-index: 1000;
  top: 0px;
`;

export const LogInContainer = styled.div`
  display: flex;
  height: 60px;
  width: 80%;
  margin: 0 auto 0 auto;

  // @media screen and (min-width: 320px) {
  // }

  // @media screen and (min-width: 768px) {
  // }
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
  margin: 16px 0 0 0;
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
  &:hover {
    cursor: text;
  }

  @media screen and (min-width: 320px) {
    width: 100px;
    height: 28px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 28px;
    margin-right: 15px;
  }
`;

export const Searchh = styled.div`
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
  padding: 19px 0 21px 0;
  position: absolute;
  top: 0;
  transform: translateY(101%);
  transition: transform;
  transition-duration: 1s;
  // opacity: 0;
`;

export const Div = styled.div`
  height: 175px;
  margin-top: 10px;
  position: relative;
  // overflow: hidden;
`;

export const DivLinks = styled.div`
  // &:focus ${DropMenu} {
  //   transform: translateY(0%);
  //   opacity: 1;
  // }
  // &:hover ${DropMenu} {
  //   transform: translateY(0%);
  //   opacity: 1;
  // }
`;

export const MenuLi = styled.li`
  color: black;
  font-size: 16px;

  // &:hover ${DropMenu} {
  //   transform: translateY(0%);
  //   opacity: 1;
  // }
`;

export const ContainerSearch = styled.div`
  margin: 0 0 0 auto;
  width: 300px;
  display: flex;
`;
