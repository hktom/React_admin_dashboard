import axios from "axios";
import { serverHttp } from "./config";

export const getApprenants = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/apprenant`);

    let apprenants=[];
    res.data.data.map((item)=>{
      let index=apprenants.some((element)=>element.id_apprenant==item.id_apprenant);
      if(!index) apprenants.push(item);
    });

    dispatch({
      type: action,
      payload: apprenants,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const postApprenants = (action, payload) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${serverHttp}/api/apprenant`,
      payload
    );
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
