import React from "react";
import {
  HeaderCountryDropdown,
  DropdownHeaderSpan,
  DropdownHeaderText,
  DropdownHeaderDiv,
} from "./flag.style";
// import flags from './flags.json'

const Flag = () => {
  return (
    <HeaderCountryDropdown>
      <DropdownHeaderSpan>Доставка в </DropdownHeaderSpan>
      <DropdownHeaderDiv>
        <img
          src="https://flagcdn.com/ua.svg"
          width="16"
          alt="South Africa"
        ></img>
        <DropdownHeaderText>Ukraine</DropdownHeaderText>
      </DropdownHeaderDiv>

      <DropdownHeaderSpan>Язык сайта</DropdownHeaderSpan>
      <DropdownHeaderDiv>
        <img
          src="https://flagcdn.com/ua.svg"
          width="16"
          alt="South Africa"
        ></img>{" "}
        <DropdownHeaderText>Ukraine</DropdownHeaderText>
      </DropdownHeaderDiv>
    </HeaderCountryDropdown>
  );
};

export default Flag;
