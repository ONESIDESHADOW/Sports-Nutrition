import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import NewsletterForm from "./components/NewsletterForm";
import ContactCTA from "./components/ContactCTA";

const NewsletterSection = () => {
  return (
    <section className="bg-black py-24">
      <Container>

        <SectionTitle
          title="Stay Updated"
          subtitle="Subscribe for fitness tips, exclusive offers, and new arrivals."
        />

        <NewsletterForm />

        <ContactCTA />

      </Container>
    </section>
  );
};

export default NewsletterSection;