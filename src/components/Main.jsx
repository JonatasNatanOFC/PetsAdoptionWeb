import itens from "../datasets/Carousels";
import pets from "../datasets/Pets";
import servicos from "../datasets/Servicos";
import Cards from "./Cards";
import Carousels from "./Carousels";
import PetsTable from "./PetsTable";

const Main = () => {
  return (
    <main>
      <Carousels itens={itens} />
      <Cards servicos={servicos} />
      <PetsTable pets={pets} />
    </main>
  );
};

export default Main;
