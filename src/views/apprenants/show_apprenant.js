import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function ShowApprenant() {
  const dispatch = useDispatch();
  const apprenant = useSelector((state) => state.apprenantReducer.show);

  const edit = () => {
    dispatch({ type: "EDIT_APPRENANT", payload: apprenant });
    history.push("/apprenant/add");
  };

  const handleDelete = () => {
    dispatch(
      delete_apprenant_competence("DELETE_COMPETENCE", [apprenant.id_apprenant])
    ).then(() => {
      dispatch(deleteApprenants("DELETE_APPRENANT")).then(() => {
        dispatch(getApprenants("GET_APPRENANT"));
        history.push("/apprenant");
      });
    });
  };

  useEffect(() => {
    console.log(apprenant);
  }, []);

  const simpleField = (label, value) => {
    return (
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    );
  };

  const selectField = (label, value) => {
    return (
      <div>
        <h3>{label}</h3>
        <div>
          {value.map((item) => {
            item;
          })}
        </div>
      </div>
    );
  };

  return (
    <div style={{ paddingBottom: 200 }}>
      <NotificationAlert ref={notificationAlertRef} />
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">
                  <div className="d-flex justiy-content-between">
                    <h2>Fiche apprenants</h2>

                    <div>
                      <Button variant="light" className="mx-1" onClick={edit}>
                        <NavLink
                          to="#"
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className="fas fa-pen"></i>
                        </NavLink>
                      </Button>

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
              <Card.Body>
                {simpleField("Nom", apprenant.nom)}
                {simpleField("Post-nom", apprenant.post_nom)}
                {simpleField("Prenom", apprenant.prenom)}
                {simpleField("Sex", apprenant.sex)}
                {simpleField("Email", apprenant.email)}
                {simpleField("Tel", apprenant.tel)}
                {simpleField("Date", apprenant.date)}
                {simpleField("Niveau", apprenant.niveau)}
                {simpleField("Promotion", apprenant.promotion)}
                {selectField("Compétences", apprenant.competences)}
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <img
              src={`http://127.0.0.1:8000/${apprenant.photo_apprenant}`}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShowApprenant;
