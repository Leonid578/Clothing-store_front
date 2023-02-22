// import { useState, useEffect } from "react";
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

  const prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-32px";
    }
    // eslint-disable-next-line no-const-assign
    prevScrollpos = currentScrollPos;
  };

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
    // <Container>
    //     <TopHeader className="header">
    //       <span className="row_line">
    //         <Tell>+380686082451</Tell>
    //         <span className="delimiter">|</span>
    //       </span>
    //       <span className="row_line">
    //         <SwitchLanguage>сменить язык</SwitchLanguage>
    //         <SwitchTheme>сменить тему</SwitchTheme>
    //       </span>
    //     </TopHeader>

    //   <LogInContainer>
    //     <StyledLinkLogo to="/" onClick={scrollTop}>
    //       LOGO
    //     </StyledLinkLogo>
    //     <StyledButton to="/buy" onClick={scrollTop}>
    //       <Magnifier />
    //     </StyledButton>
    //     <Flags />
    //   </LogInContainer>
    // </Container>

    <>
      <div id="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>

      <div
      //  style="padding:15px 15px 2500px;font-size:30px;margin-top:30px;"
       >
        <p>
          <b>
            This example demonstrates how to hide a navbar when the user starts
            to scroll the page.
          </b>
        </p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll up to show the navbar.</p>
        <p>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};
export default HeaderMenu;
