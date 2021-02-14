import React from 'react';
import { Table, Button } from "antd";
import { reservationSource } from "../../../constants/DummyData";
import "./styles.css";
const Reservations = () => {
	const columns = [
		{
			title: '#',
			dataIndex: 'orderNo',
			key: 'id',
		},
		{
			title: 'User',
			dataIndex: 'sellerName',
			key: 'id',
		},
		{
			title: 'Product ID',
			dataIndex: 'productId',
			key: 'id',
		},
		{
			title: 'Creation Time',
			dataIndex: 'creationTime',
			key: 'id',
		},
		{
			title: 'Image',
			dataIndex: 'productImg',
			key: 'id',
			render: (imageUrl) => <img src={imageUrl} style={{ width: "100px" }} alt="prodcut" />
		},
		{
			key: 'id',
			render: (cell, row, index) => <Button type="primary" className="btnViewOrder" size="small" onClick={() => alert(row.key)}>View</Button>
		},
	];
	return (
		<>
			<h4 className="reserveTitle">Reserved Orders</h4>
			<div className="reserveProducts">
				<p>Active Reservations</p>
				<Table dataSource={reservationSource} columns={columns} scroll={{ x: true }} />
			</div>
		</>
	)
}

export default Reservations;
