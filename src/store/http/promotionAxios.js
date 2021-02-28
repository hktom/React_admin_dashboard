import axios from "axios";
import { serverHttp } from "./config";

export const getPromotion = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/promotion`);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const postPromotion = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${serverHttp}/api/promotion`, payload);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const putPromotion = (action) => async (dispatch) => {
  try {
    const res = await axios.put(`${serverHttp}/api/promotion`, payload);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const deletePromotion = (action) => async (dispatch) => {
  try {
    const res = await axios.delete(`${serverHttp}/api/promotion`, payload);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};