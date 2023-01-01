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
  // display: none;
  // @media screen (min-width: 768px) {
  //   width: 50%;
  //   animation-name: fadeIn;
  // }

  background: white;
  position: relative;
  text-align: center;
  width: 50%;
`;

export const ElementorBackgroundOverlay = styled.div`
  padding: 10% 15%;
`;

export const ElementorHeadingTitleLeft = styled.h2`
  color: #7a7a7a;
  font-family: "Poiret One", Sans-serif;
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 388px;
`;

export const ElementorHeadingTitleRight = styled.h2`
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
