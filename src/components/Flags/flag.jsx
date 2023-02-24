import React from "react";
import {
  HeaderCountryDropdown,
  DropdownHeaderSpan,
  DropdownHeaderText,
  DropdownHeaderDiv,
  SingleSection,
  I,
  RowLine,
  ArrowSelection,
} from "./flag.style";

const Flag = ({ flagActive }) => {
const LanguageSelection = () => {
  
}
  
  return (
    flagActive && (
      <HeaderCountryDropdown>
        <DropdownHeaderSpan>Язык сайта</DropdownHeaderSpan>
        <SingleSection>
          <DropdownHeaderDiv>
            <RowLine>
              <img
                src="https://flagcdn.com/ru.svg"
                width="18"
                alt="South Africa"
              ></img>
              <DropdownHeaderText>Russian</DropdownHeaderText>
            </RowLine>
            <ArrowSelection onClick={LanguageSelection}>
              <I />
            </ArrowSelection>
          </DropdownHeaderDiv>
        </SingleSection>

        {/* <DropdownHeaderDiv>
        <img
          src="https://flagcdn.com/ua.svg"
          width="18"
          alt="South Africa"
        ></img>
        <DropdownHeaderText>Ukraine</DropdownHeaderText>
      </DropdownHeaderDiv>
      <DropdownHeaderDiv>
        <img
          src="https://flagcdn.com/us.svg"
          width="18"
          alt="South Africa"
        ></img>
        <DropdownHeaderText>English</DropdownHeaderText>
      </DropdownHeaderDiv> */}
      </HeaderCountryDropdown>
    )
  );
};

export default Flag;
