import OfferCard from "./OfferCard";

const OfferGrid = ({ offers }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
};

export default OfferGrid;