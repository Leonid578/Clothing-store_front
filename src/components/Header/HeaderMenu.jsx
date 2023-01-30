import * as React from "react";
import {
  LogInContainer,
  StyledLinkLogo,
  StyledButton,
} from "./Header.styled";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";

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

const scrollTop = () => {
  window.scrollTo(0, 0);
};
const HeaderMenu = () => {
  /* <ButtonSun
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
        </ButtonSun> */
  /* <form>
            <Searchh>
              <Input type="text" placeholder="Поиск..." id="searchInput" className="search__img" onChange={(event) => setValue(event.target.value)}/>
              <Button type="submit">
                <Magnifier />
              </Button>
            </Searchh>
          </form> */
  return (
    <LogInContainer>
      <StyledLinkLogo to="/" onClick={scrollTop}>
        LOGO
      </StyledLinkLogo>
      <StyledButton to="/buy" onClick={scrollTop}>
        <Magnifier />
      </StyledButton>
    </LogInContainer>
  );
};
export default HeaderMenu;




