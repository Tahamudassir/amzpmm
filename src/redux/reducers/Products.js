import types from '../constants/Products'

const initState = {
  loading: false,
  products: null,
  productDetail: null,
  productId: null,
  keyword: '',
  market: '',
  category: '',
  total: 0,
}

const products = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.events,
        keyword: '',
        market: '',
        productId: null,
        total: action.payload.count,
      }
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        keyword: '',
        market: '',
        productId: null,
      }
    case types.GET_PRODUCTS_PM:
      return {
        ...state,
        loading: true,
      }

    case types.VIEW_PRODUCT:
      return {
        ...state,
        loading: true,
      }
    case types.VIEW_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
      }
    case types.CHANGE_PRODUCT_STATUS:
      return {
        ...state,
        loading: true,
      }
    case types.CHANGE_PRODUCT_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case types.SEARCH_BY_MARKET:
      return {
        ...state,
        market: action.payload,
      }
    case types.SEARCH_BY_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      }
    case types.SEARCH_BY_ID:
      return {
        ...state,
        productId: action.payload,
      }
    case types.SEARCH_BY_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case types.ADD_PRODUCT:
      return {
        ...state,
        loading: true,
      }
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        clearForm: true,
      }
    case types.EDIT_PRODUCT:
      return {
        ...state,
        loading: true,
      }
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
      }
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false,
      }
    case types.EDIT_PRODUCT_IMAGE:
      return {
        ...state,
        uploading: true,
      }
    case types.EDIT_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        uploading: false,
        productDetail: action.payload,
      }
    case types.EDIT_PRODUCT_IMAGE_FAILURE:
      return {
        ...state,
        uploading: false,
      }
    case types.SET_NULL:
      return {
        ...state,
        clearForm: false,
      }
    default:
      return state
  }
}

export default products
