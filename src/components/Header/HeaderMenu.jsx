import { useState, useContext, useEffect } from "react";
import CartContext from "../../CartContext";
import {
  LogInContainer,
  StyledButton,
  Container,
  TopHeader,
  SwitchTheme,
  Tell,
  I,
  SwitchThemeText,
  CloseModal,
  StyledLink1,
  StyledLink2,
  StyledLink3,
  StyledLink4,
  StyledLink5,
  DivLinks,
  MenuCatalog,
  MenuImg,
  MenuText,
} from "./Header.styled";

import { RowLine } from "../Flags/flag.style";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import Flag from "../Flags/flag";
import "./Header.style.css";
import { useTranslation } from "react-i18next";
import "../utils/i18next";

// const [active2, setActive2] = useState(false);
// const [active, setActive] = useState(true);
// const { isDark, setIsDark } = useTheme();
// const handleMouseEnter = () => {
//   setActive(false);
// };
// const handleMouseLeave = () => {
//   setActive(true);
// };
// const change = () => {
//   setActive2(!active2);
// };

const HeaderMenu = () => {
  const { items } = useContext(CartContext);

  const [flagActive, setFlagActive] = useState(false);
  const flagChange = () => {
    setFlagActive(!flagActive);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const handleNameChange = (name) => {
    setFlagActive(name);
  };
  const { t } = useTranslation();

  useEffect(() => {
    let lastScroll = 0;
    const defaultOffset = 200;
    const header = document.querySelector(".header");
    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains("hide");
    window.addEventListener("scroll", () => {
      if (
        scrollPosition() > lastScroll &&
        !containHide() &&
        scrollPosition() > defaultOffset
      ) {
        // console.log("scroll down");
        header.classList.add("hide");
      } else if (scrollPosition() < lastScroll && containHide()) {
        // console.log("scroll up");
        header.classList.remove("hide");
      }

      lastScroll = scrollPosition();
    });
  });

  // <ButtonSun
  //         onMouseEnter={handleMouseEnter}
  //         onMouseLeave={handleMouseLeave}
  //         onClick={change}
  //       >
  //         {!active2 ? (
  //           active ? (
  //             <img width={20} height={20} src={Sun1} alt="sun" />
  //           ) : (
  //             <img
  //               width={20}
  //               height={20}
  //               src={Sun2}
  //               alt="sun"
  //               onClick={() => setIsDark(!isDark)}
  //             />
  //           )
  //         ) : (
  //           <img
  //             width={22}
  //             height={22}
  //             src={Moon}
  //             alt="sun"
  //             onClick={() => setIsDark(!isDark)}
  //           />
  //         )}
  //       </ButtonSun>
  //  <form>
  //           <Searchh>
  //             <Input type="text" placeholder="Поиск..." id="searchInput" className="search__img" onChange={(event) => setValue(event.target.value)}/>
  //             <Button type="submit">
  //               <Magnifier />
  //             </Button>
  //           </Searchh>
  //         </form>

  return (
    <Container>
      {flagActive && <CloseModal onClick={flagChange} />}

      <TopHeader className="header">
        <span className="row_line">
          <Tell>+380686082451</Tell>
          <span className="delimiter">|</span>
        </span>
        <SwitchTheme className="row_line" onClick={flagChange}>
          {/* <SwitchLanguage>сменить тему</SwitchLanguage> */}
          {items.map((language, index) => {
            return (
              <RowLine key={index}>
                <img
                  src={language.src}
                  alt={language.language}
                  width="18"
                ></img>
                <SwitchThemeText>{language.language}</SwitchThemeText>
              </RowLine>
            );
          })}
          <I />
        </SwitchTheme>
      </TopHeader>

      <LogInContainer>
        <MenuCatalog>
          <MenuImg />
          <MenuText>Каталог</MenuText>
        </MenuCatalog>
        <DivLinks>
          <StyledLink1 to="/health" onClick={scrollTop}>
            {t("header.links_product1")}
          </StyledLink1>
          <StyledLink2 to="/active-component" onClick={scrollTop}>
            {t("header.links_product2")}
          </StyledLink2>
          <StyledLink3 to="/programs-and-packs" onClick={scrollTop}>
            {t("header.links_product3")}
          </StyledLink3>
          <StyledLink4 to="/beauty" onClick={scrollTop}>
            {t("header.links_product4")}
          </StyledLink4>
          <StyledLink5 to="/protection" onClick={scrollTop}>
            {t("header.links_product5")}
          </StyledLink5>
        </DivLinks>
        <StyledButton to="/buy" onClick={scrollTop}>
          <Magnifier />
        </StyledButton>
        <Flag flagActive={flagActive} onChange={handleNameChange} />
      </LogInContainer>
    </Container>
  );
};
export default HeaderMenu;
