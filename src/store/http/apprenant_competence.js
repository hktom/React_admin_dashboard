import axios from "axios";
import { serverHttp } from "./config";

export const post_apprenant_competence = (action, payload) => async (dispatch) => {
  try {
    await axios.post(`${serverHttp}/api/apprenant/competence`, payload);
    dispatch({
      type: action,
      status: 200,
    });
    
  } catch (err) {
    console.error(err.toString());
  }
};

export const put_apprenant_competence = (action, payload) => async (dispatch) => {
  try {
    await axios.put(
      `${serverHttp}/api/apprenant/competence`,
      payload
    );
    dispatch({
        type: action,
        status: 200,
      });
  } catch (err) {
    console.error(err.toString());
  }
};

export const delete_apprenant_competence = (action, payload) => async (dispatch) => {
  try {
    await axios.delete(`${serverHttp}/api/apprenant/competence`, payload);
    dispatch({
        type: action,
        status: 200,
      });
  } catch (err) {
    console.error(err.toString());
  }
};