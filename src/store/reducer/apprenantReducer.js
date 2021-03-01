let data = {
  list: [],
  show: {},
  edit: [],
  search: [],
  delete: {},
  status: 0,
};

const apprenantReducer = (state = data, action) => {
  switch (action.type) {
    case "GET_APPRENANT":
      return {
        ...state,
        list: action.payload,
        search: action.payload,
        status: action.status,
      };
    case "SEARCH_APPRENANT":
      return {
        ...state,
        search: action.payload,
      };
    case "RESET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SHOW_APPRENANT":
      return {
        ...state,
        show: action.payload,
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
        search: action.payload,
        status: action.status,
      };

    case "ADD_APPRENANT":
      return {
        ...state,
        //current: action.payload,
        status: action.status,
      };
    case "EDIT_APPRENANT":
      return {
        ...state,
        edit: action.payload,
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
