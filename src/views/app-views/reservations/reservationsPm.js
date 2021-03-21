import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getReservationsPmAction,
  releaseProductAction,
} from "../../../redux/actions/Reservations";
import { Table, Button } from "antd";
import moment from "moment-timezone";
import "./styles.css";

const Reservations = (props) => {
  const { loading, reservations, dispatch } = props;

  useEffect(() => {
    dispatch(getReservationsPmAction());
  }, []);

  const history = useHistory();

  const columns = [
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
      render: (cell) => (
        <Button
          type="primary"
          className="btnViewOrder"
          size="small"
          onClick={() => history.push(`/create-order/${cell.productId}`)}
        >
          Create Order
        </Button>
      ),
    },
    {
      key: "id",
      render: (cell, row, index) => (
        <Button
          type="primary"
          className="deleteBtn"
          size="small"
          onClick={() => onReleaseProduct(cell)}
        >
          Release
        </Button>
      ),
    },
  ];

  const onReleaseProduct = (obj) => {
    let { productId, _id } = obj;
    dispatch(releaseProductAction({ productId, reservationId: _id }));
  };
  return (
    <>
      <h4 className="reserveTitle">Reserved Orders</h4>
      <div className="reserveProducts">
        <p>Active Reservations</p>
        <Table
          dataSource={reservations}
          columns={columns}
          scroll={{ x: true }}
          loading={loading}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { reservations, loading } = state.reservations;
  return {
    reservations,
    loading,
  };
};

export default connect(mapStateToProps)(Reservations);
