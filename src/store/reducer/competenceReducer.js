let data = {
  select_list: [],
  list: [],
  current: [],
};

const competenceReducer = (state = data, action) => {
  switch (action.type) {
    case "GET_COMPETENCE_SELECT":
      return {
        ...state,
        select_list: action.payload,
      };
    case "GET_COMPETENCE":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default competenceReducer;