import axios from "axios";
import { serverHttp } from "./config";

export const getCompetence = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/competence`);
    dispatch({
      type: action,
      payload: res.data.data,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};