import { toast } from "sonner";


export const getData = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_DATA_REQUEST" });
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/data`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      dispatch({ type: "GET_DATA_SUCCESS", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "GET_DATA_FAIL", payload: error.message });
    }
  };
};
