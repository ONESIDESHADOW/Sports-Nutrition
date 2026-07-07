import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import TestimonialSlider from "./components/TestimonialSlider";
import { testimonials } from "./data/testimonials";

const TestimonialSection = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Real feedback from fitness enthusiasts who trust our supplements."
        />

        <div className="mt-16">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;