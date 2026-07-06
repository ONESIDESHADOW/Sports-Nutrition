import Badge from "./components/ui/Badge";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Container from "./components/ui/Container";
import SectionTitle from "./components/ui/SectionTitle";

function App() {
  return (
    <div className="min-h-screen bg-black py-20 text-white">
      <Container>
        <SectionTitle
          title="Premium Sports Nutrition"
          subtitle="100% Genuine Supplements"
        />

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <Badge>Best Seller</Badge>

            <h3 className="mt-4 text-2xl font-bold">
              Robinson USA Whey-80
            </h3>

            <p className="mt-2 text-zinc-400">
              Premium Whey Protein
            </p>

            <Button className="mt-6 w-full">
              View Product
            </Button>
          </Card>

          <Card>
            <Badge>New Arrival</Badge>

            <h3 className="mt-4 text-2xl font-bold">
              Rage Pre Workout
            </h3>

            <p className="mt-2 text-zinc-400">
              Energy & Focus Booster
            </p>

            <Button variant="outline" className="mt-6 w-full">
              Explore
            </Button>
          </Card>

          <Card>
            <Badge>Popular</Badge>

            <h3 className="mt-4 text-2xl font-bold">
              Ultra Mass Gainer
            </h3>

            <p className="mt-2 text-zinc-400">
              High-Calorie Mass Builder
            </p>

            <Button variant="secondary" className="mt-6 w-full">
              Learn More
            </Button>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default App;