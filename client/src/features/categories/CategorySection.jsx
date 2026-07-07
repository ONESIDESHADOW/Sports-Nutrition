import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import CategoryGrid from "./components/CategoryGrid";
import { categories } from "./data/categories";

const CategorySection = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        <SectionTitle
          title="Browse Categories"
          subtitle="Choose from our premium supplement categories."
        />

        <CategoryGrid categories={categories} />
      </Container>
    </section>
  );
};

export default CategorySection;