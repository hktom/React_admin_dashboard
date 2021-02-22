let data = {
  list: [],
  current: [],
};

const apprenantReducer = (state = data, action) => {

    switch (action.type) {
    case "GET_APPRENANT":
      return {
        ...state,
        list: action.payload,
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
      };

    case "DELETE_APPRENANT":
      return {
        ...state,
        current: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default apprenantReducer;