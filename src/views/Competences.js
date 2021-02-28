import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, NavLink } from "react-router-dom";
import {getCompetence} from "../store/http/competenceAxios";

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
} from "react-bootstrap";


function Competences() {
  const competences = useSelector(state => state.competenceReducer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    let suivi_apprenat_admin_token = localStorage.getItem("suivi_apprenat_admin_token");
    dispatch(getCompetence("GET_COMPETENCE", suivi_apprenat_admin_token));
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
                    <div>Liste des compétences</div>
                    <div>
                      <Button variant="light" className="mx-1">
                        <NavLink
                          to="/admin/competence/add"
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className="fas fa-plus"></i>
                        </NavLink>
                      </Button>
                    </div>
                  </div>
                </Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
              <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOM</th>
            </tr>
          </thead>
          <tbody>
            {
              competences.map((item, index)=>(
                <tr key={item.value}>
                <th scope="row">{index+1}</th>
                <td>{item.label}</td>
              </tr>    
              ))
            }
            
          </tbody>
        </table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Competences;