let data = {
    list: [],
    current: [],
  };
  
  const promotionReducer = (state = data, action) => {
  
      switch (action.type) {
      case "GET_PROMOTION":
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
  
  export default promotionReducer;