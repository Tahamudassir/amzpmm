import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button, Row, Col, Select, Input } from "antd";
import { EyeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import ProductImage from "../../../components/ProductImage";
import {
  getProductsAction,
  searchById,
  searchByMarket,
  searchByKeyword,
  changeProductStatusAction,
  searchByCategory,
  searchByChineseId,
} from "../../../redux/actions/Product";
import {
  getMarketsAction,
  getCategoryAction,
} from "../../../redux/actions/AppData";

// import UserInfo from "../../../components/UserInfo";
import "./styles.css";

const Products = (props) => {
  const {
    dispatch,
    products,
    loading,
    markets,
    total,
    categories,
    sizePage,
    currentNumber,
  } = props;
  const [productStatus, setProductStatus] = useState("Enabled");
  const [current, setCurrent] = useState(currentNumber);
  const [pageSize, setPageSize] = useState(sizePage);
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [productCode, setProductCode] = useState("");
  const [market, setMarket] = useState("");
  const [chineseSeller, setChineseSeller] = useState("");

  useEffect(() => {
    dispatch(getProductsAction({ status: "Enabled", current, pageSize }));
    dispatch(getMarketsAction());
    dispatch(getCategoryAction());
  }, []);

  const changeProductStatus = (e) => {
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket("");
    setProductCode("");
    setProductStatus(e);
    dispatch(getProductsAction({ status: e, current: 1, pageSize }));
  };

  const navigateToAddProduct = () => {
    history.push("/add-product");
  };
  const navigateToDetails = (id) => {
    history.push(`/product-details/${id}`);
  };

  const columns = [
    {
      title: "Seller Name",
      dataIndex: "sellerName",
      key: "id",
    },
    {
      title: "Market",
      dataIndex: "market",
      key: "id",
    },
    {
      title: "Sale Limit",
      dataIndex: "saleLimitDay",
      key: "id",
    },
    {
      title: "Remaining Order",
      dataIndex: "saleLimitDayLeft",
      key: "id",
    },
    {
      title: "Commision",
      dataIndex: "commission",
      key: "id",
    },
    {
      title: "Category",
      dataIndex: "productCategory",
      key: "id",
    },
    {
      title: "Keyword",
      dataIndex: "keyword",
      key: "id",
      render: (keyword) => <p className="keyword">{keyword}</p>,
    },
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "",
      key: "id",
      render: (cell) => <ProductImage image={cell.image} id={cell.productId} />,
    },
    {
      title: "",
      dataIndex: "",
      key: "id",
      render: (cell) => (
        <Button
          type="primary"
          className="btnAddProduct"
          size="small"
          onClick={() => {
            navigateToDetails(cell.productId);
          }}
          icon={<EyeOutlined />}
        >
          View
        </Button>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "id",
      render: (cell) => {
        return (
          <Button
            type="primary"
            size="small"
            // onClick={() => editProductStatus(cell.status, cell.productId)}
            onClick={() =>
              editProductStatus(cell.status, cell.productId, cell._id)
            }
          >
            {cell.status}
          </Button>
        );
      },
    },
  ];

  const editProductStatus = (oldStatus, productId, id) => {
    if (oldStatus === "Enabled") {
      dispatch(
        changeProductStatusAction({ productId, status: "Disabled", id })
      );
    } else {
      dispatch(changeProductStatusAction({ productId, status: "Enabled", id }));
    }
  };

  const onSearchById = (e) => {
    setCurrent(1);

    // setProductStatus("");
    setCategory("");
    setKeyword("");
    setMarket("");
    setProductCode(e);

    dispatch(
      searchById({
        productId: parseInt(e),
        current: 1,
        pageSize,
        public: true,
        status: productStatus,
      })
    );
  };
  const onSearchByMarket = (e) => {
    setCurrent(1);

    // setProductStatus("");
    setCategory("");
    setKeyword("");
    setMarket(e);
    setProductCode("");
    dispatch(
      searchByMarket({
        market: e,
        current: 1,
        pageSize,
        public: true,
        status: productStatus,
      })
    );
  };
  const onSearchByKeyword = (e) => {
    setCurrent(1);

    // setProductStatus("");
    setCategory("");
    setKeyword(e);
    setMarket("");
    setProductCode("");
    dispatch(
      searchByKeyword({
        keyword: e,
        current: 1,
        pageSize,
        public: true,
        status: productStatus,
      })
    );
  };
  const onSearchByCategory = (e) => {
    setCurrent(1);

    // setProductStatus("");
    setCategory(e);
    setKeyword("");
    setMarket("");
    setProductCode("");
    dispatch(
      searchByCategory({
        productCategory: e,
        current: 1,
        pageSize,
        public: true,
        status: productStatus,
      })
    );
  };

  const onSearchByChineseSellerId = (e) => {
    setChineseSeller(e);
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket("");
    setProductCode("");
    dispatch(
      searchByChineseId({
        chineseSeller: e,
        current: 1,
        pageSize,
        public: true,
        status: productStatus,
      })
    );
  };
  useEffect(() => {
    let params = new URLSearchParams(props.location.search);
    const number = params.get("pageNumber");
    if (current !== 1 && number < current) {
      setCurrent(current - 1);
      handleTableChange({ current: current - 1, pageSize });
    }
  }, [props.location.search]);

  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination;
    history.push({
      pathname: "/products",
      search: `?pageNumber=${current}`,
    });
    setPageSize(pageSize);
    setCurrent(current);
    // if (productStatus) {
    //   return dispatch(
    //     getProductsAction({ status: productStatus, current, pageSize })
    //   );
    // }
    if (keyword) {
      return dispatch(
        searchByKeyword({ keyword: keyword, current, pageSize, public: true })
      );
    }
    // if (productStatus) {
    //   return dispatch(
    //     getProductsAction({
    //       status: productStatus,
    //       current,
    //       pageSize,
    //       public: true,
    //     })
    //   );
    // }
    if (category) {
      return dispatch(
        searchByCategory({
          productCategory: category,
          current,
          pageSize,
          public: true,
        })
      );
    }
    if (market) {
      return dispatch(
        searchByMarket({ market, current, pageSize, public: true })
      );
    }
    if (productCode) {
      return dispatch(
        searchById({ productId: productCode, current, pageSize, public: true })
      );
    }

    if (chineseSeller) {
      console.log("asdasjkjk");
      return dispatch(
        searchByChineseId({
          chineseSeller: chineseSeller,
          current,
          pageSize,
          public: true,
          status: productStatus,
        })
      );
    }
    dispatch(getProductsAction({ status: productStatus, current, pageSize }));
  };

  const handleClear = () => {
    dispatch(getProductsAction({ status: "Enabled", current, pageSize }));
  };

  const { Search } = Input;
  const { Option } = Select;
  return (
    <>
      <div className="headerProducts">
        <h4 className="productsTitle">Products</h4>
        <Button
          type="primary"
          size="small"
          className="btnAddProduct"
          onClick={navigateToAddProduct}
          icon={<PlusCircleOutlined />}
        >
          Add Product
        </Button>
      </div>
      <Row
        gutter={[0, { xs: 16, sm: 16, md: 16, lg: 0 }]}
        style={{ marginBottom: "20px" }}
      >
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Search
            placeholder="Search by product code"
            enterButton
            allowClear
            onSearch={onSearchById}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="Search by keyword"
            enterButton
            allowClear
            onSearch={onSearchByKeyword}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Filter Market"
            onSelect={onSearchByMarket}
            allowClear
            onClear={() => handleClear()}
          >
            {markets &&
              markets.map((market) => (
                <Option value={market.name}>{market.name}</Option>
              ))}
          </Select>
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            style={{ width: "100%" }}
            placeholder="Products Status"
            value={productStatus}
            onChange={changeProductStatus}
          >
            <Option value="Enabled">Enabled</Option>
            <Option value="Disabled">Disabled</Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ marginTop: "10px" }}>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Filter Category"
            onSelect={onSearchByCategory}
            allowClear
            onClear={() => handleClear()}
          >
            {categories &&
              categories.map((category) => (
                <Option value={category.name}>{category.name}</Option>
              ))}
          </Select>
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            style={{ marginTop: "10px" }}
            placeholder="Search by Chinese Seller Id"
            enterButton
            allowClear
            onSearch={onSearchByChineseSellerId}
          />
        </Col>
      </Row>
      <div className="cardProducts">
        <Table
          dataSource={products}
          columns={columns}
          scroll={{ x: true }}
          loading={loading}
          onChange={handleTableChange}
          pagination={{
            total: total, // total count returned from backend,
            pageSize,
            current,
          }}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, total, sizePage, currentNumber, products } = state.products;
  const { categories, markets } = state.appData;
  return {
    // products: filterProducts(state.products),
    products,
    loading,
    categories,
    markets,
    total,
    sizePage,
    currentNumber,
  };
};

export default connect(mapStateToProps)(Products);
