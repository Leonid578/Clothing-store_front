import {
  LogInContainer,
  HeaderLogo,
  Button,
  Input,
  Search,
  DropDiv,
  DropDown,
  DropBtn,
  DropMenu,
  MenuLinks,
} from "./Header.styled";

import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";

const HeaderMenu = () => {
  return (
    <LogInContainer>
      <HeaderLogo>LOGO</HeaderLogo>
        <DropDiv>
            <DropDown>
                <DropBtn>Drop Menu 1</DropBtn>
                <DropMenu>
                    <MenuLinks>Link 1</MenuLinks>
                    <MenuLinks>Link 2</MenuLinks>
                    <MenuLinks>Link 3</MenuLinks>
                </DropMenu>
            </DropDown>
            <DropDown>
                <DropBtn>Drop Menu 2</DropBtn>
                <DropMenu>
                    <MenuLinks>Link 1</MenuLinks>
                    <MenuLinks>Link 2</MenuLinks>
                    <MenuLinks>Link 3</MenuLinks>
                </DropMenu>
            </DropDown>
            <DropDown>
                <DropBtn>Drop Menu 3</DropBtn>
                <DropMenu>
                    <MenuLinks>Link 1</MenuLinks>
                    <MenuLinks>Link 2</MenuLinks>
                    <MenuLinks>Link 3</MenuLinks>
                </DropMenu>
            </DropDown>
            <DropDown>
                <DropBtn>Drop Menu 4</DropBtn>
                <DropMenu>
                    <MenuLinks>Link 1</MenuLinks>
                    <MenuLinks>Link 2</MenuLinks>
                    <MenuLinks>Link 3</MenuLinks>
                </DropMenu>
            </DropDown>
        </DropDiv>
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
