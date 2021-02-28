import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <div className="d-flex" style={{ width: "100%" }}>
            <div
              className="py-4"
              style={{ width: "10%", backgroundColor: "#F51E38" }}
            ></div>
            <div
              className="py-4"
              style={{ width: "90%", backgroundColor: "#0F1E36" }}
            ></div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
