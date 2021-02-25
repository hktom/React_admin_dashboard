import axios from "axios";
import { serverHttp } from "./config";

export const getApprenants = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/apprenant`);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const postApprenants = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/apprenant`, {
      ...payload,
    });
    dispatch({
      type: action,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.toString());
  }
};

export const updateApprenants = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/apprenant`, {
      ...payload,
    });
    dispatch({
      type: action,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.toString());
  }
};

export const deleteApprenants = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.delete(`${serverHttp}/api/apprenant`, {
      ...payload,
    });
    dispatch({
      type: action,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.toString());
  }
};