import {
  LogInContainer,
  HeaderLogo,
  MenuUl,
  MenuLi,
  MenuA,
} from "./Header.styled";

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
    </LogInContainer>
  );
};

export default HeaderMenu;
