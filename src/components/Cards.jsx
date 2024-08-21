import PropTypes from "prop-types";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./Cards.css";
const Cards = ({ servicos = [] }) => {
  return (
    <Row className="p-2 justify-content-center d-flex">
      {servicos.map((servico, i) => {
        return (
          <Col
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center mb-4"
          >
            <Card>
              <Card.Img variant="top" src={servico.img} />
              <Card.Body>
                <Card.Title>{servico.title}</Card.Title>
                <Card.Text>{servico.subtitle}</Card.Text>
                <Button variant="success">{servico.btn}</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
Cards.propTypes = {
  servicos: PropTypes.array,
};

export default Cards;
