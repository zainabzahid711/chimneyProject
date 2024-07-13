import React from "react";
import Hero from "../../components/herosection/Hero";
import Creations from "../../components/creations/Creations";
import StorageToWork from "../../components/storageSection/StorageToWork";
import EarningGrowth from "../../components/earningsGrowth/EarningGrowth";
import Decentralized from "../../components/decentrilzed/Decentralized";

function HomePage() {
  return (
    <>
      <Hero />
      <Creations />
      <StorageToWork />
      <EarningGrowth />
      <Decentralized />
    </>
  );
}

export default HomePage;
