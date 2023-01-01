import { Footerr, Container } from "./Footer.styled";
// import FooterMenu from "./FooterMenu";
import FooterItem from './FooterItem'

const Footer = () => {
  return (
    <>
      <Footerr>
        <Container>
          {/* <FooterMenu /> */}
          <FooterItem />
        </Container>
      </Footerr>
    </>
  );
};

export default Footer;
