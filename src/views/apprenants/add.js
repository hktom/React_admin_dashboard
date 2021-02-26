import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCompetence } from "../../store/http/competenceAxios";
import { getPromotion } from "../../store/http/promotionAxios";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import ImageUploader from "../../components/imageUploader";

function Add() {
  const notificationAlertRef = useRef(null);
  const notify = (place) => {
    var type = "info";
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Light Bootstrap Dashboard React</b> - a beautiful
            freebie for every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  const competences = useSelector((state) => state.competenceReducer.select);
  const promotions = useSelector((state) => state.promotionReducer.list);
  const dispatch = useDispatch();
  let [formData, setFormData] = useState({});
  let [image, setImage] = useState({});


  const handleChange = (e) => {
    let _temp = {};
    _temp[e.target.name] = e.target.value;
    setFormData({ ...formData, ..._temp });
  };

  const handleCompetenceChange=(e)=>{
    let _temp = {};
    _temp['competences'] = e;
    setFormData({ ...formData, ..._temp });
  }

  const sendForm = (e) => {
    e.preventDefault();
    console.log(formData, image);
    notify("tr");
  };

  useEffect(() => {
    if (competences.length <= 0)
      dispatch(getCompetence("GET_COMPETENCE_SELECT"));
    if (promotions.length <= 0) dispatch(getPromotion("GET_PROMOTION"));
  }, [dispatch]);

  const formField = (labelName, name, type) => {
    return (
      <Form.Group>
        <label>{labelName}</label>
        <Form.Control
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
        ></Form.Control>
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
                <Card.Title as="h4">Ajouter Apprenant</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={sendForm}>
                  <Row>
                    <Col className="pr-1" md="5">
                      {formField("Nom", "nom", "text")}
                    </Col>
                    <Col className="px-1" md="3">
                      {formField("Post-Nom", "post_nom", "text")}
                    </Col>
                    <Col className="pl-1" md="4">
                      {formField("Prenom", "prenom", "text")}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-3" md="6">
                      {formField("Email", "email", "email")}
                    </Col>

                    <Col className="pr-3" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Sexe</label>
                        <Form.Control
                          as="select"
                          name="sex"
                          onChange={handleChange}
                        >
                          <option>M</option>
                          <option>F</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">{formField("Address", "adress", "text")}</Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      {formField("Télephone", "tel", "mobile")}
                    </Col>
                    <Col className="px-1" md="4">
                      {formField("Date de naissance", "date", "date")}
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Niveau d'étude
                        </label>
                        <Form.Control
                          as="select"
                          name="niveau"
                          value={formData.niveau}
                          onChange={handleChange}
                        >
                          <option>D6</option>
                          <option>Graduat</option>
                          <option>Licencié</option>
                          <option>Master</option>
                          <option>Doctora</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Promotions</label>
                        <Form.Control
                          as="select"
                          name="id_promotion_cohorte"
                          value={formData.id_promotion_cohorte}
                          onChange={handleChange}
                        >
                          {promotions.map((item) => (
                            <option key={item.id_promotion_cohorte}>
                              {item.nom_promotion}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Compétences</label>
                        <Select
                          onChange={handleCompetenceChange}
                          options={competences}
                          isMulti
                          name="competences"
                          className="basic-multi-select"
                          //classNamePrefix="select"
                        />
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
          <Col md="4">
            {/* upload images */}
            <ImageUploader setImageUploaded={setImage}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Add;
