let data = {
  list: [],
  current: [],
  status: 0,
};

const apprenantReducer = (state = data, action) => {
  switch (action.type) {
    case "GET_APPRENANT":
      return {
        ...state,
        list: action.payload,
        status: action.status,
      };

    case "SET_STATUS_PENDING":
      return {
        ...state,
        status: "pending",
      };

    case "POST_COMPETENCE":
      return {
        ...state,
        status: action.status,
      };

    case "PUT_COMPETENCE":
      return {
        ...state,
        status: action.status,
      };

    case "DELETE_COMPETENCE":
      return {
        ...state,
        status: action.status,
      };

    case "FIND_APPRENANT":
      return {
        ...state,
        current: action.payload,
      };

    case "ADD_APPRENANT":
      return {
        ...state,
        current: action.payload,
        status: action.status,
      };

    case "DELETE_APPRENANT":
      return {
        ...state,
        current: [],
        status: action.status,
      };

    default:
      return {
        ...state,
      };
  }
};

export default apprenantReducer;
