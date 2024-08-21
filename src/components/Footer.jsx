import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

import "../components/Footer.css";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="success"
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Nossas Redes Sociais:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="light" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="light" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="light" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="light" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="light" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="light" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="light" icon="gem" className="me-3" />
                NT Tech
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="light" icon="home" className="me-2" />
                Tacima, PB 58240-000, BR
              </p>
              <p>
                <MDBIcon color="light" icon="envelope" className="me-3" />
                jonatas.22ti@gmail.com
              </p>
              <p>
                <MDBIcon color="light" icon="phone" className="me-3" /> + 01 234
                567 88
              </p>
              <p>
                <MDBIcon color="light" icon="print" className="me-3" /> + 01 234
                567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://github.com/JonatasNatanOFC"
          target="_blank"
        >
          Jonatas Natan
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
