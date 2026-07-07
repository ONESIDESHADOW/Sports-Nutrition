import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import InstagramGrid from "./components/InstagramGrid";
import { instagramPosts } from "./data/instagram";

const InstagramSection = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          title="Follow Us on Instagram"
          subtitle="See the latest products, gym updates, and customer transformations."
        />

        <div className="mt-16">
          <InstagramGrid posts={instagramPosts} />
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-lime-400 px-8 py-4 font-bold text-black transition hover:bg-lime-300"
          >
            Follow @PremiumSportsNutrition
          </a>
        </div>
      </Container>
    </section>
  );
};

export default InstagramSection;