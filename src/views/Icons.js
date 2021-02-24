import {
  Badge,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApprenants } from "../store/http/apprenantAxios";
import { useLocation, NavLink } from "react-router-dom";

function Icons() {
  const data = useSelector((state) => state.apprenantReducer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length <= 0) dispatch(getApprenants("GET_APPRENANT"));
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">
                  <div className="d-flex justify-content-between">
                    <div>Liste des apprenants</div>
                    <div>
                      <Button variant="light" className="mx-1">
                        <NavLink
                          to='/admin/apprenant/add'
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i class="fas fa-plus"></i>
                        </NavLink>
                      </Button>
                      <Button variant="light" className="mx-1">
                        <NavLink
                          to='/'
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i class="fas fa-pen"></i>
                        </NavLink>
                      </Button>

                      <Button variant="light" className="mx-1">
                        <NavLink
                          to='/'
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i class="fas fa-trash"></i>
                        </NavLink>
                      </Button>
                    </div>
                  </div>
                </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Nom</th>
                      <th className="border-0">Post-nom</th>
                      <th className="border-0">Prenom</th>
                      <th className="border-0">Sexe</th>
                      <th className="border-0">Promotions</th>
                      <th className="border-0">Adresse</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <td>{item.nom_apprenant}</td>
                        <td>{item.postnom_apprenant}</td>
                        <td>{item.prenom_apprenant}</td>
                        <td>{item.sex_apprenant}</td>
                        <td>{item.nom_promotion}</td>
                        <td>{item.adresse_apprenant}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Icons;
