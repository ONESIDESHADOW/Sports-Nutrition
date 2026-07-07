import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProductGrid from "./components/ProductGrid";

import { products } from "./data/products";

const ProductSection = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          title="Featured Products"
          subtitle="Premium supplements trusted by fitness enthusiasts."
        />

        <ProductGrid products={products} />
      </Container>
    </section>
  );
};

export default ProductSection;