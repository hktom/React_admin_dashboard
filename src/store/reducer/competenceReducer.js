let data = {
  select: [],
  list: [],
  current: [],
};

const competenceReducer = (state = data, action) => {
  switch (action.type) {
    case "GET_COMPETENCE_SELECT":
      return {
        ...state,
        select: action.payload,
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