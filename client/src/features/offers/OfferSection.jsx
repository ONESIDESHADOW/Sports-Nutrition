import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import OfferGrid from "./components/OfferGrid";
import { offers } from "./data/offers";

const OfferSection = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        <SectionTitle
          title="Exclusive Offers"
          subtitle="Save more with our premium supplement deals."
        />

        <div className="mt-16">
          <OfferGrid offers={offers} />
        </div>
      </Container>
    </section>
  );
};

export default OfferSection;