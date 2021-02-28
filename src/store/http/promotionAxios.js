import axios from "axios";
import { serverHttp } from "./config";

export const getPromotion = (action, token) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/promotion`, {
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

export const postPromotion = (action, payload, token) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/promotion`, payload, {
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

export const putPromotion = (action, token) => async (dispatch) => {
  try {
    const res = await axios.put(`${serverHttp}/api/promotion`, payload, {
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

export const deletePromotion = (action, token) => async (dispatch) => {
  try {
    const res = await axios.delete(`${serverHttp}/api/promotion`, payload, {
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
