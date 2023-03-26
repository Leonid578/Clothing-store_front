import {
  Container,
  HeaderText,
  Text,
  TitleText,
  Link,
} from "./PrivacyPolicy.styled";
import { useTranslation } from "react-i18next";
import "../utils/i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HeaderText>{t("PrivacyPolicy.TitleAbout")}</HeaderText>
      <Text>{t("PrivacyPolicy.About")}</Text>
      <TitleText>{t("PrivacyPolicy.TitlePersonal")}</TitleText>
      <Text>{t("PrivacyPolicy.Personal")}</Text>
      <TitleText>{t("PrivacyPolicy.TitleWhenInformation")}</TitleText>

      <Text>
        <strong>{t("PrivacyPolicy.WhenInformation1")}</strong>{" "}
        <Link href="https://ua.coral.club/">
          {t("PrivacyPolicy.WhenInformation2")}
        </Link>
        {t("PrivacyPolicy.WhenInformation3")}
      </Text>
      <Text>{t("PrivacyPolicy.WhenInformation4")}</Text>
      <Text>{t("PrivacyPolicy.WhenInformation5")}</Text>
      <TitleText>{t("PrivacyPolicy.TitleUseInformation")}</TitleText>
      <Text>{t("PrivacyPolicy.UseInformation")}</Text>
      <TitleText>{t("PrivacyPolicy.TitleWeProtect")}</TitleText>
      <Text>{t("PrivacyPolicy.WeProtect1")}</Text>
      <Text>{t("PrivacyPolicy.WeProtect2")}</Text>
      <Text>{t("PrivacyPolicy.WeProtect3")}</Text>
      <Text>{t("PrivacyPolicy.WeProtect4")}</Text>
      <TitleText>{t("PrivacyPolicy.TitleCookies")}</TitleText>
      <Text>{t("PrivacyPolicy.Cookies1")}</Text>
      <Text>{t("PrivacyPolicy.Cookies2")}</Text>
      <Text>{t("PrivacyPolicy.Cookies3")}</Text>
      <strong>{t("PrivacyPolicy.TitleDisableCookies")}</strong>
      <br />
      <Text>{t("PrivacyPolicy.DisableCookies")}</Text>
      <TitleText>{t("PrivacyPolicy.TitleDisclosure")}</TitleText>
      <Text>{t("PrivacyPolicy.Disclosure")}</Text>
      <TitleText> {t("PrivacyPolicy.TitleGoogle")}</TitleText>
      <Text>{t("PrivacyPolicy.GoogleText1")}</Text>
      <Text>
        {t("PrivacyPolicy.GoogleText2")}
        <Link
          href="https://www.google.com/intl/ru/policies/privacy/"
          rel="noopener"
        >
          {t("PrivacyPolicy.More")}
        </Link>
      </Text>
    </Container>
  );
};

export default PrivacyPolicy;
