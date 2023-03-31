import styled from "styled-components";
import foto from "../../images/png/avatar.png";

export const ContainerInstagram = styled.div`
  background-color: antiquewhite;
  padding-bottom: 32px;
  text-align: center;
  margin-top: 60px;
`;

export const ImageInstagram = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
  background-image: url(${foto});
  background-repeat: no-repeat;
  background-size: 100%;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.75s;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const UlInstagram = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 30px auto;
  align-items: center;
  width: calc(17.5vw * 5 + 16px * 5);
  @media screen and (max-width: 767px) {
    margin-top: -30px;
  }
`;

export const LiInstagram = styled.li`
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  background: #f7f6fa;
  width: 17.5vw;
  height: 17.5vw;
  border-radius: 2px;
  margin: 16px 0 0 16px;
  cursor: pointer;
  display: block;

  @media screen and (max-width: 767px) {
    flex-basis: calc(50% - 45px);
    height: 40vw;
    margin-top: 30px;
    margin-left: 30px;
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const DivTitleInstagram = styled.div`
  position: relative;
  text-align: center;
  color: #343840;
`;

export const TitleInstagram = styled.div`
  font-family: Roboto Condensed, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  position: relative;
  top: -22px;
  text-align: center;
  color: #000;

  // @media screen and (max-width: 1023px) {
  //   font-weight: 500;
  //   line-height: 45px;
  // }
`;

export const TagInstagram = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  text-decoration-line: underline;
  position: relative;
  top: -22px;

  @media screen and (max-width: 1023px) {
    font-size: 13px;
    font-weight: 350;
  }
`;
