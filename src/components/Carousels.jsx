import { Carousel, Image } from "react-bootstrap";
import "./Carousels.css";

import PropTypes from "prop-types";

const Carousels = ({ itens = [] }) => {
  return (
    <Carousel>
      {itens.map((item, i) => {
        return (
          <Carousel.Item key={i}>
            <Image fluid src={item.img} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

Carousels.propTypes = {
  itens: PropTypes.array,
};

export default Carousels;
