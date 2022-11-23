import {
    LogInContainer,
    HeaderLogo,
    DropDiv,
    DropDown,
    DropBtn,
    DropMenu,
    MenuLinks,
} from "./HeaderMenuKG.styled";

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
    </LogInContainer>
    );
};

export default HeaderMenu;