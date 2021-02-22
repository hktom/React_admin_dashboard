let data = {
    list: [],
    current: [],
  };
  
  const userReducer = (state = data, action) => {
  
      switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          list: action.payload,
        };
  
      case "FIND_USER":
        return {
          ...state,
          current: action.payload,
        };
  
      case "ADD_USER":
        return {
          ...state,
          current: action.payload,
        };
  
      case "DELETE_USER":
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
  
  export default userReducer;