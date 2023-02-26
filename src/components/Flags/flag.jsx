import React from "react";
import { useState, useEffect } from "react";
import {
  HeaderCountryDropdown,
  DropdownHeaderSpan,
  DropdownHeaderText,
  DropdownHeaderDiv,
  SingleSection,
  I,
  RowLine,
  ArrowSelection,
  Ul,
  Li,
} from "./flag.style";

const Flag = ({ flagActive }) => {
  const [resultCheck, setResultCheck] = useState(false);
  const [language, setLanguage] = useState([
    { src: "ua", language: "Ukraine" },
  ]);

  console.log(language);

  const handleClick = (event) => {
    const ariaExpanded = event.currentTarget.getAttribute("aria-expanded");
    if (ariaExpanded === "true") {
      event.currentTarget.setAttribute("aria-expanded", false);
      setResultCheck(false);
    } else {
      event.currentTarget.setAttribute("aria-expanded", true);
      setResultCheck(true);
    }
  };

  const changeFlagUa = () => {
    setLanguage([
      { src: "https://flagcdn.com/ua.svg" },
      { language: "Ukraine" },
    ]);
  };
  const changeFlagRu = () => {
    setLanguage([
      { src: "https://flagcdn.com/ru.svg" },
      { language: "Russian" },
    ]);
  };
  const changeFlagEs = () => {
    setLanguage([
      { src: "https://flagcdn.com/us.svg" },
      { language: "English" },
    ]);
  };

  return (
    flagActive && (
      <HeaderCountryDropdown>
        <DropdownHeaderSpan>Язык сайта</DropdownHeaderSpan>
        <SingleSection onClick={handleClick}>
          <DropdownHeaderDiv>
            <RowLine>
              <img
                src={"https://flagcdn.com/" + language.src + ".svg"}
                alt={language.language}
                width="18"
              ></img>
              <DropdownHeaderText>{language.language}</DropdownHeaderText>
            </RowLine>
            <ArrowSelection>
              <I />
            </ArrowSelection>
          </DropdownHeaderDiv>
        </SingleSection>
        <Ul style={{ display: resultCheck ? "block" : "none" }}>
          <Li onClick={changeFlagUa}>
            <DropdownHeaderDiv>
              <img
                src="https://flagcdn.com/ua.svg"
                width="18"
                alt="Ukraine"
              ></img>
              <DropdownHeaderText>Ukraine</DropdownHeaderText>
            </DropdownHeaderDiv>
          </Li>
          <Li onClick={changeFlagEs}>
            <DropdownHeaderDiv>
              <img
                src="https://flagcdn.com/us.svg"
                width="18"
                alt="English"
              ></img>
              <DropdownHeaderText>English</DropdownHeaderText>
            </DropdownHeaderDiv>
          </Li>
          <Li onClick={changeFlagRu}>
            <DropdownHeaderDiv>
              <img
                src="https://flagcdn.com/ru.svg"
                width="18"
                alt="Russian"
              ></img>
              <DropdownHeaderText>Russian</DropdownHeaderText>
            </DropdownHeaderDiv>
          </Li>
        </Ul>
      </HeaderCountryDropdown>
    )
  );
};

export default Flag;
