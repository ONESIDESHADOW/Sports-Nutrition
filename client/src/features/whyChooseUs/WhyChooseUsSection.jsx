import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import WhyGrid from "./components/WhyGrid";
import { whyChooseUs } from "./data/whyChooseUs";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          title="Why Choose Us"
          subtitle="Premium supplements backed by quality, trust, and expert support."
        />

        <div className="mt-16">
          <WhyGrid data={whyChooseUs} />
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;