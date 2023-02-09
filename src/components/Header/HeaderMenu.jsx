// import * as React from "react";
import { useEffect } from "react";
import {
  LogInContainer,
  StyledLinkLogo,
  StyledButton,
  Container,
  SwitchLanguage,
  TopHeader,
  SwitchTheme,
  Tell,
} from "./Header.styled";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import Flags from "../Flags/flag";
import "./Header.style.css";

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
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // header.className = header.className === 'header' ? 'inactive' : 'active';

  let lastScroll = 0;
  const defaultOffset = 200;

  // const header = document.getElementsByClassName("header");

  // useEffect(() => {
  //   const header = document.getElementById("headerr");
  //   header.className.add("hide");
  // }, []);

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  // header.className = header.className === 'header' ? 'hide' : '';

  // console.log(containHide);

  window.addEventListener("scroll", () => {
    if (
      scrollPosition() > lastScroll
      //  && !containHide
      // && scrollPosition() > defaultOffset
    ) {
      // header.className.add("hide");
      console.log("down");
    } else if (
      scrollPosition() < lastScroll
      // && !containHide
    ) {
      // header.className.remove("hide");
      console.log("up");
    }
    lastScroll = scrollPosition();
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
      <TopHeader id="headerr" className="header">
        <span className="row_line">
          <Tell>+380686082451</Tell>
          <span className="delimiter">|</span>
        </span>
        <span className="row_line">
          <SwitchLanguage>сменить язык</SwitchLanguage>
          <SwitchTheme>сменить тему</SwitchTheme>
        </span>
      </TopHeader>
      <LogInContainer>
        <StyledLinkLogo to="/" onClick={scrollTop}>
          LOGO
        </StyledLinkLogo>
        <StyledButton to="/buy" onClick={scrollTop}>
          <Magnifier />
        </StyledButton>
        <Flags />
      </LogInContainer>
    </Container>
  );
};
export default HeaderMenu;
