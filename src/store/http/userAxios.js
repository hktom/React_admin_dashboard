import axios from "axios";
import { serverHttp } from "./config";

export const get_users = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/users`);
    dispatch({
      type: action,
      payload: res.data.data,
    });
  } catch (err) {
    //console.log(res.data.data);
    console.error(err.toString());
  }
};

export const setlogin = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/users/login`);
    localStorage.setItem("suivi_apprenat_admin_token", res.data.data.token);
    dispatch({
      type: action,
      payload: res.data.data,
    });
  } catch (err) {
    //console.log(res.data.data);
    console.error(err.toString());
  }
};

export const get_current_users = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/users/current`);
    dispatch({
      type: action,
      payload: res.data.data,
    });
  } catch (err) {
    //console.log(res.data.data);
    console.error(err.toString());
  }
};

export const postUser = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/user`, payload);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const putUser = (action) => async (dispatch) => {
  try {
    const res = await axios.put(`${serverHttp}/api/user`, payload);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};
