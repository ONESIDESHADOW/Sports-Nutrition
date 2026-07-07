import Hero from "./components/Hero";
import GoalSection from "./components/GoalSection";
import ProductSection from "../products/ProductSection";
import CategorySection from "../categories/CategorySection";
import WhyChooseUsSection from "../whyChooseUs/WhyChooseUsSection";
import OfferSection from "../offers/OfferSection";
import BestSellerSection from "../bestSeller/BestSellerSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <GoalSection />
      <ProductSection />
      <CategorySection />
      <WhyChooseUsSection />
      <OfferSection />
      <BestSellerSection />
    </>
  );
};

export default HomePage;