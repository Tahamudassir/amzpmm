import React, { useEffect } from "react";
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
} from "../../../redux/actions/Product";
import { filterProducts } from "../../../redux/selectors";
import { reserveProductAction } from "../../../redux/actions/Reservations";
import {
  getMarketsAction,
  getCategoryAction,
} from "../../../redux/actions/AppData";
import UserInfo from "../../../components/UserInfo";
import "./styles.css";

const Products = (props) => {
  const { dispatch, products, loading, reserving, markets, categories } = props;
  const history = useHistory();

  useEffect(() => {
    dispatch(getProductsPmAction({ status: "Enabled", public: false }));
    dispatch(getMarketsAction());
    dispatch(getCategoryAction());
  }, []);

  const onReserveProduct = (id, saleLimitDayLeft) => {
    if (saleLimitDayLeft === 0) {
      return message.warning("Daily sale limit reached for this product");
    }
    dispatch(reserveProductAction({ productId: id }));
  };

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

  const onSearchById = (e) => {
    dispatch(searchById(parseInt(e)));
  };
  const onSearchByMarket = (e) => {
    dispatch(searchByMarket(e));
  };
  const onSearchByKeyword = (e) => {
    dispatch(searchByKeyword(e));
  };
  const onSearchByCategory = (e) => {
    dispatch(searchByCategory(e));
  };

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
            onClear={() => dispatch(searchByMarket(""))}
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
            showSearch
            style={{ width: "100%" }}
            placeholder="Filter Category"
            onSelect={onSearchByCategory}
            allowClear
            onClear={() => dispatch(searchByCategory(""))}
          >
            {categories &&
              categories.map((category) => (
                <Option value={category.name}>{category.name}</Option>
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
          pagination={{ pageSize: 50 }}
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
  const { loading } = state.products;
  const { categories, markets } = state.appData;
  return {
    products: filterProducts(state.products),
    categories,
    markets,
    loading,
  };
};

export default connect(mapStateToProps)(Products);
