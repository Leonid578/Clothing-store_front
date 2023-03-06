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
import {useTranslation} from 'react-i18next'
import "../utils/i18next"
import facebook from "../../images/svg/facebook.svg";
import youtube from "../../images/svg/youtube.svg";
import vk from "../../images/svg/vk.svg";

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const FooterItem = () => {
  const {t} = useTranslation()

  return (
    <>
      <LogInContainer>
        <ItemLi>
          <List>
            <FooterLink>{t("footer.links_about")}</FooterLink>
          </List>
          <List>
            <FooterLink>{t("footer.linls_Prace")}</FooterLink>
          </List>
          <List>
            <FooterLink>{t("footer.links_Foto")}</FooterLink>
          </List>
          <List>
            <FooterLink>{t("footer.links_documentation")}</FooterLink>
          </List>
        </ItemLi>

        <ItemLii>
          <Div>
            <FooterTitle>{t("footer.question")}</FooterTitle>
            <FooterButton>{t("footer.write")}</FooterButton>
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
          {t("links.Privacy")}
        </StyledLink>
        <BottomFooterText>
          {t("links.footer_data",{dateNow: new Date().getFullYear()})}
        </BottomFooterText>
      </BottomFooter>
    </>
  );
};

export default FooterItem;
