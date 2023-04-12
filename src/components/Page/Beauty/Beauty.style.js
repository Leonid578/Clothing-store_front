import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CatalogBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: 5px;
`;

export const Home = styled(NavLink)`
  padding: 5px;
  display: block;
`;

export const Arrow = styled.i`
  font-size: 15px;
  opacity: 0.3;
  border: solid black;
  border-width: 2px 2px 0 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(45deg);
  margin: 0 0 3px 3px;
`;

export const SelectedTab = styled(NavLink)`
  padding: 5px;
  display: block;
  font-size: 15px;
  cursor: text;
  user-select: none;
  color: #212121;
  &:hover {
    color: #212121;
  }
`;
