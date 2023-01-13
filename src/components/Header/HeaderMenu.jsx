import React from "react";
// import { useState } from "react";
import {
  LogInContainer,
  // ContainerSearch,
  StyledLink,
  // StyledButton,
} from "./Header.styled";
import "./Header.style.css";
// import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
// import Sun1 from "../../images/png/Sun.png";
// import Sun2 from "../../images/gif/Sun.gif";
// import Moon from "../../images/png/moon.png";
// import useTheme from "../hooks/useTheme";

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const HeaderMenu = () => {
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

  return (
    <LogInContainer>
      <StyledLink to="/" onClick={scrollTop}>
        LOGO
      </StyledLink>
      {/* <StyledButton to="/buy" onClick={scrollTop}>
        <Magnifier />
      </StyledButton> */}
      {/* <ContainerSearch> */}
      {/* <ButtonSun
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={change}
        >
          {!active2 ? (
            active ? (
              <img width={20} height={20} src={Sun1} alt="sun" />
            ) : (
              <img
                width={20}
                height={20}
                src={Sun2}
                alt="sun"
                onClick={() => setIsDark(!isDark)}
              />
            )
          ) : (
            <img
              width={22}
              height={22}
              src={Moon}
              alt="sun"
              onClick={() => setIsDark(!isDark)}
            />
          )}
        </ButtonSun> */}
      {/* <form>
          <Searchh>
            <Input type="text" placeholder="Поиск..." id="searchInput" className="search__img" onChange={(event) => setValue(event.target.value)}/>
            <Button type="submit">
              <Magnifier />
            </Button>
          </Searchh>
        </form> */}
      {/* </ContainerSearch> */}
    </LogInContainer>
  );
};

export default HeaderMenu;
