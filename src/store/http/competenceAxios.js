import axios from "axios";
import { serverHttp } from "./config";

export const getCompetence = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/competence`);
    let data_select=[];
    res.data.data.map((item)=>{
      data_select.push({value:item.id_competence, label:item.nom_competence});
    });
    dispatch({
      type: action,
      payload: data_select,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};

export const get_competence_apprenant = (action) => async (dispatch) => {
  try {
    const res = await axios.get(`${serverHttp}/api/competence/apprenant`);
    let competences=[];
    res.data.data.map((item, i)=>{
      let index=competences.findIndex((element)=>element.id_competence==item.id_competence);
      if(index!=-1) competences[index].count++;
      competences.push({...item,count:1});
    });

    console.log(competences);

    dispatch({
      type: action,
      payload: competences,
    });
    //console.log(res.data.data);
  } catch (err) {
    console.error(err.toString());
  }
};