import { put, takeLatest, select } from 'redux-saga/effects'
import { message } from 'antd'
import {
  getProductsApi,
  viewProductApi,
  editProductApi,
  addProductApi,
  editProductImageApi,
  getProductsPmApi,
  getProductsPublicApi,
} from '../api/Products'
import { getErrorMessage } from '../constants/ErrorMessage'
import { selectProducts } from '../selectors'
import types from '../constants/Products'

function* getProducts(action) {
  console.log('get saga', action)
  try {
    const response = yield getProductsApi(action.payload)
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: response.data })
    } else {
      yield put({ type: types.GET_PRODUCTS_FAILURE })
    }
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE })
    let errorMessage = yield getErrorMessage(error)
    message.error(errorMessage)
  }
}

function* getProductsPm(action) {
  try {
    let response = null
    if (action.payload.public) {
      response = yield getProductsPublicApi(action)
    } else {
      response = yield getProductsPmApi(action)
    }
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: response.data })
    } else {
      yield put({ type: types.GET_PRODUCTS_FAILURE })
    }
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE })
    let errorMessage = yield getErrorMessage(error)
    message.error(errorMessage)
  }
}

function* viewProduct(action) {
  try {
    const response = yield viewProductApi(action.payload)
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.VIEW_PRODUCT_SUCCESS,
        payload: response.data[0],
      })
    } else {
      yield put({ type: types.STOP_LOADING })
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING })
    let errorMessage = yield getErrorMessage(error)
    message.error(errorMessage)
  }
}

function* editProduct(action) {
  try {
    const response = yield editProductApi(action.payload)
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.EDIT_PRODUCT_SUCCESS,
        payload: response.data.result,
      })
      message.success('product edited successfully')
    } else {
      yield put({ type: types.STOP_LOADING })
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING })
    let errorMessage = yield getErrorMessage(error)
    message.error(errorMessage)
  }
}
function* addProduct(action) {
  try {
    const response = yield addProductApi(action.payload)
    if (response.status >= 200 && response.status < 300) {
      yield put({ type: types.ADD_PRODUCT_SUCCESS })
      yield put({ type: types.SET_NULL })
      message.success('Product added successfully')
    } else {
      yield put({ type: types.STOP_LOADING })
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING })
    console.log('error', error)
    let errorMessage = yield getErrorMessage(error)
    message.error(errorMessage)
  }
}
function* editProductImage(action) {
  try {
    const response = yield editProductImageApi(action.payload)
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: types.EDIT_PRODUCT_IMAGE_SUCCESS,
        payload: response.data.result,
      })
      message.success('image updated successfully')
    } else {
      yield put({ type: types.EDIT_PRODUCT_IMAGE_FAILURE })
    }
  } catch (error) {
    yield put({ type: types.EDIT_PRODUCT_IMAGE_FAILURE })
    let errorMessage = yield getErrorMessage(error)
    message.error(errorMessage)
  }
}

function* changeProductStatus({ payload }) {
  try {
    const products = yield select(selectProducts)
    const response = yield editProductApi(payload)
    if (response.status >= 200 && response.status < 300) {
      const newProducts = products.filter(
        (product) => product.productId !== payload.productId,
      )
      yield put({
        type: types.CHANGE_PRODUCT_STATUS_SUCCESS,
        payload: newProducts,
      })
      message.success('changed product status')
    } else {
      yield put({ type: types.STOP_LOADING })
    }
  } catch (error) {
    yield put({ type: types.STOP_LOADING })
    let errorMessage = yield getErrorMessage(error)
    message.error(errorMessage)
  }
}

export default function* productSaga() {
  yield takeLatest(types.GET_PRODUCTS, getProducts)
  yield takeLatest(types.GET_PRODUCTS_PM, getProductsPm)
  yield takeLatest(types.VIEW_PRODUCT, viewProduct)
  yield takeLatest(types.EDIT_PRODUCT, editProduct)
  yield takeLatest(types.ADD_PRODUCT, addProduct)
  yield takeLatest(types.EDIT_PRODUCT_IMAGE, editProductImage)
  yield takeLatest(types.CHANGE_PRODUCT_STATUS, changeProductStatus)
}
