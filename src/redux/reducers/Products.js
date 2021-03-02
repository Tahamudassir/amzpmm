import types from "../constants/Products";

const initState = {
  loading: false,
  products: null,
  productDetail: null,
};

const products = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.VIEW_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.VIEW_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
      };
    case types.VIEW_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.EDIT_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
      };
    case types.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.EDIT_PRODUCT_IMAGE:
      return {
        ...state,
        uploading: true,
      };
    case types.EDIT_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        uploading: false,
        productDetail: action.payload,
      };
    case types.EDIT_PRODUCT_IMAGE_FAILURE:
      return {
        ...state,
        uploading: false,
      };
    default:
      return state;
  }
};

export default products;
