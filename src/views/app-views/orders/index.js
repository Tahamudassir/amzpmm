import React from 'react';
import { Table, Button, Row, Col, Select, Input } from "antd";
import { ordersSource } from "../../../constants/DummyData";
import "./styles.css";

const Orders = () => {
	const columns = [
		{
			title: '#',
			dataIndex: 'productNo',
			key: 'id',
		},
		{
			title: 'User',
			dataIndex: 'sellerName',
			key: 'id',
		},
		{
			title: 'Order No',
			dataIndex: 'orderNo',
			key: 'id',
		},
		{
			title: 'Product',
			dataIndex: 'productImg',
			key: 'id',
			render: (imageUrl) => <img src={imageUrl} style={{ width: "100px" }} alt="prodcut" />
		},
		{
			title: 'Customer Email',
			dataIndex: 'customerEmail',
			key: 'id',
		},
		{
			title: 'Market',
			dataIndex: 'market',
			key: 'id',
		},
		{
			title: 'Review Date',
			dataIndex: 'reviewDate',
			key: 'id',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'id',
		},
		{
			key: 'id',
			render: (cell, row, index) => <Button type="primary" className="btnViewOrder" size="small" onClick={() => alert(row.key)}>View</Button>
		},
	];
	const { Search } = Input;
	const { Option } = Select;
	return (
		<>
			<h4 className="ordersTitle">Orders</h4>
			<Row gutter={[0, { xs: 16, sm: 16, md: 16, lg: 0 }]} style={{ marginBottom: "20px" }} >
				<Col xs={24} sm={24} md={6} lg={6} xl={6} ><Search placeholder="Search by customer email" enterButton /></Col>
				<Col xs={0} sm={0} md={1} lg={1} xl={1} ></Col>
				<Col xs={24} sm={24} md={5} lg={5} xl={5}><Search placeholder="Search by product ID" enterButton /></Col>
				<Col xs={0} sm={0} md={1} lg={1} xl={1} ></Col>
				<Col xs={24} sm={24} md={5} lg={5} xl={5}>
					<Search placeholder="Search by order ID" enterButton />
				</Col>
				<Col xs={0} sm={0} md={1} lg={1} xl={1} ></Col>
				<Col xs={24} sm={24} md={5} lg={5} xl={5}>
					<Select
						style={{ width: "100%" }}
						placeholder="Order Status"
					>
						<Option value={1}>All</Option>
						<Option value={2}>Reviewed</Option>
						<Option value={3}>Review Submitted Pending Refund</Option>
						<Option value={4}>Review Deleted</Option>
						<Option value={5}>Refunded</Option>
						<Option value={6}>Refunded Pending</Option>
						<Option value={7}>On Hold</Option>
						<Option value={8}>Cancelled</Option>
						<Option value={9}>Commissioned</Option>
						<Option value={10}>Completed</Option>
					</Select>
				</Col>
			</Row>
			<div className="cardProducts">
				<Table dataSource={ordersSource} columns={columns} scroll={{ x: true }} />
			</div>
		</>
	)
}

export default Orders;
