import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

import "./PetsTable.css";

const PetsTable = ({ pets = [] }) => {
  return (
    <Table striped bordered hover className="pets-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Especie</th>
          <th>Animal</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet, i) => {
          return (
            <tr key={i}>
              <td>{pet.Nome}</td>
              <td>{pet.Especie}</td>
              <td>{pet.Animal}</td>
              <td>{pet.Idade}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

PetsTable.propTypes = {
  pets: PropTypes.array,
};

export default PetsTable;
