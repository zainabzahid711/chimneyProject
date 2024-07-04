import React from "react";
import Hero from "../../components/herosection/Hero";
import Creations from "../../components/creations/Creations";
import StorageToWork from "../../components/storageSection/StorageToWork";

function HomePage() {
  return (
    <>
      <Hero />
      <Creations />
      <StorageToWork />
    </>
  );
}

export default HomePage;
