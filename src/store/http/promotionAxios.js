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