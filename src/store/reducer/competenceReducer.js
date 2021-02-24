let data = {
    list: [],
    current: [],
  };
  
  const competenceReducer = (state = data, action) => {
  
      switch (action.type) {
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