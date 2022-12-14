import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: black;
  margin: 0 10px;
  &.active {
    color: orange;
  }
`;

export const ItemLi = styled.ul`
  display: flex;
  align-items: center;
  margin: 15px;
`;

export const ItemLii = styled.ul`
  align-items: center;
  margin: 15px 30px 15px auto;
`;

export const List = styled.li`
  margin-left: 10px;
`;

export const FooterLink = styled.a`
  color: white;
  display: block;
  padding: 5px;

  @media screen and (min-width: 320px) {
    padding: 4px;
  }

  @media screen and (min-width: 768px) {
    padding: 6px;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 20px;
`;

export const FooterButton = styled.button`
  padding: 10px 24px;
  color: #fff;
  background-image: linear-gradient(30deg, #8748cf, #27cc8d);
  border-radius: 20px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  z-index: 1;
  display: inline-block;
`;

export const FooterImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const FooterLiImg = styled.li`
  display: flex;
  margin: 5px 9px 0 0;
`;

export const BottomFooter = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 25px 10px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: 300;
`;

export const BottomFooterText = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: 300;
`;

export const FooterLogo = styled.a`
  // display: block;
  // position: relative;
  align-items: center;
  max-width: 50px;
  margin: 0 auto 50px;
  color: #fff;

  @media screen and (max-width: 480px) {
    max-width: 50px;
    margin-bottom: 30px;
  }
`;

export const LogInContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 1000px;
    max-width: 1400px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
`;
