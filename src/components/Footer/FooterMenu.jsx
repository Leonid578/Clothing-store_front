import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import {
  FooterLogo,
  LogInContainer,
  FooterItem,
  FooterLi,
  FooterLink,
  FooterTitle,
  FooterButton,
  FooterImg,
  FooterLiImg,
  BottomFooter,
  BottomFooterText,
} from "./Footer.styled";

import facebook from "../../images/svg/facebook.svg";
import youtube from "../../images/svg/youtube.svg";
import vk from "../../images/svg/vk.svg";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const FooterMenu = () => {
  return (
    <LogInContainer>
      <FooterLogo>LOGO</FooterLogo>

      <FooterItem>
        <ul>
          <FooterLi>
            <FooterLink>О нас</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink>Прайс-листы</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink>Фотогалерея</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink>Документы</FooterLink>
          </FooterLi>
        </ul>

        <ul>
          <FooterTitle>Есть вопросы?</FooterTitle>
          <FooterButton>НАПИСАТЬ НАМ</FooterButton>
          <FooterLiImg>
            <FooterLink>
              <FooterImg src={facebook} alt="facebook" />
            </FooterLink>
            <FooterLink>
              <FooterImg src={youtube} alt="youtube" />
            </FooterLink>
            <FooterLink>
              <FooterImg src={vk} alt="vk" />
            </FooterLink>
          </FooterLiImg>
        </ul>
      </FooterItem>
      <BottomFooter>
        <StyledLink to="/privacyPolicy">Политика конфиденциальности</StyledLink>
        <BottomFooterText>
          © 2022 Назввание.com All Rights Reserved
        </BottomFooterText>
      </BottomFooter>
    </LogInContainer>
  );
};

export default FooterMenu;
