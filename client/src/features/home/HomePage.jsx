import Hero from "./components/Hero";
import GoalSection from "./components/GoalSection";
import ProductSection from "../products/ProductSection";
import CategorySection from "../categories/CategorySection";
import WhyChooseUsSection from "../whyChooseUs/WhyChooseUsSection";
import OfferSection from "../offers/OfferSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <GoalSection />
      <ProductSection />
      <CategorySection />
      <WhyChooseUsSection />
      <OfferSection />
    </>
  );
};

export default HomePage;