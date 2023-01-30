import {
  LogInContainer,
  FooterLink,
  FooterTitle,
  FooterButton,
  FooterImg,
  FooterLiImg,
  BottomFooter,
  BottomFooterText,
  ItemLi,
  List,
  Separator,
  ItemLii,
  StyledLink,
  Div,
} from "./FooterItem.style";

import facebook from "../../images/svg/facebook.svg";
import youtube from "../../images/svg/youtube.svg";
import vk from "../../images/svg/vk.svg";

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const FooterItem = () => {
  return (
    <>
      <LogInContainer>
        <ItemLi>
          <List>
            <FooterLink>О нас</FooterLink>
          </List>
          <List>
            <FooterLink>Прайс-листы</FooterLink>
          </List>
          <List>
            <FooterLink>Фотогалерея</FooterLink>
          </List>
          <List>
            <FooterLink>Документы</FooterLink>
          </List>
        </ItemLi>

        <ItemLii>
          <Div>
            <FooterTitle>Есть вопросы?</FooterTitle>
            <FooterButton>НАПИСАТЬ НАМ</FooterButton>
          </Div>
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
        </ItemLii>
      </LogInContainer>
      <Separator></Separator>
      <BottomFooter>
        <StyledLink to="/privacyPolicy" onClick={scrollTop}>
          Политика конфиденциальности
        </StyledLink>
        <BottomFooterText>
          © 2022 Назввание.com All Rights Reserved
        </BottomFooterText>
      </BottomFooter>
    </>
  );
};

export default FooterItem;
