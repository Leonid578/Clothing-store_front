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

export const Button = styled.button`
  width: 28px;
  height: 28px;
  // padding: 5px;
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

export const Input = styled.input`
  width: 200px;
  height: 28px;
  margin-right:15px;
  &:hover {
    cursor: text;
    // background-color:#a0a0a0;
  }
`;

export const Search = styled.div`
  display: flex;
  margin:14px;
`;

export const DropDiv = styled.div`
    display: flex;
    height: 100%;
    margin:5px auto;
`;
export const DropMenu = styled.div`
    display: none;
    margin-top: 5px;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    transition-delay: 1s;
    z-index: 1;
`;
export const DropDown = styled.div`
    position: relative;
    display: inline-block;
    &:focus ${DropMenu}{
      display: block;
    }
    &:hover ${DropMenu}{
      display: block;
    }
`;
export const DropBtn = styled.button`
    background-color: white;
    color: black;
    padding: 16px;
    font-size: 16px;
    border: none;
`;

export const MenuLinks = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background: #fff;
    }
`;