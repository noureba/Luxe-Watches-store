import Cookies from "js-cookie";

const initialState = {
  items: Cookies.get("cartItems")
    ? JSON.parse(decodeURIComponent(Cookies.get("cartItems")))
    : [],
  Subtotal: Cookies.get("subTotal")
    ? JSON.parse(decodeURIComponent(Cookies.get("subTotal")))
    : 0,
  Shipping: Cookies.get("shipping")
    ? JSON.parse(decodeURIComponent(Cookies.get("shipping")))
    : "Free",
  totalPrice: Cookies.get("totalPrice")
    ? JSON.parse(decodeURIComponent(Cookies.get("totalPrice")))
    : 0,
};

const calculateSubtotal = (items) => {
  return items.reduce((acc, cur) => acc + cur.quantity * cur.salePrice, 0);
};

const calculateTotalPrice = (subtotal, shipping) => {
  let shippingCost = 0;
  if (shipping === "Standard") {
    shippingCost = 10;
  } else if (shipping === "Express") {
    shippingCost = 25;
  } else if (shipping === "Free") {
    shippingCost = 0;
  }
  return subtotal + shippingCost;
};

const cartReducer = (state = initialState, action) => {
  let updatedItems = [...state.items];
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        updatedItems = [...state.items];
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      Cookies.set(
        "cartItems",
        encodeURIComponent(JSON.stringify(updatedItems))
      );

      const newSubtotal = calculateSubtotal(updatedItems);
      const newTotalPrice = calculateTotalPrice(newSubtotal, state.Shipping);

      Cookies.set("subTotal", encodeURIComponent(JSON.stringify(newSubtotal)));
      Cookies.set(
        "totalPrice",
        encodeURIComponent(JSON.stringify(newTotalPrice))
      );
      Cookies.set(
        "shipping",
        encodeURIComponent(JSON.stringify(state.Shipping))
      );

      return {
        ...state,
        items: updatedItems,
        Subtotal: newSubtotal,
        totalPrice: newTotalPrice,
      };

    case "UPDATE_QUANTITY":
      updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      Cookies.set(
        "cartItems",
        encodeURIComponent(JSON.stringify(updatedItems))
      );
      const newSubtotalUpdate = calculateSubtotal(updatedItems);
      const newTotalPriceUpdate = calculateTotalPrice(
        newSubtotalUpdate,
        state.Shipping
      );

      Cookies.set(
        "subTotal",
        encodeURIComponent(JSON.stringify(newSubtotalUpdate))
      );
      Cookies.set(
        "totalPrice",
        encodeURIComponent(JSON.stringify(newTotalPriceUpdate))
      );
      Cookies.set(
        "shipping",
        encodeURIComponent(JSON.stringify(state.Shipping))
      );

      return {
        ...state,
        items: updatedItems,
        Subtotal: newSubtotalUpdate,
        totalPrice: newTotalPriceUpdate,
      };

    case "REMOVE_FROM_CART":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      Cookies.set(
        "cartItems",
        encodeURIComponent(JSON.stringify(filteredItems))
      );
      const updatedSubtotal = calculateSubtotal(updatedItems);
      const updateTotalPrice = calculateTotalPrice(
        updatedSubtotal,
        state.Shipping
      );

      Cookies.set(
        "subTotal",
        encodeURIComponent(JSON.stringify(updatedSubtotal))
      );
      Cookies.set(
        "totalPrice",
        encodeURIComponent(JSON.stringify(updateTotalPrice))
      );
      Cookies.set(
        "shipping",
        encodeURIComponent(JSON.stringify(state.Shipping))
      );

      return {
        ...state,
        items: filteredItems,
        Subtotal: updatedSubtotal,
        totalPrice: updateTotalPrice,
      };

    case "CHANGE_SHIPPING_METHOD":
      let shippingCost = 0;
      if (action.payload === "Standard") {
        shippingCost = 10;
      } else if (action.payload === "Express") {
        shippingCost = 25;
      }
      const newTotalPriceUpdateAfterShippingChange = state.Subtotal + shippingCost

      Cookies.set(
        "subTotal",
        encodeURIComponent(JSON.stringify(newTotalPriceUpdateAfterShippingChange))
      );

      Cookies.set(
        "shipping",
        encodeURIComponent(JSON.stringify(action.payload))
      );

      return {
        ...state,
        Shipping: action.payload,
        totalPrice: newTotalPriceUpdateAfterShippingChange,
      };

    default:
      return state;
  }
};

export default cartReducer;
