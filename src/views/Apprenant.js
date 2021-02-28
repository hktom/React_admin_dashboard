import {
  Badge,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Card,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApprenants, deleteApprenants } from "../store/http/apprenantAxios";
import { delete_apprenant_competence } from "../store/http/apprenant_competence";
import { useLocation, NavLink, useHistory } from "react-router-dom";

function Apprenants() {
  const data = useSelector((state) => state.apprenantReducer.list);
  const dispatch = useDispatch();
  const [bulkDelete, setBulkDelete] = useState([]);
  let history = useHistory();

  const show=(item)=>{
    dispatch({type:'SHOW_APPRENANT', payload:item});
    history.push("/apprenant/show");
  }

  const handleCheck = (e) => {
    if (bulkDelete.includes(e.target.name)) {
      setBulkDelete(bulkDelete.filter((item) => item != e.target.name));
    } else {
      setBulkDelete([...bulkDelete, e.target.name]);
    }
  };

  const handleDelete = () => {
    if (bulkDelete.length > 0) {
      dispatch(
        delete_apprenant_competence("DELETE_COMPETENCE", bulkDelete)
      ).then(() => {
        dispatch(deleteApprenants("DELETE_APPRENANT")).then(() => {
          dispatch(getApprenants("GET_APPRENANT"));
        });
      });
    }
  };

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
                          to="/admin/apprenant/add"
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className="fas fa-plus"></i>
                        </NavLink>
                      </Button>
                      {/* <Button variant="light" className="mx-1">
                        <NavLink
                          to="/"
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className="fas fa-pen"></i>
                        </NavLink>
                      </Button> */}

                      <Button
                        variant="danger"
                        className="mx-1 py-5"
                        onClick={handleDelete}
                      >
                        <NavLink
                          to="#"
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className="fas fa-trash"></i>
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
                      <th></th>
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
                      <tr onClick={()=>show(item)} key={item.id_apprenant} style={{ cursor: "pointer" }}>
                        <td>
                          <Form.Check
                            name={item.id_apprenant}
                            onChange={handleCheck}
                            id={`check_${item.id_apprenant}`}
                            type="checkbox"
                          />
                        </td>
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

export default Apprenants;
