import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Button, Row, Col, Select, Input } from "antd";
import {
  getOrdersAction,
  searchOrderById,
  searchOrderByCustomerEmail,
  searchByProductId,
} from "../../../redux/actions/Orders";
import { filterOrders } from "../../../redux/selectors";
import moment from "moment-timezone";
import orderStatus from "../../../constants/orderStatus";
import "./styles.css";

const Orders = (props) => {
  const { dispatch, orders, loading } = props;
  const history = useHistory();
  const [status, setOrderStatus] = useState("All");

  useEffect(() => {
    dispatch(getOrdersAction({ status: "All" }));
  }, []);

  const navigateToDetails = (id) => {
    history.push(`/order-detail/${id}`);
  };

  const onChangeOrderStatus = (e) => {
    setOrderStatus(e);
    dispatch(getOrdersAction({ status: e }));
  };

  const columns = [
    {
      title: "#",
      dataIndex: "orderNumber",
      key: "id",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "id",
    },
    {
      title: "Order No",
      dataIndex: "orderNumber",
      key: "id",
    },
    {
      title: "Product",
      dataIndex: "orderPic",
      key: "id",
      render: (imageUrl) => (
        <img src={imageUrl} style={{ width: "100px" }} alt="prodcut" />
      ),
    },
    {
      title: "Customer Email",
      dataIndex: "customer_email",
      key: "id",
    },
    {
      title: "Market",
      dataIndex: "market",
      key: "id",
    },
    {
      title: "Review Date",
      dataIndex: "updatedAt",
      key: "id",
      render: (date) => moment(date).format("DD-MM-YYYY"),
    },
    {
      title: "Status",
      dataIndex: "orderstatus",
      key: "id",
    },
    {
      key: "id",
      render: (cell) => (
        <Button
          type="primary"
          className="btnViewOrder"
          size="small"
          onClick={() => navigateToDetails(cell._id)}
        >
          View
        </Button>
      ),
    },
  ];
  const onSearchByOrderId = (e) => {
    dispatch(searchOrderById(e));
  };

  const onSearchByEmail = (e) => {
    dispatch(searchOrderByCustomerEmail(e));
  };

  const onSearchByProductId = (e) => {
    dispatch(searchByProductId(e));
  };

  const { Search } = Input;
  const { Option } = Select;
  return (
    <>
      <h4 className="ordersTitle">Orders</h4>
      <Row
        gutter={[0, { xs: 16, sm: 16, md: 16, lg: 0 }]}
        style={{ marginBottom: "20px" }}
      >
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Search
            placeholder="Search by customer email"
            enterButton
            allowClear
            onSearch={onSearchByEmail}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="Search by product ID"
            enterButton
            allowClear
            onSearch={onSearchByProductId}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="Search by order No"
            enterButton
            allowClear
            onSearch={onSearchByOrderId}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Select
            style={{ width: "100%" }}
            placeholder="Order Status"
            value={status}
            onChange={onChangeOrderStatus}
          >
            <Option value={orderStatus[0]}>{orderStatus[0]}</Option>
            <Option value={orderStatus[1]}>{orderStatus[1]}</Option>
            <Option value={orderStatus[2]}>{orderStatus[2]}</Option>
            <Option value={orderStatus[3]}>{orderStatus[3]}</Option>
            <Option value={orderStatus[4]}>{orderStatus[4]}</Option>
            <Option value={orderStatus[5]}> {orderStatus[5]}</Option>
            <Option value={orderStatus[6]}>{orderStatus[6]}</Option>
            <Option value={orderStatus[7]}>{orderStatus[7]}</Option>
            <Option value={orderStatus[8]}>{orderStatus[8]}</Option>
            <Option value={orderStatus[9]}>{orderStatus[9]}</Option>
          </Select>
        </Col>
      </Row>
      <div className="cardProducts">
        <Table
          dataSource={orders}
          columns={columns}
          scroll={{ x: true }}
          loading={loading}
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ orders }) => {
  const { loading } = orders;
  return {
    orders: filterOrders(orders),
    loading,
  };
};

export default connect(mapStateToProps)(Orders);
