let data = {
    list: [],
    current_user: [],
    token:false,
    status:0,
    
  };
  
  const userReducer = (state = data, action) => {
  
      switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          list: action.payload,
        };
      case "GET_CURRENT_USER":
        return {
          ...state,
          current_user: action.payload,
        };
  
      case "UPDATE_PROFILE":
        return {
          ...state,
          current_user: action.payload,
        };

        case "PROFILE_USER":
          return {
            ...state,
            current_user: action.payload,
          };

        case "LOGIN_USER":
          return {
            ...state,
            current_user: action.payload,
            token:action.token,
          };

          case "SET_TOKEN":
          return {
            ...state,
            token:action.payload
          };

          case "logout_USER":
          return {
            ...state,
            token:'',
          };
  
      default:
        return {
          ...state,
        };
    }
  };
  
  export default userReducer;