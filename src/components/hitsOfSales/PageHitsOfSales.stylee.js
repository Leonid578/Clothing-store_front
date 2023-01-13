import styled from "styled-components";

export const HitsContainer = styled.div`
  // width: 1200px;
  // height: 677px;
  // margin: 0 auto;
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // flex-wrap: wrap;
  // align-items: center;
  height: 388px;
  width: 100%;
  display: flex;
`;

export const ElementorColumn = styled.div`
  // @media screen (min-width: 320) {
  //   width: 100%;
  // }
  width: 50%;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

export const ElementorBackgroundOverlay = styled.div`
  // @media screen (min-width: 320) {
  //   display: none;
  // }
  // @media screen (min-width: 768) {
  //   display: block;
  // }
  padding: 10% 15%;
`;

export const ElementorHeadingTitleLeft = styled.h2`
  color: #7a7a7a;
  font-family: "Poiret One", Sans-serif;
  font-weight: 300;
  text-transform: uppercase;

  @media screen and (min-width: 320px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const ElementorDividerSeparator = styled.span`
  border-top: 3px solid #bbb;
  height: 1px;
  text-align: right;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 20px 0;
  display: flex;
`;

export const ElementorTextEditor = styled.p`
  text-align: right;
  color: #aaa;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const ElementorElementPopulate = styled.div`
  min-width: 100%;
  // background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 388px;
`;

export const ElementorHeadingTitleRight = styled.h2`
  color: #fff;
  font-family: "Poiret One", Sans-serif;
  font-weight: 300;
  text-transform: uppercase;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 320px) {
    font-size: 27px;
  }
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 45px;
  }
`;

export const section = styled.div`
  color: #fff;
  font-family: "Poiret One", Sans-serif;
  font-size: 70px;
  font-weight: 300;
  text-transform: uppercase;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
