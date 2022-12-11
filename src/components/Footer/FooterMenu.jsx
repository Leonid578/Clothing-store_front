import {
  FooterLogo,
  LogInContainer,
  FooterItem,
  FooterLi,
  FooterLink,
} from "./Footer.styled";

const FooterMenu = () => {  
  return (
    <LogInContainer>
      <FooterLogo>LOGO</FooterLogo>

      <FooterItem>
        <FooterLi>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
        </FooterLi>
        <FooterLi>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
        </FooterLi>
        <FooterLi>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
        </FooterLi>
        <FooterLi>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
          <FooterLink>Link</FooterLink>
        </FooterLi>
      </FooterItem>
    </LogInContainer>
  );
};

export default FooterMenu;
