import API from "../config/lib";
import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

export function getProductsApi(queryData) {
  return API.post("/product/getbyuserid", queryData);
}

export function getProductsPmApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/sort", { status: "Enabled", pageSize, current });
}

export function getProductsPmByMarketApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/search", {
    status: "Enabled",
    pageSize,
    current,

    market: action.payload.market,
  });
}

export function getProductsPmByKeywordApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/search", {
    status: "Enabled",
    pageSize,
    current,

    keyword: action.payload.keyword,
  });
}

export function getProductsPmByproductIdApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/search", {
    status: "Enabled",
    pageSize,
    current,

    productId: action.payload.productId,
  });
}
export function getProductsPmByCategoryApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/search", {
    status: "Enabled",
    pageSize,
    current,

    productCategory: action.payload.productCategory,
  });
}

export function getProductsPmBySellerIdApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/search", {
    status: "Enabled",
    pageSize,
    current,

    sellerId: action.payload.sellerId,
  });
}
// pm_-------------------------------------------

export function getProductsPmmByMarketApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/searchPmmProducts", {
    status: action.payload.status ? action.payload.status : "Enabled",
    pageSize,
    current,

    market: action.payload.market,
  });
}

export function getProductsPmmByKeywordApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/searchPmmProducts", {
    status: action.payload.status,
    pageSize,
    current,

    keyword: action.payload.keyword,
  });
}

export function getProductsPmmByproductIdApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/searchPmmProducts", {
    status: action.payload.status ? action.payload.status : "Enabled",
    pageSize,
    current,

    productId: action.payload.productId,
  });
}
export function getProductsPmmByCategoryApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/searchPmmProducts", {
    status: action.payload.status ? action.payload.status : "Enabled",
    pageSize,
    current,

    productCategory: action.payload.productCategory,
  });
}

export function getProductsPmmByChineseSellerIdApi(action) {
  const { pageSize, current } = action.payload;
  return API.post("/product/searchPmmProducts", {
    status: action.payload.status ? action.payload.status : "Enabled",
    pageSize,
    current,
    chineseSeller: action.payload.chineseSeller,
  });
}

// ----------------------pm end

export function getProductsPublicApi(action) {
  const { pageSize, current } = action.payload;

  return axios.post(`${baseURL}/product/sort`, {
    status: "Enabled",
    pageSize,
    current,
  });
}
export function addProductApi(queryData) {
  return API.post("/product/add", queryData);
}
export function filterProductsApi(queryData) {
  return API.post("/order/add", queryData);
}
export function viewProductApi(queryData) {
  return API.post("/product/getbyid", queryData);
}
export function editProductApi(queryData) {
  return API.post("/product/edit", queryData);
}
export function editProductImageApi(queryData) {
  if (queryData.amazonImage) {
    return API.post(
      `/product/editamazonimage/${queryData.id}`,
      queryData.formData
    );
  }
  return API.post(`/product/editimage/${queryData.id}`, queryData.formData);
}
