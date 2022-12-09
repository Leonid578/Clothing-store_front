import styled from "styled-components";

export const Footerr = styled.footer`
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  position: relative;
  background: black;
`;

export const Container = styled.div`
  width: 80%;
  padding: 20px;
  margin: 0 auto 0 auto;
`;

export const FooterLogo = styled.a`
  font-family: "Abril Fatface";
  font-style: normal;

  color: #fff;

  @media screen and (min-width: 320px) {
    // margin: 0 20px 0 0;
    
    padding: 15px;
    padding-bottom: 6px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 100px 0 0;

    padding: 20px;
    padding-bottom: 14px;
    //   font-weight: 400;
    // font-size: 20px;
    // line-height: 27px;
  }
`;

export const LogInContainer = styled.div`
  height: 200px;
  display: flex;
  background-color: #212121;
`;

export const FooterItem = styled.ul`
  display: flex;

  @media screen and (min-width: 320px) {
    padding: 10px;
    height: 170px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    height: 170px;
  }
`;

export const FooterLi = styled.li`
  background: tomato;

  @media screen and (min-width: 320px) {
    // width: 70px;
    margin: 0 10px 10px;
  }

  @media screen and (min-width: 768px) {
    // width: 150px;
    margin: 0 10px 10px;
  }
`;

export const FooterLink = styled.a`
  color: white;
  display: block;
  height: 20px;
  width: 30px;
  padding: 5px;

  @media screen and (min-width: 320px) {
    height: 10px;
    width: 20px;
    padding: 4px;
  }

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 30px;
    padding: 5px;
  }
`;
