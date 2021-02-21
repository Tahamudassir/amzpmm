import React from "react";
import { useHistory } from "react-router-dom";
import { Table, Button } from "antd";
import { reservationSource } from "../../../constants/DummyData";
import "./styles.css";
const Reservations = () => {
  const history = useHistory();

  const columns = [
    {
      title: "#",
      dataIndex: "orderNo",
      key: "id",
    },
    {
      title: "User",
      dataIndex: "sellerName",
      key: "id",
    },
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "id",
    },
    {
      title: "Creation Time",
      dataIndex: "creationTime",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "productImg",
      key: "id",
      render: (imageUrl) => (
        <img src={imageUrl} style={{ width: "100px" }} alt="prodcut" />
      ),
    },
    {
      key: "id",
      render: (cell, row, index) => (
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
          dataSource={reservationSource}
          columns={columns}
          scroll={{ x: true }}
        />
      </div>
    </>
  );
};

export default Reservations;
