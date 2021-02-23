import axios from "axios";
import { serverHttp } from "./config";

export const getApprenants = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/apprenants`);
    dispatch({
      type: action,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.toString());
  }
};

export const postApprenants = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/apprenant`, {
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
    const res = await axios.post(`${serverHttp}/apprenant/update`, {
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
    const res = await axios.delete(`${serverHttp}/apprenant/delete`, {
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
