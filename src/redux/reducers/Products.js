<<<<<<< HEAD
import types from "../constants/Products";
=======
import types from '../constants/Products'
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3

const initState = {
  loading: false,
  products: null,
  productDetail: null,
  productId: null,
<<<<<<< HEAD
  keyword: "",
  market: "",
  category: "",
  total: 0,
  sizePage: 50,
  currentNumber: 1,
};
=======
  keyword: '',
  market: '',
  category: '',
  total: 0,
  sizePage: 50,
  currentNumber: 1,
}
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3

const products = (state = initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        sizePage: action.payload.pageSize,
        currentNumber: action.payload.current,
<<<<<<< HEAD
      };
    case types.GET_PRODUCTS_SUCCESS: {
=======
      }
    case types.GET_PRODUCTS_SUCCESS:
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
      return {
        ...state,
        loading: false,
        products: action.payload.events,
<<<<<<< HEAD
        keyword: "",
        market: "",
        productId: null,
        total: action.payload.count,
      };
    }
=======
        keyword: '',
        market: '',
        productId: null,
        total: action.payload.count,
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
<<<<<<< HEAD
        keyword: "",
        market: "",
        productId: null,
      };
=======
        keyword: '',
        market: '',
        productId: null,
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.GET_PRODUCTS_PM:
      return {
        ...state,
        loading: true,
        currentNumber: action.payload.current,
        sizePage: action.payload.pageSize,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3

    case types.VIEW_PRODUCT:
      return {
        ...state,
        loading: true,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.VIEW_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.CHANGE_PRODUCT_STATUS:
      return {
        ...state,
        loading: true,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.CHANGE_PRODUCT_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
<<<<<<< HEAD
      };
    case types.SEARCH_BY_MARKET: {
      return {
        ...state,
        loading: true,
        currentNumber: action.payload.current,
        sizePage: action.payload.pageSize,
        status: action.payload.status,
      };
    }
    case types.SEARCH_BY_KEYWORD:
      return {
        ...state,
        loading: true,
        currentNumber: action.payload.current,
        sizePage: action.payload.pageSize,
        status: action.payload.status,
      };
    case types.SEARCH_BY_ID:
      return {
        ...state,
        loading: true,
        currentNumber: action.payload.current,
        sizePage: action.payload.pageSize,
        status: action.payload.status,
      };
    case types.SEARCH_BY_CATEGORY:
      return {
        ...state,
        loading: true,
        currentNumber: action.payload.current,
        sizePage: action.payload.pageSize,
        status: action.payload.status,
      };
    case types.SEARCH_BY_CHINESE_ID:
      return {
        ...state,
        loading: true,
        currentNumber: action.payload.current,
        sizePage: action.payload.pageSize,
        status: action.payload.status,
      };

    case types.SEARCH_BY_SELLER_ID:
      return {
        ...state,
        loading: true,
        currentNumber: action.payload.current,
        sizePage: action.payload.pageSize,
        status: action.payload.status,
      };
=======
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
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.ADD_PRODUCT:
      return {
        ...state,
        loading: true,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        clearForm: true,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.EDIT_PRODUCT:
      return {
        ...state,
        loading: true,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.payload,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.EDIT_PRODUCT_IMAGE:
      return {
        ...state,
        uploading: true,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.EDIT_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        uploading: false,
        productDetail: action.payload,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.EDIT_PRODUCT_IMAGE_FAILURE:
      return {
        ...state,
        uploading: false,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
    case types.SET_NULL:
      return {
        ...state,
        clearForm: false,
<<<<<<< HEAD
      };
    default:
      return state;
  }
};

export default products;
=======
      }
    default:
      return state
  }
}

export default products
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
