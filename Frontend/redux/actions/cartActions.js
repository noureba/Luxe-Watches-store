export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };

  export const updateQuantity = (productId, quantity) => ({
    type: "UPDATE_QUANTITY",
    payload: { id: productId, quantity },
  });

  export const changeShippingMethod = (ShippingMethod) => ({
    type: "CHANGE_SHIPPING_METHOD",
    payload: ShippingMethod ,
  });
  