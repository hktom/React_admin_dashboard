import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getApprenants} from "../store/http/apprenantAxios";
import {get_competence_apprenant} from "../store/http/competenceAxios";
import {Container} from "react-bootstrap";
//import ChartistGraph from "react-chartist";
// react-bootstrap components

function Dashboard() {

  const apprenants = useSelector(state => state.apprenantReducer.list);
  const competences = useSelector(state => state.competenceReducer.list_with_apprenant);
  const dispatch = useDispatch();

  useEffect(() => {
    let suivi_apprenat_admin_token = localStorage.getItem("suivi_apprenat_admin_token");
    dispatch(getApprenants('GET_APPRENANT', suivi_apprenat_admin_token));
    dispatch(get_competence_apprenant('GET_COMPETENCE_WITH_APPRENANT', suivi_apprenat_admin_token));
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        <img
          style={{ width: "100%", height: 290, objectFit: "cover" }}
          src={require("../assets/img/dashboard.png").default}
          alt="..."
        />
        
        <h4 className="py-4 px-1">Liste des apprénants</h4>
        <div className="d-flex justify-content-start">
          {apprenants.map((item, id) => (
            <div key={id} className="card-apprenant mx-4">
              <img
                src={`http://127.0.0.1:8000/${item.photo_apprenant}`}
                className="img-apprenant"
              />
              <div className="name-apprenant">{item.nom_apprenant} {item.prenom_apprenant}</div>
              <div className="title-apprenant">{item.nom_promotion}</div>
            </div>
          ))}
        </div>

        <h4 className="py-4 px-1">Top des compétences</h4>
        <div className="px-1">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOM</th>
              <th scope="col">PERSONNE</th>
            </tr>
          </thead>
          <tbody>
            {
              competences.map((item, index)=>(
                <tr key={item.id_competence}>
                <th scope="row">{index+1}</th>
                <td>{item.nom_competence}</td>
                <td>{item.count}</td>
              </tr>    
              ))
            }
            
          </tbody>
        </table>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
