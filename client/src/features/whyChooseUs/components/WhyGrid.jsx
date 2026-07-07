import WhyCard from "./WhyCard";

const WhyGrid = ({ data }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <WhyCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default WhyGrid;