let data = {
  list: [],
  list_with_apprenant:[],
  current: [],
  edit:{},
  status:0,
};

const competenceReducer = (state = data, action) => {
  switch (action.type) {
    case "GET_COMPETENCE_WITH_APPRENANT":
      return {
        ...state,
        list_with_apprenant: action.payload,
      };
    case "GET_COMPETENCE":
      return {
        ...state,
        list: action.payload,
      };
    case "POST_COMPETENCE":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default competenceReducer;