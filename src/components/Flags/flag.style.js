import styled from "styled-components";

export const HeaderCountryDropdown = styled.div`
  //   visibility: hidden;
  position: absolute;
  top: 32px;
  z-index: 999991;
  right: 0;
  padding: 24px 16px;
  width: 311px;
  box-shadow: -4px 0 20px 0 rgb(65 61 88 / 10%);
  background-color: #ffffff;
  animation-duration: 0.1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const DropdownHeaderSpan = styled.span`
  display: block;
  font-size: 16px;
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
  z-index: 99999 !important;
  padding: 0 16px;
  height: 40px;
  color: rgba(37, 28, 29, 0.5);
`;

export const DropdownHeaderDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  box-sizing: border-box;
  height: auto;
  align-items: center;
`;
