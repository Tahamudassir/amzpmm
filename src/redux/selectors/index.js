export const selectUser = (state) => {
  if (state) {
    return state.auth && state.auth.user ? state.auth.user : null;
  }
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
          order.customer_email
            .toLowerCase()
            .includes(customer_email.toLowerCase()) ||
          order.product_id === product_id
      )
    );
  } else {
    return [];
  }
};

export const filterProducts = (data) => {
  if (data) {
    const { keyword, productId, market, products, category } = data;
    if (keyword === "" && !productId && market === "" && category === "") {
      return products;
    }
    return (
      products &&
      products.filter(
        (product) =>
          product.productId === productId ||
          (keyword !== "" &&
            product.keyword.toLowerCase().includes(keyword.toLowerCase())) ||
          product.market === market ||
          product.productCategory === category
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
