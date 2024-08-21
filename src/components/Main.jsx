import itens from "../datasets/Carousels";
import servicos from "../datasets/Servicos";
import Cards from "./Cards";
import Carousels from "./Carousels";

const Main = () => {
  return (
    <main>
      <Carousels itens={itens} />
      <Cards servicos={servicos} />
    </main>
  );
};

export default Main;
