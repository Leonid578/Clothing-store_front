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
  user-select: none;
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
  width: 230px;
`;

export const I = styled.b`
  border-color: #413d58 transparent transparent transparent;
  border-width: 5px 4px 0 4px;
  border-style: solid;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  left: 50%;
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

  &[aria-expanded="true"] ${I} {
    border-width: 0 4px 5px 4px;
    border-color: transparent transparent #413d58 !important;
  }

  &[aria-expanded="false"] ${I} {
    border-width: 5px 4px 0 4px;
  }
`;

export const ArrowSelection = styled.span`
  width: 24px;
  height: 24px;
  right: 8px;
  position: absolute;
`;

export const RowLine = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
  box-sizing: border-box;
  height: auto;
  align-items: center;
`;

export const Ul = styled.ul`
  display: none;
  max-height: 200px;
  border: 1px solid rgba(240, 240, 240, 1);
  width: 278px;
  right: 0%;
  position: absolute;
`;

export const Li = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 0;
  display: block;
  height: 40px;
  color: #444;
  padding-left: 14px !important;
  padding-right: 28px !important;
  justify-content: space-between;

  &:hover {
    background-color: #fa5f55 !important;
    color: #fff !important;
  }
`;

export const Div = styled.div`
  position: relative;
`;
