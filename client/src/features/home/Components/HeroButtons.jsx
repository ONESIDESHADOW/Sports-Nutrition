import Button from "../../../components/ui/Button";

const HeroButtons = () => {
  return (
    <div className="mt-8 flex gap-5">

      <Button size="lg">
        Shop Products
      </Button>

      <Button
        size="lg"
        variant="outline"
      >
        Explore
      </Button>

    </div>
  );
};

export default HeroButtons;