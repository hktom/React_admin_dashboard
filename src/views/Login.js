import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import NotificationAlert from "react-notification-alert";
import {setlogin} from "../store/http/userAxios";

function Login() {
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
  const token = useSelector((state) => state.userReducer.token);
  const dispatch = useDispatch();
  let history = useHistory();
  const [validated, setValidated] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  let [userInfo, setUserInfo] = useState({ email: "", pwd: "" });

  const sendForm = (e) => {
    e.preventDefault();
    setFormStatus(true);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      setFormStatus(false);
      return;
    }

    dispatch(setlogin("LOGIN_USER", userInfo)).then(()=>{
      console.log(token);
    });
    // notify("tr", "success", "Données enregistrées");
    setFormStatus(false);
  };

  useEffect(() => {
    let token = localStorage.getItem("suivi_apprenat_admin_token");
    console.log("suivi_apprenat_admin_token", token);
    if (token) {
      dispatch({ type: "SET_TOKEN", payload: token });
      history.push("/apprenant/dashboard");
    }
  }, [dispatch]);

  return (
    <div className="login-form-back">
      <NotificationAlert ref={notificationAlertRef} />
      <div className="login-form">
        <div className="login-form-container">
          <div className="container">
            <Form
              className="form-signin"
              onSubmit={sendForm}
              noValidate
              validated={validated}
            >
              <Row>
                <Col className="padding-0" md="12">
                  <Form.Group>
                    <label>Email</label>
                    <Form.Control
                      disabled={formStatus}
                      required
                      onChange={(e) => setUserInfo({ email: e.target.value })}
                      type="email"
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Email non valide
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col className="px-0" md="12">
                  <Form.Group>
                    <label>Mot de passe</label>
                    <Form.Control
                      disabled={formStatus}
                      maxLength="8"
                      required
                      onChange={(e) => setUserInfo({ pwd: e.target.value })}
                      type="password"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <div className="div-button">
                <Button
                  disabled={formStatus}
                  className="btn-fill"
                  type="submit"
                  variant="info"
                >
                  Se connecter
                </Button>
              </div>

              <div className="clearfix"></div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
