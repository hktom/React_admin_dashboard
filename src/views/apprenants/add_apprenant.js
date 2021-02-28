import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCompetence } from "../../store/http/competenceAxios";
import { getPromotion } from "../../store/http/promotionAxios";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";
import ImageUploader from "../../components/imageUploader";
import { postApprenants } from "../../store/http/apprenantAxios";

function AddApprenant() {
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

  const competences = useSelector((state) => state.competenceReducer.select);
  const promotions = useSelector((state) => state.promotionReducer.list);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [formStatus, setFormStatus]=useState(false);
  const apprenant_edit = useSelector((state) => state.apprenantReducer.edit);

  // champs du formulaire apprenant
  let [NewApprenant, setNewApprenant] = useState({
    nom: "",
    post_nom: "",
    prenom: "",
    email: "",
    sex: 0,
    adress: "",
    tel: "",
    date: "",
    niveau: 0,
    id_promotion_cohorte: 0,
    image_name:false,
    competences: [],
  });
  let [image, setImage] = useState({});

  // changement d'un champs dans le formulaire
  const handleChange = (e) => {
    let _temp = {};
    _temp[e.target.name] = e.target.value;
    setNewApprenant({ ...NewApprenant, ..._temp });
  };

  // changement des comptences
  const handleCompetenceChange = (e) => {
    let _temp = {};
    _temp["competences"] = e;
    setNewApprenant({ ...NewApprenant, ..._temp });
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


    // verifier si l image est vide
    if (Object.keys(image).length === 0) {
      NewApprenant["image_name"] = `${NewApprenant.sex}.jpg`;
    } else {
      NewApprenant.image_name=false;
      NewApprenant["image"] = image.data_url;
      NewApprenant["file"] = {
        name: image.file.name,
        size: image.file.size,
        type: image.file.type,
        lastModified: image.file.lastModified,
      };
    }

    if (NewApprenant.id_promotion_cohorte==0) {
      notify("tr", "danger", "Veuillez choisir la promotion");
    } else {
      dispatch(postApprenants("ADD_APPRENANT", NewApprenant));
      notify("tr", "success", "Données enregistrées");
    }
    console.log(NewApprenant);
    setFormStatus(false);
  };

  useEffect(() => {
    if(Object.keys(apprenant_edit).length > 0){
      setNewApprenant({
        nom: apprenant_edit.nom,
        post_nom: apprenant_edit.post_nom,
        prenom: apprenant_edit.prenom,
        email: apprenant_edit.email,
        sex: apprenant_edit.sex,
        adress: apprenant_edit.adress,
        tel: apprenant_edit.tel,
        date: apprenant_edit.date,
        niveau: apprenant_edit.niveau,
        id_promotion_cohorte: apprenant_edit.promotions,
        image:apprenant_edit.photo,
        competences: apprenant_edit.competences,
      });
    }
    if (competences.length <= 0)
      dispatch(getCompetence("GET_COMPETENCE_SELECT"));
    if (promotions.length <= 0) dispatch(getPromotion("GET_PROMOTION"));
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
          value={NewApprenant[name]}
          onChange={handleChange}
        ></Form.Control>
        <Form.Control.Feedback  type="invalid">Veuillez saisir une donnée du type {type}</Form.Control.Feedback>
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
                    {Object.keys(apprenant_edit).length > 0?"Modifier Apprenant":"Ajouter Apprenant"}
                  </h2>
                  </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={sendForm} noValidate validated={validated}>
                  <Row>
                    <Col className="pr-1" md="5">
                      {formField("Nom", "nom", "text", true)}
                    </Col>
                    <Col className="px-1" md="3">
                      {formField("Post-Nom", "post_nom", "text", false)}
                    </Col>
                    <Col className="pl-1" md="4">
                      {formField("Prenom", "prenom", "text", true)}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-3" md="6">
                      {formField("Email", "email", "email", true)}
                    </Col>

                    <Col className="pr-3" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Genre</label>
                        <Form.Control
                        disabled={formStatus}
                          required
                          as="select"
                          name="sex"
                          onChange={handleChange}
                          value={NewApprenant.sex}
                        >
                          <option value={0}> Selectionner Genre</option>
                          <option value="M">M</option>
                          <option value="F">F</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">{formField("Address", "adress", "text")}</Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      {formField("Télephone", "tel", "mobile", false)}
                    </Col>
                    <Col className="px-1" md="4">
                      {formField("Date de naissance", "date", "date", true)}
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Niveau d'étude
                        </label>
                        <Form.Control
                        disabled={formStatus}
                          as="select"
                          name="niveau"
                          value={NewApprenant.niveau}
                          onChange={handleChange}
                          required
                        >
                          <option value={0}>
                            {" "}
                            Selectionner Niveau d'étude
                          </option>
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
                          disabled={formStatus}
                          as="select"
                          name="id_promotion_cohorte"
                          value={NewApprenant.id_promotion_cohorte}
                          onChange={handleChange}
                          required
                        >
                          <option value={0}> Selectionner promotion</option>
                          {promotions.map((item) => (
                            <option
                              value={item.id_promotion_cohorte}
                              key={item.id_promotion_cohorte}
                            >
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
            <ImageUploader setImageUploaded={setImage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddApprenant;