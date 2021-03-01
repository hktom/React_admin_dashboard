import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postPromotion } from "../../store/http/promotionAxios";
import NotificationAlert from "react-notification-alert";

function AddPromotion() {
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
  const Promotion_edit = useSelector((state) => state.promotionReducer.edit);

  let [NewPromotion, setNewPromotion] = useState({ nom_promotion: "", annee_promotion: ""});

  const handleChange = (e) => {
    let _temp={};
    _temp[e.target.name]=e.target.value;
    setNewPromotion({...NewPromotion, ..._temp});
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

    let suivi_apprenat_admin_token = localStorage.getItem("suivi_apprenat_admin_token");

    dispatch(postPromotion("ADD_Promotion", NewPromotion, suivi_apprenat_admin_token));
    notify("tr", "success", "Données enregistrées");
    setFormStatus(false);

    console.log(NewPromotion);
  };

  useEffect(() => {
    if (Object.keys(Promotion_edit).length > 0) {
      setNewPromotion({
        nom: Promotion_edit.nom,
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
          value={NewPromotion[name]}
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
                    {Object.keys(Promotion_edit).length > 0
                      ? "Modifier Apprenant"
                      : "Ajouter Promotion"}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={sendForm} noValidate validated={validated}>
                  <Row>
                    <Col className="pr-1" md="5">
                      {formField("Nom", "nom_promotion", "text", true)}
                    </Col>
                    
                    <Col className="pr-3" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Année</label>
                        <Form.Control
                        disabled={formStatus}
                          required
                          as="select"
                          name="annee_promotion"
                          onChange={handleChange}
                          value={NewPromotion.annee}
                        >
                          <option value={0}> Selectionner Année</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                          <option>2029</option>
                          <option>2030</option>
                        </Form.Control>
                      </Form.Group>
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

export default AddPromotion;
