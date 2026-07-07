import Hero from "./Components/Hero/Hero";
import GoalSection from "./components/GoalSection/GoalSection";
import ProductSection from "../products/ProductSection";
import CategorySection from "../categories/CategorySection";
import WhyChooseUsSection from "../whyChooseUs/WhyChooseUsSection";
import OfferSection from "../offers/OfferSection";
import BestSellerSection from "../bestSeller/BestSellerSection";
import TestimonialSection from "../testimonials/TestimonialSection";
import InstagramSection from "../instagram/InstagramSection";
import NewsletterSection from "../newsletter/NewsletterSection";

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
      <TestimonialSection />
      <InstagramSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
