import axios from "axios";
import { serverHttp } from "./config";

export const getCompetence = (action, token) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/competence`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    let data_select = [];
    res.data.data.map((item) => {
      data_select.push({
        value: item.id_competence,
        label: item.nom_competence,
      });
    });
    dispatch({
      type: action,
      payload: data_select,
    });
  } catch (err) {
    console.error(err.toString());
  }
};

export const get_competence_apprenant = (action, token) => async (dispatch) => {
  try {
    console.log(token);
    const res = await axios.get(`${serverHttp}/api/competence/apprenant`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    let competences = [];
    res.data.data.map((item) => {
      let index = competences.findIndex(
        (element) => element.id_competence == item.id_competence
      );
      if (index != -1) competences[index].count++;
      else competences.push({ ...item, count: 1 });
    });

    dispatch({
      type: action,
      payload: competences,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err);
  }
};

export const postCompetence = (action, payload, token) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/competence`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: action,
      payload: 200,
    });
    console.log("Success Data");
  } catch (err) {
    console.error(err.toString());
  }
};

export const editCompetence = (action, payload, token) => async (dispatch) => {
  try {
    const res = await axios.put(`${serverHttp}/api/competence`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const deleteCompetence = (action, payload, token) => async (
  dispatch
) => {
  try {
    const res = await axios.delete(`${serverHttp}/api/competence`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};
