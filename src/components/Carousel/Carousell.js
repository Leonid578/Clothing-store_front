import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 50%;
  text-indent: -999em;
  cursor: pointer;
  position: absolute;
  overflow: hidden;
  background-color: transparent;
  box-shadow: inset 0 0 0 2px white;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 1px #fff;
    -webkit-transition: height 0.3s ease;
    transition: height 0.3s ease;
  }
`;

export const List = styled.li`
  position: relative;
  display: block;
  float: left;
  margin: 0 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &.active {
    a {
      -webkit-transform: scale3d(1.3, 1.3, 1.3);
      transform: scale3d(1.3, 1.3, 1.3);

      &:after {
        height: 100%;
      }
    }
  }
`;

export const Item = styled.ul`
  // position: relative;
  display: block;
  margin: 0;
  padding: 0;
  // cursor: default;
`;

export const Cell = styled.div`
  vertical-align: middle;
  margin: auto;
  text-align: center;
`;

export const Table = styled.div`
  display: flex;
  position: relative;
  top: -40px;
  background: red; 
`;
