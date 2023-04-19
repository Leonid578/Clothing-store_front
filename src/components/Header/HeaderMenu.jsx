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
  MenuCatalog,
  MenuImg,
  MenuText,
  ContainerMenu,
  MobileNavigatorUl,
  MobileNavigatorLi,
  MenuTellCatalog,
  DesktopMenu,
  HealthMenu,
  ProgramMenu,
  ActiveComponentMenu,
  BeautyMenu,
  PurityMenu,
  NameMenyItems,
  ListMenu,
  PopupMenuProduct,
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
  const [activeButton, setActiveButton] = useState(false);
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

  const OnChange = () => {
    setActiveButton(!activeButton);
    scrollTop();
  };

  function changeClass() {
    document.body.classList.toggle('modal-open');
    setActiveButton(!activeButton);
  }
 
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
        <MenuTellCatalog onClick={OnChange}>
          <MenuImg />
        </MenuTellCatalog>
        <MenuCatalog onClick={changeClass}>
          <MenuImg />
          <MenuText>Каталог</MenuText>
        </MenuCatalog>
        <StyledButton to="/buy" onClick={scrollTop}>
          <Magnifier />
        </StyledButton>
        <Flag flagActive={flagActive} onChange={handleNameChange} />
      </LogInContainer>

      {activeButton && (
        <ContainerMenu className="modal-open">
          <DesktopMenu>
            <PopupMenuProduct>
              <NameMenyItems>
                <StyledLink1 to="/health" onClick={OnChange}>
                  {t("header.links_product1")}
                </StyledLink1>
              </NameMenyItems>
              <HealthMenu>
                <ListMenu>Водно-минеральный баланс</ListMenu>
                <ListMenu>Иммунная поддержка</ListMenu>
                <ListMenu>Очищение</ListMenu>
                <ListMenu>Пищеварение</ListMenu>
                <ListMenu>Энергия и работоспособность</ListMenu>
                <ListMenu>Антиоксидантная защита</ListMenu>
                <ListMenu>Активное долголетие</ListMenu>
                <ListMenu>Сердце и сосуды</ListMenu>
                <ListMenu>Память и внимание</ListMenu>
                <ListMenu>Антистресс и сон</ListMenu>
                <ListMenu>Суставы и кости</ListMenu>
                <ListMenu>Зрение</ListMenu>
                <ListMenu>Контроль веса</ListMenu>
                <ListMenu>Кожа, волосы и ногти</ListMenu>
                <ListMenu>Женское здоровье</ListMenu>
                <ListMenu>Мужское здоровье</ListMenu>
                <ListMenu>Детское здоровье</ListMenu>
                <ListMenu>Фитобар </ListMenu>
              </HealthMenu>
            </PopupMenuProduct>
            <PopupMenuProduct>
              <NameMenyItems>
                {" "}
                <StyledLink2 to="/active-component" onClick={OnChange}>
                  {t("header.links_product2")}
                </StyledLink2>
              </NameMenyItems>
              <ActiveComponentMenu>
                <ListMenu>Витамины и витаминоподобные вещества</ListMenu>
                <ListMenu>Минералы</ListMenu>
                <ListMenu>Аминокислоты</ListMenu>
                <ListMenu>ПНЖК и фосфолипиды</ListMenu>
                <ListMenu>Пробиотики и пребиотики</ListMenu>
                <ListMenu>Ферменты</ListMenu>
                <ListMenu>Фитонутриенты</ListMenu>
                <ListMenu>Моносахариды и полисахариды</ListMenu>
              </ActiveComponentMenu>
            </PopupMenuProduct>
            <PopupMenuProduct>
              <NameMenyItems>
                <StyledLink3 to="/programs-and-packs" onClick={OnChange}>
                  {t("header.links_product3")}
                </StyledLink3>
              </NameMenyItems>
              <ProgramMenu>
                <ListMenu>Корал Детокс</ListMenu>
                <ListMenu>Корал Детокс Плюс</ListMenu>
                <ListMenu>Коло-Вада Грин</ListMenu>
                <ListMenu>Коло-Вада Лайт</ListMenu>
                <ListMenu>Программа 2 Коло-Вада Плюс</ListMenu>
                <ListMenu>ЦПЗК</ListMenu>
                <ListMenu>Гидрамакс</ListMenu>
                <ListMenu>Парашилд</ListMenu>
                <ListMenu>Парашилд Плюс</ListMenu>
                <ListMenu>Рикавер</ListMenu>
                <ListMenu>Нутрипэк</ListMenu>
                <ListMenu>Иммунити Пэк</ListMenu>
                <ListMenu>Кардиопэк</ListMenu>
                <ListMenu>Ментал Форс</ListMenu>
                <ListMenu>Здоровый старт</ListMenu>
                <ListMenu>Упаковка жизни</ListMenu>
              </ProgramMenu>
            </PopupMenuProduct>
            <PopupMenuProduct>
              <NameMenyItems>
                <StyledLink4 to="/beauty" onClick={OnChange}>
                  {t("header.links_product4")}
                </StyledLink4>
              </NameMenyItems>
              <BeautyMenu>
                <ListMenu>Подарочные наборы</ListMenu>
                <ListMenu>Уход за лицом</ListMenu>
                <ListMenu>Уход за телом</ListMenu>
                <ListMenu>Уход за волосами</ListMenu>
                <ListMenu>Уход за полостью рта</ListMenu>
                <ListMenu>Специальный уход</ListMenu>
              </BeautyMenu>
            </PopupMenuProduct>
            <PopupMenuProduct>
              <NameMenyItems>
                {" "}
                <StyledLink5 to="/protection" onClick={OnChange}>
                  {t("header.links_product5")}
                </StyledLink5>
              </NameMenyItems>
              <PurityMenu>
                <ListMenu>Средства для уборки</ListMenu>
                <ListMenu>Средства для мытья посуды</ListMenu>
                <ListMenu>Средства для стирки</ListMenu>
              </PurityMenu>
            </PopupMenuProduct>
          </DesktopMenu>

          {/* <!--  ############# МОБИЛЬНОЕ МЕНЮ НАЧАЛО ######### --> */}
          <MobileNavigatorUl>
            <MobileNavigatorLi>
              {" "}
              <StyledLink1 to="/health" onClick={OnChange}>
                {t("header.links_product1")}
              </StyledLink1>
            </MobileNavigatorLi>
            <MobileNavigatorLi>
              {" "}
              <StyledLink2 to="/active-component" onClick={OnChange}>
                {t("header.links_product2")}
              </StyledLink2>
            </MobileNavigatorLi>
            <MobileNavigatorLi>
              {" "}
              <StyledLink3 to="/programs-and-packs" onClick={OnChange}>
                {t("header.links_product3")}
              </StyledLink3>
            </MobileNavigatorLi>
            <MobileNavigatorLi>
              {" "}
              <StyledLink4 to="/beauty" onClick={OnChange}>
                {t("header.links_product4")}
              </StyledLink4>
            </MobileNavigatorLi>
            <MobileNavigatorLi>
              {" "}
              <StyledLink5 to="/protection" onClick={OnChange}>
                {t("header.links_product5")}
              </StyledLink5>
            </MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
            <MobileNavigatorLi></MobileNavigatorLi>
          </MobileNavigatorUl>
          {/* <!--  ############# МОБИЛЬНОЕ МЕНЮ КОНЕЦ ######### --> */}
        </ContainerMenu>
      )}
    </Container>
  );
};
export default HeaderMenu;
