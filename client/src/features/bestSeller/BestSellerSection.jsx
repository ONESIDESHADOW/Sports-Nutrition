import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import { bestSellers } from "./data/bestSeller";
import BestSellerSlider from "./components/BestSellerSlider";

const BestSellerSection = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>

        <SectionTitle
          title="Best Sellers"
          subtitle="Our most loved premium supplements."
        />

        <div className="mt-16">
          <BestSellerSlider
            products={bestSellers}
          />
        </div>

      </Container>
    </section>
  );
};

export default BestSellerSection;