import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCompetence } from "../../store/http/competenceAxios";
import { getPromotion } from "../../store/http/promotionAxios";
import Select from "react-select";
import ImageUploading from "react-images-uploading";

function Add() {
  const competences = useSelector((state) => state.competenceReducer.select);
  const promotions = useSelector((state) => state.promotionReducer.list);
  const dispatch = useDispatch();
  let [formData, setFormData] = useState({});

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleChange = (e) => {
    let _temp = {};
    _temp[e.target.name] = e.target.value;
    setFormData({ ...formData, ..._temp });
    console.log(formData);
  };

  useEffect(() => {
    if (competences.length <= 0)
      dispatch(getCompetence("GET_COMPETENCE_SELECT"));
    if (promotions.length <= 0) dispatch(getPromotion("GET_PROMOTION"));
  }, [dispatch]);

  return (
    <div style={{ paddingBottom: 200 }}>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Ajouter Apprenant</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Nom</label>
                        <Form.Control
                          name="nom"
                          type="text"
                          value={formData.nom}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Post-nom</label>
                        <Form.Control
                          name="post_nom"
                          value={formData.post_nom}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Prenom</label>
                        <Form.Control
                          name="prenom"
                          value={formData.prenom}
                          type="text"
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          name="email"
                          value={formData.email}
                          type="email"
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">Sexe</label>
                        <Form.Control as="select" name="sex" onChange={handleChange}>
                          <option>M</option>
                          <option>F</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          type="text"
                          name="adress"
                          value={formData.adress}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Télephone</label>
                        <Form.Control
                          type="mobile"
                          name="tel"
                          value={formData.tel}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Date de naissance</label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
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
                          options={competences}
                          isMulti
                          name="competences"
                          className="basic-multi-select"
                          classNamePrefix="select"
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
            <Card className="card-user">
              <Card.Body>
                <ImageUploading
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      {imageList.length <=0?(
                        <div onClick={onImageUpload}>
                        <img src={require("../../assets/img/placeholder.png").default} style={{width:'100%', cursor:'pointer'}}/>
                        </div>
                      ):(<div></div>)}

                  
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <div onClick={() => onImageUpdate(index)}>
                          
                          <img src={image["data_url"]} alt="" style={{width:'100%', cursor:'pointer', objectFit:'cover'}} />
                          <i style={{fontSize:'0.7rem'}}>{image.file.name}</i>
                          </div>

                          <div>
                            <button type="button" className="btn btn-danger mt-2" onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}

                    </div>
                  )}
                </ImageUploading>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Add;
