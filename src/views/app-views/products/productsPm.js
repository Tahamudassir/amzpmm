import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button, Row, Col, Select, Input, Spin } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import { getProductsAction } from "../../../redux/actions/Product";
import { reserveProductAction } from "../../../redux/actions/Reservations";
import UserInfo from "../../../components/UserInfo";
import "./styles.css";

const Products = (props) => {
  const { dispatch, products, loading, reserving } = props;
  const [productStatus, setProductStatus] = useState("Enabled");
  const history = useHistory();

  useEffect(() => {
    dispatch(getProductsAction({ status: "Enabled" }));
  }, []);

  const changeProductStatus = (e) => {
    setProductStatus(e);
    dispatch(getProductsAction({ status: e }));
  };

  const onReserveProduct = (id) => {
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
      dataIndex: "saleLimitDay",
      key: "id",
    },
    {
      title: "Commision",
      dataIndex: "commission",
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
            onReserveProduct(cell.productId);
          }}
          icon={<EditOutlined />}
        >
          Reserve
        </Button>
      ),
    },
  ];
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
          <Search placeholder="Search by product code" enterButton />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search placeholder="Search by keyword" enterButton />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Select Market"
          >
            <Option value="jack">DE</Option>
            <Option value="lucy">UK</Option>
            <Option value="tom">USA</Option>
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
      </Row>
      <div className="cardProducts">
        <Table
          dataSource={products}
          columns={columns}
          scroll={{ x: true }}
          loading={loading}
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
  const { products, loading } = state.products;
  const { reserving } = state.reservations;
  return {
    products,
    loading,
    reserving,
  };
};

export default connect(mapStateToProps)(Products);
