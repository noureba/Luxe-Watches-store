const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  isRegisted: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        isRegisted: action.payload.success,
      };

    case "REGISTER_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: action.payload.success,
      };

    case "LOGIN_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
