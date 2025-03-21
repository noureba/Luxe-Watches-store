import Cookies from "js-cookie";

const initialState = {
  cartItems: Cookies.get("cartItems")
    ? JSON.parse(decodeURIComponent(Cookies.get("cartItems")))
    : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedAddCart = [...state.cartItems, action.payload];
      Cookies.set(
        "cartItems",
        encodeURIComponent(JSON.stringify(updatedAddCart))
      );
      return {
        ...state,
        cartItems: updatedAddCart,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
