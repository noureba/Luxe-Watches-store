const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  token: null,
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
        isAuthenticated: true,
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
