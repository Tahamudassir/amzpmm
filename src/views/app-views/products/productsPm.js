import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button, Row, Col, Select, Input, Spin, message } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import ProductImage from "../../../components/ProductImage";
import {
  getProductsPmAction,
  searchById,
  searchByMarket,
  searchByKeyword,
  searchByCategory,
  searchBySellerId,
} from "../../../redux/actions/Product";
// import { filterProducts } from "../../../redux/selectors";
import { reserveProductAction } from "../../../redux/actions/Reservations";
import {
  getMarketsAction,
  getCategoryAction,
} from "../../../redux/actions/AppData";

import { getPmmAction } from "../../../redux/actions/User";

import UserInfo from "../../../components/UserInfo";
import "./styles.css";

const Products = (props) => {
  const {
    dispatch,
    products,
    loading,
    reserving,
    markets,
    total,
    categories,
    currentNumber,
    sizePage,
    pmm,
  } = props;
  const history = useHistory();
  const [current, setCurrent] = useState(currentNumber);
  const [pageSize, setPageSize] = useState(sizePage);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [productCode, setProductCode] = useState("");
  const [market, setMarket] = useState("");
  const [sellerId, setSellerId] = useState("");
  useEffect(() => {
    // debugger;
    if (current !== 1) {
      setCurrent(current - 1);
      handleTableChange({ current: current - 1, pageSize });
    }
    dispatch(
      getProductsPmAction({
        status: "Enabled",
        public: false,
        current,
        pageSize,
      })
    );
    dispatch(getMarketsAction());
    dispatch(getCategoryAction());
    dispatch(getPmmAction());
  }, []);

  // window.addEventListener("popstate", () => {
  //   window.removeEventListener("popstate", () => {
  //     console.log("Go back");
  //   });
  //   if (current === 1) {
  //     history.goBack();
  //   } else {
  //     history.push("/products");
  //     let currentPageNumber = current - 1;
  //     setCurrent(currentPageNumber);
  //     handleTableChange({ currentPageNumber, pageSize });
  //   }
  // });
  // window.addEventListener("popstate", (e) => {
  //   console.log(e);
  // });
  const onReserveProduct = (id, saleLimitDayLeft) => {
    if (saleLimitDayLeft === 0) {
      return message.warning("Daily sale limit reached for this product");
    }
    dispatch(reserveProductAction({ productId: id }));
  };

  // const onCreateOrder = (id, saleLimitDayLeft) => {
  //   if (saleLimitDayLeft === 0) {
  //     return message.warning("Daily sale limit reached for this product");
  //   }
  //   history.push({
  //     pathname: `/create-order/${id}`,
  //     state: {
  //       reservationId: "",
  //     },
  //   });
  // };

  const navigateToDetails = (id) => {
    history.push(`/product-details/${id}`);
  };

  const columns = [
    {
      title: "Seller Name",
      dataIndex: "User",
      key: "id",
      render: (user) => <UserInfo user={user} />,
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
      title: "Today Remaining",
      dataIndex: "saleLimitDayLeft",
      key: "id",
    },
    {
      title: "Total Remaining",
      dataIndex: "saleLimitOverall",
      key: "id",
    },
    {
      title: "Commission",
      dataIndex: "commission",
      key: "id",
    },
    // {
    //   title: "Category",
    //   dataIndex: "productCategory",
    //   key: "id",
    // },
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
      render: (cell) => <ProductImage image={cell.image} />,
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
    // {
    //   key: "id",
    //   render: (cell) => (
    //     <Button
    //       type="primary"
    //       className="btnViewOrder"
    //       size="small"
    //       onClick={() => {
    //         onCreateOrder(cell.productId, cell.saleLimitDayLeft);
    //         // history.push({
    //         //   pathname: `/create-order/${cell.productId}`,
    //         //   state: {
    //         //     reservationId: "",
    //         //   },
    //         // });
    //       }}
    //     >
    //       Create Order
    //     </Button>
    //   ),
    // },
    {
      title: "",
      dataIndex: "",
      key: "id",
      render: (cell) => (
        <Button
          type="primary"
          size="small"
          onClick={() => {
            onReserveProduct(cell.productId, cell.saleLimitDayLeft);
          }}
          icon={<EditOutlined />}
        >
          Reserve
        </Button>
      ),
    },
  ];
  // console.log("========>>>>", props.pmm);
  const onSearchById = (e) => {
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket("");
    setProductCode(e);

    dispatch(searchById({ productId: parseInt(e), current: 1, pageSize }));
  };
  const onSearchByMarket = (e) => {
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket(e);
    setProductCode("");
    dispatch(searchByMarket({ market: e, current: 1, pageSize }));
  };
  const onSearchByKeyword = (e) => {
    setCurrent(1);
    setCategory("");
    setKeyword(e);
    setMarket("");
    setProductCode("");
    dispatch(searchByKeyword({ keyword: e, current: 1, pageSize }));
  };
  const onSearchByCategory = (e) => {
    setCurrent(1);
    setCategory(e);
    setKeyword("");
    setMarket("");
    setProductCode("");
    dispatch(searchByCategory({ productCategory: e, current: 1, pageSize }));
  };

  const onSearchBySellerId = (e) => {
    setSellerId(e);
    setCurrent(1);
    setCategory("");
    setKeyword("");
    setMarket("");
    setProductCode("");
    dispatch(searchBySellerId({ sellerId: e, current: 1, pageSize }));
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
    // history.push(`/products/pageNumber=${current}`);
    history.push({
      pathname: "/products",
      search: `?pageNumber=${current}`,
    });
    setPageSize(pageSize);

    setCurrent(current);
    if (keyword) {
      return dispatch(searchByKeyword({ keyword: keyword, current, pageSize }));
    }

    if (category) {
      return dispatch(
        searchByCategory({ productCategory: category, current, pageSize })
      );
    }
    if (market) {
      return dispatch(searchByMarket({ market, current, pageSize }));
    }
    if (productCode) {
      return dispatch(
        searchById({ productId: productCode, current, pageSize })
      );
    }

    if (sellerId) {
      return dispatch(
        searchBySellerId({ sellerId: sellerId, current, pageSize })
      );
    }
    dispatch(
      getProductsPmAction({
        status: "Enabled",
        public: false,
        current,
        pageSize,
      })
    );
  };

  const handleClear = () => {
    dispatch(
      getProductsPmAction({
        status: "Enabled",
        public: false,
        current,
        pageSize,
      })
    );
  };
  //! Filter Duplicate Categories
  let filterDuplicateCategories = products?.map((x) => x.productCategory);
  let uniqCategory = [...new Set(filterDuplicateCategories)];
  //! Filter Duplicate Markets
  let filterDuplicatedMarket = products?.map((x) => x.market);
  let uniqMarket = [...new Set(filterDuplicatedMarket)];
  // console.log("Filter Duplicate Market Res", uniqMarket);
  const { Search } = Input;
  const { Option } = Select;
  return (
    <>
      <div className="headerProducts">
        <h4 className="productsTitle">Products</h4>
      </div>
      <Row
        gutter={[0, { xs: 16, sm: 16, md: 16, lg: 0 }]}
        style={{ marginBottom: "20px" }}
      >
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Search
            placeholder="Product Code"
            enterButton
            allowClear
            onSearch={onSearchById}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="Keyword"
            enterButton
            allowClear
            onSearch={onSearchByKeyword}
            required
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
            // onClear={() => dispatch(searchByMarket(""))}
            onClear={() => handleClear()}
          >
            {uniqMarket &&
              uniqMarket.map((x, index) => (
                <Option key={index} value={x}>
                  {x}
                </Option>
              ))}
          </Select>
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Filter Category"
            onSelect={onSearchByCategory}
            allowClear
            // onClear={() => dispatch(searchByCategory(""))}
            onClear={() => handleClear()}
          >
            {uniqCategory &&
              uniqCategory.map((x, index) => (
                <Option key={index} value={x}>
                  {x}
                </Option>
              ))}
          </Select>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={5}>
          <Select
            style={{ marginTop: "10px", width: "100%" }}
            placeholder="Seller ID"
            enterButton
            allowClear
            onSelect={onSearchBySellerId}
          >
            {pmm &&
              pmm?.length !== 0 &&
              pmm.map((pmm, index) => (
                <Option key={pmm._id} value={pmm.userId}>
                  {pmm?.name}
                </Option>
              ))}
          </Select>
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
      {reserving && (
        <div className="loadingSpin">
          <Spin />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, total, sizePage, currentNumber, products } = state.products;
  const { categories, markets } = state.appData;
  const { pmm } = state.pmm;

  return {
    products,
    categories,
    markets,
    loading,
    total,
    sizePage,
    currentNumber,
    pmm,
  };
};

export default connect(mapStateToProps)(Products);
