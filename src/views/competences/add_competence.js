import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCompetence } from "../../store/http/competenceAxios";
import NotificationAlert from "react-notification-alert";

function AddCompetence() {
  const notificationAlertRef = useRef(null);
  const notify = (place, status, message) => {
    var type = status;
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>{message}</div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const competence_edit = useSelector((state) => state.competenceReducer.edit);

  let [NewCompetence, setNewCompetence] = useState({ nom: "" });

  const handleChange = (e) => {
    setNewCompetence({ nom: e.target.value });
  };

  // Fonction responsable pour l'envoit du formulaire
  const sendForm = (e) => {
    e.preventDefault();
    setFormStatus(true);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      notify("tr", "danger", "Veuillez remplir les champs");
      setFormStatus(false);
      return;
    }

    dispatch(postCompetence("ADD_COMPETENCE", NewCompetence));
    notify("tr", "success", "Données enregistrées");
    setFormStatus(false);

    console.log(NewCompetence);
  };

  useEffect(() => {
    if (Object.keys(competence_edit).length > 0) {
      setNewCompetence({
        nom: competence_edit.nom,
      });
    }
  }, [dispatch]);

  const formField = (labelName, name, type, required) => {
    return (
      <Form.Group>
        <label>{labelName}</label>
        <Form.Control
          disabled={formStatus}
          required={required}
          name={name}
          type={type}
          value={NewCompetence[name]}
          onChange={handleChange}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Veuillez saisir une donnée du type {type}
        </Form.Control.Feedback>
      </Form.Group>
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
                  <h2>
                    {Object.keys(apprenant_edit).length > 0
                      ? "Modifier Apprenant"
                      : "Ajouter Competence"}
                  </h2>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={sendForm} noValidate validated={validated}>
                  <Row>
                    <Col className="pr-1" md="5">
                      {formField("Nom", "nom", "text", true)}
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Enregistrer
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddCompetence;
