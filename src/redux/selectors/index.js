export const selectUser = (state) => {
  return state.auth && state.auth.user ? state.auth.user : null;
};

export const filterOrders = (data) => {
  if (data) {
    const { product_id, orderId, customer_email, orders } = data;
    if (product_id === "" && orderId === "" && customer_email === "") {
      return orders;
    }
    return (
      orders &&
      orders.filter(
        (order) =>
          order.orderNumber === orderId ||
          order.customer_email === customer_email ||
          order.product_id === product_id
      )
    );
  } else {
    return [];
  }
};

export const filterProducts = (data) => {
  if (data) {
    const { keyword, productId, market, products } = data;
    if (keyword === "" && !productId && market === "") {
      return products;
    }
    return (
      products &&
      products.filter(
        (product) =>
          product.productId === productId ||
          product.keyword.toLowerCase() === keyword.toLowerCase() ||
          product.market === market
      )
    );
  } else {
    return [];
  }
};

export const selectProducts = (state) => {
  return state.products && state.products.products;
};

export const selectReservations = (state) => {
  return state.reservations && state.reservations.reservations;
};
