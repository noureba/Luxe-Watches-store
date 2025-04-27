import { toast } from "sonner";

export const registerUser = (userInfo) => {
  return async (dispatch) => {
    dispatch({ type: "REGISTER_USER_REQUEST" });
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
          credentials: "include",

        }
      );

      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        dispatch({ type: "REGISTER_USER_SUCCESS", payload: data });
      } else {
        toast.error(data.message);
        dispatch({ type: "REGISTER_USER_FAIL", payload: data.message });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      dispatch({ type: "REGISTER_USER_FAIL", payload: error.message });
    }
  };
};

export const loginUser = (userInfo) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_USER_REQUEST" });
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: data });
      } else {
        toast.error(data.message);
        dispatch({ type: "LOGIN_USER_FAIL", payload: data.message });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_USER_FAIL" });
    }
  };
};
