import HeroContent from "../HeroContent";
import HeroImage from "../HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
};

export default Hero;