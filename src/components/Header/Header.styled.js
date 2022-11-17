import styled from "styled-components";
// import { NavLink } from "react-router-dom";

export const Headerr = styled.header`
  border-bottom: 1px ffffff solid;
  height: 60px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #ffffff;
  position: sticky;
  z-index: 1000;
  top: 0px;

  // @media screen and (min-width: 1280px) {
  //   width: 1280px;
  // }
`;

export const LogInContainer = styled.div`
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
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

export const Menu_ul = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  margin:5px auto;
`;

export const Menu_li = styled.li`
  display: inline-block;
  vertical-align: middle;
  position: relative;

  &:hover{
    // cursor: pointer;
    background-color:rgba(255, 255, 255, 0.6); 
  }
`;

export const Menu_a = styled.a`
  display: block;
  color: #212121;
  font-size: 12px;
  font-family: "Proxima Nova Regular", Helvetica, Arial, sans-serif;
  line-height: 50px;
  text-transform: uppercase;
  padding: 0 20px;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;
  position: relative;
  letter-spacing: 0.01em;

  &:hover{
    cursor: pointer;
    background-color:#a0a0a0;
  }
`;
