import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getApprenants} from "../store/http/apprenantAxios";
import {Container} from "react-bootstrap";
//import ChartistGraph from "react-chartist";
// react-bootstrap components

function Dashboard() {

  const apprenants = useSelector(state => state.apprenantReducer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApprenants('GET_APPRENANT'));
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        <img
          style={{ width: "100%", height: 500, objectFit: "cover" }}
          src={require("../assets/img/dashboard.png").default}
          alt="..."
        />
        
        <h2 className="py-4 px-5">Liste des apprénants</h2>
        <div className="d-flex justify-content-start px-5">
          {apprenants.map((item, id) => (
            <div key={id} className="card-apprenant mx-4">
              <img
                src={require("../assets/img/lorem.jpg").default}
                className="img-apprenant"
              />
              <div className="name-apprenant">{item.nom_apprenant} {item.postnom_apprenant}</div>
              <div className="title-apprenant">{item.nom_competence}</div>
            </div>
          ))}
        </div>

        <h2 className="py-4 px-5">Top des compétences</h2>
        <div className="px-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOM</th>
              <th scope="col">PERSONNE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>HTML 5</td>
              <td>25</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>CSS 3</td>
              <td>17</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>NODE JS</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
