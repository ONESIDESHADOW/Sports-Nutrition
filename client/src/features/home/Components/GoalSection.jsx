import Container from "../../../components/ui/Container";
import SectionTitle from "../../../components/ui/SectionTitle";

import GoalCard from "./GoalCard";
import { goals } from "./goals";

const GoalSection = () => {
  return (
    <section className="bg-black py-24">

      <Container>

        <SectionTitle
          title="Choose Your Goal"
          subtitle="Find the perfect supplements based on your fitness journey."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default GoalSection;