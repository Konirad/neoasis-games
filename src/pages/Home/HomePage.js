//components
import Hero from "../../components/Hero/Hero.js";
import Testimonials from "../../components/Testimonials/Testimonials.js";
import NewWorlds from "../../components/NewWorlds/NewWorlds.js";
import TestedMechanics from "../../components/TestedMechanics/TestedMechanics.js";
import BestSellers from "../../components/BestSellers/BestSellers.js";

function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <NewWorlds />
      <TestedMechanics />
      <BestSellers />
    </>
  );
}

export default HomePage;
