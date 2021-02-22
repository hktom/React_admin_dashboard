import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <img
          style={{ width: "100%", height: 500, objectFit: "cover" }}
          src={require("../assets/img/dashboard.png").default}
          alt="..."
        />

        <h2 className="py-4 px-5">Liste des apprénants</h2>
        <div className="d-flex justify-content-start px-5">
          {[0, 1, 2, 4, 5, 7].map((item) => (
            <div className="card-apprenant mx-4">
              <img
                src={require("../assets/img/lorem.jpg").default}
                className="img-apprenant"
              />
              <div className="name-apprenant">Josephine Kingombe</div>
              <div className="title-apprenant">Developpeur Web</div>
            </div>
          ))}
        </div>

        <h2 className="py-4 px-5">Top des compétences</h2>
        <div className="px-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOM</th>
              <th scope="col">PERSONNE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>HTML 5</td>
              <td>25</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>CSS 3</td>
              <td>17</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">NODE JS</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
