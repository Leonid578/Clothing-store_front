import {
//   FooterLogo,
  LogInContainer,
//   FooterLi,
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
  ItemLii
} from "./FooterItem.style";

import facebook from "../../images/svg/facebook.svg";
import youtube from "../../images/svg/youtube.svg";

const FooterItem = () => {
  return (
    <>
      <LogInContainer>
        {/* <FooterLogo>LOGO</FooterLogo> */}

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
          <FooterTitle>Есть вопросы?</FooterTitle>
          <FooterButton>НАПИСАТЬ НАМ</FooterButton>
          <FooterLiImg>
            <FooterLink>
              <FooterImg src={facebook} alt="facebook" />
            </FooterLink>
            <FooterLink>
              <FooterImg src={youtube} alt="youtube" />
            </FooterLink>
          </FooterLiImg>
        </ItemLii>
      </LogInContainer>
      <Separator></Separator>
      <BottomFooter>
        <BottomFooterText>
          © 2022 Назввание.com All Rights Reserved
        </BottomFooterText>
      </BottomFooter>
    </>
  );
};

export default FooterItem;
