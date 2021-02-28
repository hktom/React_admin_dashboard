let data = {
    list: [],
    current: [],
    edit:{},
    status:0
  };
  
  const promotionReducer = (state = data, action) => {
  
      switch (action.type) {
      case "GET_PROMOTION":
        return {
          ...state,
          list: action.payload,
        };
      case "POST_PROMOTION":
        return {
          ...state,
          status: action.payload,
        };
      case "PUT_PROMOTION":
        return {
          ...state,
          status: action.payload,
        };
      case "DROP_PROMOTION":
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
  
  export default promotionReducer;