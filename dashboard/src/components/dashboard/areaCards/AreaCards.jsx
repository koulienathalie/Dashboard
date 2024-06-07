import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Todays Size",
          value: "101.9 MB",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={35}
        cardInfo={{
          title: "Average Size",
          value: "16.2 MB",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={15}
        cardInfo={{
          title: "Largest Download",
          value: "17.4 KB @ 01:51 PM",
          text: "From algolia.net",
        }}
      />
    </section>
  );
};

export default AreaCards;