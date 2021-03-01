import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation,  useHistory } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

import routes from "routes.js";

function Header() {
  const dispatch = useDispatch();
  let history = useHistory();
  const token = useSelector((state) => state.userReducer.token);

  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const logout=()=>{
    localStorage.removeItem("suivi_apprenat_admin_token");
    history.push("/admin");
  }

  useEffect(() => {
    if (!token) {
      history.push("/admin");
    }
  }, [dispatch]);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
        
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            
          </Nav>
          <Nav className="ml-auto" navbar>
            
            <Nav.Item onClick={() => logout()}>
              <Nav.Link
                className="m-0"
                href="#pablo"
              >
                <span className="no-icon">Se deconnecter</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
