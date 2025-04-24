const initialState = {
  loading: false,
  error: null,
  data: [],
  isAuthenticated: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        isAuthenticated: action.payload.success,
      };
    case "GET_DATA_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
