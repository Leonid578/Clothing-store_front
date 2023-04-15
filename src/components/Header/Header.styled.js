import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MenuPhoto from "../../images/png/freeIconMenuLight.png";

export const Container = styled.div`
  // height: 92px;
  width: 100%;
  display: block;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background: white;
  transition: transform 0.1s linear;

  // @media screen and (max-width: 1023px) {
  //   height: 60px;
  // }
`;

export const SwitchThemeText = styled.div`
  margin: 0 0 0 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  text-align: left;
  color: #36424c;
  user-select: none;
  opacity: 0.5;
`;

export const SwitchTheme = styled.div`
  margin: 0 8px 0 8px;
  cursor: pointer;
  user-select: none;
`;

export const TopHeader = styled.div`
  margin: 0 auto 0 auto;
  justify-content: space-between;
  height: 32px;
  width: 80%;
  display: flex;
  box-shadow: 0px 1px 0px rgba(9, 30, 63, 0.1);
  transition: top 0.3s;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const Tell = styled.a`
  padding: 3px 0;
  opacity: 0.5;

  &:hover {
    color: #212121;
  }
`;

export const StyledLinkLogo = styled(NavLink)`
  font-family: "Abril Fatface";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #fff;
  color: #212121;
  opacity: 0.5;
  display: inline-block;
  padding-top: 19px;
  padding-bottom: 14px;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const StyledLink1 = styled(NavLink)`
  font-weight: 600;
  line-height: 27px;
  // margin-left: 30px;

  text-transform: uppercase;
  color: #212121;
  display: inline3block;
  padding: 19px 8px 14px;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    color: #212121;
  }
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    dislay: none;
  }
`;
export const StyledLink2 = styled(NavLink)`
  font-weight: 600;
  line-height: 27px;
  text-transform: uppercase;
  color: #212121;
  display: inline-block;
  padding: 19px 3px 14px;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    color: #212121;
  }
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    dislay: none;
  }
`;
export const StyledLink3 = styled(NavLink)`
  font-weight: 600;
  line-height: 27px;
  text-transform: uppercase;
  color: #212121;
  display: inline-block;
  padding: 19px 3px 14px;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    color: #212121;
  }
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    dislay: none;
  }
`;
export const StyledLink4 = styled(NavLink)`
  font-weight: 600;
  line-height: 27px;
  text-transform: uppercase;
  color: #212121;
  display: inline-block;
  padding: 19px 3px 14px;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    color: #212121;
  }
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    dislay: none;
  }
`;
export const StyledLink5 = styled(NavLink)`
  font-weight: 600;
  text-transform: uppercase;
  line-height: 27px;
  color: #212121;
  display: inline-block;
  padding: 19px 3px 14px;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    color: #212121;
  }
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    dislay: none;
  }
`;

export const StyledButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  border-radius: 50%;
  position: absolute;
  // margin-top: 17px;
  margin-left: calc(80% - 30px);

  &:hover {
    cursor: pointer;
    background-color: #f5f7fa;
  }
  &.active {
    background-color: #f5f7fa;
  }
`;

export const LogInContainer = styled.div`
  width: 80%;
  margin: 0px auto 0 auto;
  display: flex;
  align-items: center;
  height: 60px;
`;

export const Button = styled.span`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  border-radius: 50%;
  position: absolute;
  margin-top: 17px;
  margin-left: 1230px;
  top: 0;
  left: 0;
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
  align-items: center;
  justify-content: center;
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
`;

export const Div = styled.div`
  height: 175px;
  margin-top: 10px;
  position: relative;
`;

export const DivLinks = styled.div`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const MenuLi = styled.li`
  color: black;
  font-size: 16px;
`;

export const ContainerSearch = styled.div`
  margin: 0 0 0 auto;
  width: 300px;
  display: flex;
`;

export const FillSpace = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
`;

export const I = styled.i`
  font-size: 24px;
  opacity: 0.3;

  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin: 0 0 3px 3px;
  cursor: pointer;
`;

export const CloseModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const MenuCatalog = styled.button`
  display: flex;
  border: solid 3px rgba(173, 191, 191, 0.25);
  padding: 2px 20px 2px 15px;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;
  height: 40px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MenuTellCatalog = styled.div`
  margin: 8px;
  // width: calc(33.3333333333% - 16px);
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuImg = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${MenuPhoto});
  margin-right: 7px;
  background-size: cover;
`;

export const MenuText = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: left;
  color: #413d58;
`;

export const General = styled.div`
  width: 1000px;
  height: 1000px;
  opacity: 0.2;
  background-color: black;
  z-index: 100;
`;

export const ContainerMenu = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  width: 1000px;
  z-index: 99;
  overflow: auto;
  background-color: white;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileNavigatorUl = styled.ul`
  display: block;
  m
`;

export const MobileNavigatorLi = styled.li`
  height: 64px;
  line-height: 64px;
  padding: 0 calc(16px + (32 - 16) * (100vw - 360px) / (780 - 360));
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #ebebeb;
`;

// export const  = styled.`

// `;
