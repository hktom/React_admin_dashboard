import axios from "axios";
import { serverHttp } from "./config";

export const get_users = (action, token) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: action,
      payload: res.data.data,
    });
  } catch (err) {
    //console.log(res.data.data);
    console.error(err.toString());
  }
};

export const setlogin = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/login`, payload);
    localStorage.setItem("suivi_apprenat_admin_token", res.data.accessToken);
    localStorage.setItem(
      "suivi_apprenat_admin_id",
      res.data.data[0].id_utilisateur
    );
    dispatch({
      type: action,
      payload: res.data.data[0],
      token: res.data.accessToken,
    });
  } catch (err) {
    //console.log(res.data.data);
    console.error(err.toString());
  }
};

export const get_current_users = (action, token) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/users/current`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: action,
      payload: res.data.data,
    });
  } catch (err) {
    //console.log(res.data.data);
    console.error(err.toString());
  }
};

export const postUser = (action, payload, token) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/user`, payload, {
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

export const putUser = (action, token) => async (dispatch) => {
  try {
    const res = await axios.put(`${serverHttp}/api/user`, payload, {
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
