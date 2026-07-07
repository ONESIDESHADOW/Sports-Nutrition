import Container from "../ui/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterCategories from "./FooterCategories";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-zinc-950">
      <Container>

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          <FooterBrand />

          <FooterLinks />

          <FooterCategories />

          <FooterContact />

        </div>

        <FooterBottom />

      </Container>
    </footer>
  );
};

export default Footer;