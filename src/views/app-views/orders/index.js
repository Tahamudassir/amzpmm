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
import UserInfo from "../../../components/UserInfo";
import moment from "moment-timezone";
import orderStatus from "../../../constants/orderStatus";
import "./styles.css";

const Orders = (props) => {
  // const { dispatch, orders, loading } = props;
  const { dispatch, orders, loading, total, sizePage, currentNumber } = props;
  const history = useHistory();
  const [status, setOrderStatus] = useState("All");
  const [current, setCurrent] = useState(currentNumber);
  const [orderId, setOrderId] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [productId, setProductId] = useState("");
  const [pageSize, setPageSize] = useState(sizePage);

  useEffect(() => {
    let params = new URLSearchParams(props.location.search);
    const number = params.get("pageNumber");
    console.log(number);
    if (number) {
      setCurrent(number);
    }
    dispatch(
      getOrdersAction({ status: "All", current: number ? number : 1, pageSize })
    );
  }, []);

  const navigateToDetails = (id) => {
    history.push(`/order-detail/${id}`);
  };

  const onChangeOrderStatus = (e) => {
    setOrderStatus(e);
    dispatch(getOrdersAction({ status: e }));
  };

  const onSearchByOrderId = (e) => {
    setCurrent(1);
    setCustomerEmail("");
    setProductId("");
    setOrderStatus("");
    setOrderId(e);
    dispatch(
      searchOrderById({ orderNumber: e, current: 1, pageSize, public: false })
    );
  };

  const onSearchByEmail = (e) => {
    setCurrent(1);
    setOrderId("");
    setProductId("");
    setOrderStatus("");
    setCustomerEmail(e);
    dispatch(
      searchOrderByCustomerEmail({
        customer_email: e,
        current: 1,
        pageSize,
        public: false,
      })
    );
  };

  const onSearchByProductId = (e) => {
    setOrderId("");
    setCurrent(1);
    setOrderStatus("");
    setCustomerEmail("");
    setProductId(e);
    dispatch(
      searchByProductId({ product_id: e, current: 1, pageSize, public: false })
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
      pathname: "/orders",
      search: `?pageNumber=${current}`,
    });
    setPageSize(pageSize);
    setCurrent(current);
    if (status) {
      return dispatch(
        dispatch(getOrdersAction({ status, current, public: false }))
      );
    }
    if (productId) {
      return dispatch(
        searchByProductId({
          product_id: productId,
          current,
          pageSize,
          public: false,
        })
      );
    }
    if (customerEmail) {
      dispatch(
        searchOrderByCustomerEmail({
          customer_email: customerEmail,
          current,
          pageSize,
          public: false,
        })
      );
    }
    if (orderId) {
      dispatch(
        searchOrderById({
          orderNumber: orderId,
          current,
          pageSize,
          public: false,
        })
      );
    }
  };
  const columns = [
    {
      title: "#",
      dataIndex: "",
      key: "id",
      render: (cell, row, index) => <>{index + 1}</>,
    },
    // {
    //   title: "User",
    //   dataIndex: "user",
    //   key: "id",
    // },
    {
      title: "PM Name",
      dataIndex: "User",
      key: "id",
      render: (user) => <UserInfo user={user} />,
    },
    {
      title: "Order No",
      dataIndex: "orderNumber",
      key: "id",
    },
    {
      title: "Product",
      dataIndex: "productImage",
      key: "id",
      render: (imageUrl) => (
        <img
          src={imageUrl}
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
          alt="prodcut"
        />
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
      title: "Created At",
      dataIndex: "createdAt",
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
  // const onSearchByOrderId = (e) => {
  //   dispatch(searchOrderById(e));
  // };

  // const onSearchByEmail = (e) => {
  //   dispatch(searchOrderByCustomerEmail(e));
  // };

  // const onSearchByProductId = (e) => {
  //   dispatch(searchByProductId(e));
  // };

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
            placeholder="Customer Email"
            enterButton
            allowClear
            onSearch={onSearchByEmail}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="Product ID"
            enterButton
            allowClear
            onSearch={onSearchByProductId}
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={5} lg={5} xl={5}>
          <Search
            placeholder="Order No"
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

const mapStateToProps = ({ orders }) => {
  const { loading } = orders;
  return {
    orders: orders.orders || [],
    loading,
  };
};

export default connect(mapStateToProps)(Orders);
