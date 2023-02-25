import React from "react";
import { useState } from "react";
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
  const [resultCheck, setResultCheck] = useState(false);
  // const showButton = document.querySelector(".pop-up__open");
  // showButton.setAttribute("aria-expanded", false);

  // showButton.addEventListener("click", () => {
  //   const ariaExpanded = showButton.getAttribute("aria-expanded");
  //   if (ariaExpanded === "true") {
  //     showButton.setAttribute("aria-expanded", false);
  //   } else {
  //     showButton.setAttribute("aria-expanded", true);
  //   }
  // });

  const handleClick = (event) => {
    // event.currentTarget.setAttribute("aria-expanded", false);
    console.log(event.currentTarget.getAttribute("aria-expanded"));

    const ariaExpanded = event.currentTarget.getAttribute("aria-expanded");
    if (ariaExpanded === "true") {
      event.currentTarget.setAttribute("aria-expanded", false);
      setResultCheck(false);
    } else {
      event.currentTarget.setAttribute("aria-expanded", true);
      setResultCheck(true);
    }
  };

  return (
    flagActive && (
      <HeaderCountryDropdown>
        <DropdownHeaderSpan>Язык сайта</DropdownHeaderSpan>
        <SingleSection onClick={handleClick}>
          <DropdownHeaderDiv>
            <RowLine>
              <img
                src="https://flagcdn.com/ru.svg"
                width="18"
                alt="South Africa"
              ></img>
              <DropdownHeaderText>Russian</DropdownHeaderText>
            </RowLine>
            <ArrowSelection 
            // resultCheck = true ? aria-expanded="false" : aria-expanded="true"
             >
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
