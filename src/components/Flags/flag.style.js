import styled from "styled-components";

export const HeaderCountryDropdown = styled.div`
  position: absolute;
  top: 32px;
  z-index: 999;
  right: 10%;
  padding: 24px 16px;
  width: 281px;
  box-shadow: -4px 0 20px 0 rgb(65 61 88 / 10%);
  background-color: #ffffff;
  animation-duration: 0.1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const DropdownHeaderSpan = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: #36424c;
`;

export const DropdownHeaderText = styled.span`
  margin: 0 0 0 8px;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: #36424c;
`;

export const DropdownHeaderSearch = styled.input`
  border: 1px solid rgba(240, 240, 240, 1) !important;
  background: rgba(250, 250, 250, 1);
  z-index: 9999 !important;
  padding: 0 16px;
  height: 40px;
  color: rgba(37, 28, 29, 0.5);
`;

export const DropdownHeaderDiv = styled.span`
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  box-sizing: border-box;
  height: auto;
  align-items: center;
  height: 100%;
 
`;

export const SingleSection = styled.span`
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  border-radius: 0;
  border: 1px solid rgba(240, 240, 240, 1);
  height: 40px;
  width: 280px;
  margin-top: 8px;
  color: #444;
  padding-left: 14px !important;
  padding-right: 28px !important;
  justify-content: space-between;
  position: relative;
`;

export const I = styled.b`
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
`;

export const ArrowSelection = styled.span`
  width: 24px;
  height: 24px;
  top: 8px;
  right: 8px;
  position: absolute;
`;

export const RowLine = styled.div`
  // width: 277px;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
  box-sizing: border-box;
  height: auto;
  align-items: center;
`;
