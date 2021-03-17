import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Row, Col, Select, Input } from "antd";
import {
  getProductsPmAction,
  searchById,
  searchByMarket,
  searchByKeyword,
  searchByCategory,
} from "../../../redux/actions/Product";
import {
  getMarketsAction,
  getCategoryAction,
} from "../../../redux/actions/AppData";
import { filterProducts } from "../../../redux/selectors";
import UserInfo from "../../../components/UserInfo";
import "./style.css";

const Products = (props) => {
  const { dispatch, products, loading, categories, markets } = props;

  useEffect(() => {
    dispatch(getProductsPmAction({ status: "Enabled", public: true }));
    dispatch(getMarketsAction());
    dispatch(getCategoryAction());
  }, []);

  const columns = [
    {
      title: "Seller Name",
      dataIndex: "User",
      key: "id",
      render: (user) => <UserInfo user={user} />,
    },
    // {
    //   title: "Seller Name",
    //   dataIndex: "sellerName",
    //   key: "id",
    // },
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
      dataIndex: "saleLimitDay",
      key: "id",
    },
    {
      title: "Commision",
      dataIndex: "commission",
      key: "id",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "id",
    },
    {
      title: "Keyword",
      dataIndex: "keyword",
      key: "id",
    },
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "id",
      render: (imageUrl) => (
        <img src={imageUrl} style={{ width: "100px" }} alt="prodcut" />
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
    <div className="publicProducts">
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
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.products;
  const { categories, markets } = state.appData;

  return {
    products: filterProducts(state.products),
    loading,
    categories,
    markets,
  };
};

export default connect(mapStateToProps)(Products);
