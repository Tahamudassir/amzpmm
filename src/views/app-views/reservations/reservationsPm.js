import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getReservationsPmAction } from "../../../redux/actions/Reservations";
import { Table, Button } from "antd";
import moment from "moment-timezone";
import "./styles.css";

const Reservations = (props) => {
  const { loading, reservedOrdersPm, dispatch } = props;

  useEffect(() => {
    dispatch(getReservationsPmAction());
  }, []);

  const history = useHistory();

  const columns = [
    // {
    //   title: "#",
    //   dataIndex: "orderNo",
    //   key: "id",
    // },
    {
      title: "User",
      dataIndex: "user",
      key: "id",
    },
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "id",
    },
    {
      title: "Creation Time",
      dataIndex: "createdAt",
      key: "id",
      render: (createdAt) => moment(createdAt).format("DD-MM-YYYY, h:mm a"),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "id",
      render: (imageUrl) => (
        <img src={imageUrl} style={{ width: "100px" }} alt="order" />
      ),
    },
    {
      key: "id",
      render: () => (
        <Button
          type="primary"
          className="btnViewOrder"
          size="small"
          onClick={() => history.push("/create-order")}
        >
          Create Order
        </Button>
      ),
    },
    {
      key: "id",
      render: (cell, row, index) => (
        <Button type="primary" className="btnViewOrder" size="small">
          Release
        </Button>
      ),
    },
  ];
  return (
    <>
      <h4 className="reserveTitle">Reserved Orders</h4>
      <div className="reserveProducts">
        <p>Active Reservations</p>
        <Table
          dataSource={reservedOrdersPm}
          columns={columns}
          scroll={{ x: true }}
          loading={loading}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { reservedOrdersPm, loading } = state.reservations;
  return {
    reservedOrdersPm,
    loading,
  };
};

export default connect(mapStateToProps)(Reservations);
