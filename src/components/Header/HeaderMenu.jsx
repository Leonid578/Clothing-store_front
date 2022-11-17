import {
  LogInContainer,
  HeaderLogo,
  Menu_ul,
  Menu_li,
  Menu_a,
} from "./Header.styled";

const HeaderMenu = () => {
  return (
    <LogInContainer>
      <HeaderLogo>LOGO</HeaderLogo>

      <Menu_ul>
        <Menu_li>
          <Menu_a>ABCD1</Menu_a>
        </Menu_li>
        <Menu_li>
          <Menu_a>ABCD2</Menu_a>
        </Menu_li>
        <Menu_li>
          <Menu_a>ABCD3</Menu_a>
        </Menu_li>
        <Menu_li>
          <Menu_a>ABCD4</Menu_a>
        </Menu_li>
        <Menu_li>
          <Menu_a>ABCD5</Menu_a>
        </Menu_li>
        <Menu_li>
          <Menu_a>ABCD6</Menu_a>
        </Menu_li>
        <Menu_li>
          <Menu_a>ABCD7</Menu_a>
        </Menu_li>
        <Menu_li>
          <Menu_a>ABCD</Menu_a>
        </Menu_li>
      </Menu_ul>
    </LogInContainer>
  );
};

export default HeaderMenu;
