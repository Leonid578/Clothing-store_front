import { useState } from "react";
import {
  LogInContainer,
  StyledLinkLogo,
  StyledButton,
  Container,
  SwitchLanguage,
  TopHeader,
  SwitchTheme,
  Tell,
  I,
} from "./Header.styled";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import Flag from "../Flags/flag";
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
  const [flagActive, setFlagActive] = useState("fsfs");
  const flagChange = () => {
    setFlagActive(!flagActive);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // const prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   const currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     console.log("0");
  //     document.getElementById("header").style.top = "0";
  //   } else {
  //     console.log("-32");
  //     document.getElementById("header").style.top = "-32px";
  //   }
  //   // eslint-disable-next-line no-const-assign
  //   prevScrollpos = currentScrollPos;
  // };

  // const [hidenHeder, setHidenHeder] = useState(0);
  // const [hidenHeder2, setHidenHeder2] = useState(true);

  // useEffect(() => {
  //   let lastScroll = 0;
  //   const defaultOffset = 200;

  //   const scrollPosition = () =>
  //     window.pageYOffset || document.documentElement.scrollTop;

  //   window.addEventListener("scroll", () => {
  //     if (scrollPosition() > hidenHeder && scrollPosition() > defaultOffset) {
  //       setHidenHeder2(false);
  //       console.log("down :", hidenHeder);
  //     } else if (scrollPosition() < hidenHeder) {
  //       setHidenHeder2(true);
  //       console.log("up :", hidenHeder);
  //     }
  //     lastScroll = scrollPosition();
  //     setHidenHeder(lastScroll);
  //   });
  // }, [hidenHeder]);

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
      <TopHeader className="header">
        <span className="row_line">
          <Tell>+380686082451</Tell>
          <span className="delimiter">|</span>
        </span>
        <span className="row_line">
          <SwitchLanguage>сменить тему</SwitchLanguage>
          <SwitchTheme>
            сменить язык <I />
          </SwitchTheme>
        </span>
      </TopHeader>

      <LogInContainer>
        <StyledLinkLogo to="/" onClick={scrollTop}>
          LOGO
        </StyledLinkLogo>
        <StyledButton to="/buy" onClick={scrollTop}>
          <Magnifier />
        </StyledButton>
        <Flag flagActive/>
      </LogInContainer>
    </Container>
  );
};
export default HeaderMenu;
