import React from "react";
import { useState, ReactDOM } from "react";
import {
  LogInContainer,
  HeaderLogo,
  MenuUl,
  MenuLi,
  MenuA,
  Button,
  Input,
  Search,
  ButtonSun,
} from "./Header.styled";

import Sun1 from "../../images/png/Sun.png";
import Sun2 from "../../images/gif/Sun.gif";
import Moon from "../../images/png/moon.png";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";

const HeaderMenu = () => {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(false);

  const handleMouseEnter = () => {
    setActive(false);
  };

  const handleMouseLeave = () => {
    setActive(true);
  };

  const change = () => {
    setActive2(!active2);
  };
  return (
    <LogInContainer>
      <HeaderLogo>LOGO</HeaderLogo>

      <ButtonSun
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={change}
      >
        {!active2 ? (
          active ? (
            <img width={20} height={20} src={Sun1} alt="sun" />
          ) : (
            <img width={20} height={20} src={Sun2} alt="sun" />
          )
        ) : (
          <img  width={22} height={22}  src={Moon} alt="sun" />
        )}
      </ButtonSun>

      <MenuUl>
        <MenuLi>
          <MenuA>ABCD1</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>ABCD2</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>ABCD3</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>ABCD4</MenuA>
        </MenuLi>
      </MenuUl>

      <form>
        <Search>
          <Input type="text" placeholder="Поиск..." id="searchInput" />
          <Button type="submit">
            <Magnifier />
          </Button>
        </Search>
      </form>
    </LogInContainer>
  );
};

export default HeaderMenu;
