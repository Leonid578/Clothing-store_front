import {
  LogInContainer,
  HeaderLogo,
  MenuUl,
  MenuLi,
  MenuA,
  Button,
  Input,
  Search,
} from "./Header.styled";

import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";

const HeaderMenu = () => {
  return (
    <LogInContainer>
      <HeaderLogo>LOGO</HeaderLogo>

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
        <MenuLi>
          <MenuA>ABCD5</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>ABCD6</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>ABCD7</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>ABCD</MenuA>
        </MenuLi>
      </MenuUl> 

      <form>
        <Search>
          <Input type="text" placeholder="Поиск..." id="searchInput" />
          <Button type="submit"><Magnifier/></Button>
        </Search>
      </form>
    </LogInContainer>
  );
};

export default HeaderMenu;
