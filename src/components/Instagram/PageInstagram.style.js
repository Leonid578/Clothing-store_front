import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import foto from "../../images/jpg/img00.jpg";

export const ContainerInstagram = styled.ul`
  display: flex;
  padding: 0;
  background-color: pink;
  text-align: center;
  // align-items: center;

  @media screen and (max-width: 575px) {
    height: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 1023px) {
    height: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1024px) {
    height: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImageInstagram = styled.img`
  width: 180px;
  height: 270px;
  border-radius: 5px;

  background-image: url(${foto});
`;

export const UlInstagram = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
export const LiInstagram = styled.li`
  margin: 100px 12px;
`;
