import React from 'react';
import { useHistory } from "react-router-dom";
import { Table, Button, Row, Col, Select, Input } from "antd";
import { EyeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { dataSource } from "../../../constants/DummyData";
import "./styles.css";

const Products = () => {
	const history = useHistory();
	const navigateToAddProduct = () => {
		history.push("/app/add-product");
	}
	const navigateToDetails = () => {
		history.push("/app/product-details");
	}

	const columns = [
		{
			title: 'Seller Name',
			dataIndex: 'sellerName',
			key: 'id',
		},
		{
			title: 'Market',
			dataIndex: 'market',
			key: 'id',
		},
		{
			title: 'Sale Limit',
			dataIndex: 'saleLimit',
			key: 'id',
		},
		{
			title: 'Remaining Order',
			dataIndex: 'remainingOrder',
			key: 'id',
		},
		{
			title: 'Keyword',
			dataIndex: 'keyword',
			key: 'id',
		},
		{
			title: 'Product ID',
			dataIndex: 'productId',
			key: 'id',
		},
		{
			title: 'Image',
			dataIndex: 'image',
			key: 'id',
			render: (imageUrl) => <img src={imageUrl} style={{ width: "100px" }} alt="prodcut" />
		},
		{
			title: '',
			dataIndex: '',
			key: 'id',
			render: (cell, row, index) => <Button type="primary" className="btnAddProduct" size="small" onClick={navigateToDetails} icon={<EyeOutlined />}>View</Button>
		},
		{
			title: '',
			dataIndex: '',
			key: 'id',
			render: () => <Button type="primary" size="small">Enabled</Button>
		},
	];
	const { Search } = Input;
	const { Option } = Select;
	return (
		<>
			<div className="headerProducts">
				<h4 className="productsTitle">Products</h4>
				<Button type="primary" size="small" className="btnAddProduct" onClick={navigateToAddProduct} icon={<PlusCircleOutlined />}>Add Product</Button>
			</div>
			<Row gutter={[0, { xs: 16, sm: 16, md: 16, lg: 0 }]} style={{ marginBottom: "20px" }} >
				<Col xs={24} sm={24} md={6} lg={6} xl={6} ><Search placeholder="Search by product code" enterButton /></Col>
				<Col xs={0} sm={0} md={1} lg={1} xl={1} ></Col>
				<Col xs={24} sm={24} md={5} lg={5} xl={5}><Search placeholder="Search by keyword" enterButton /></Col>
				<Col xs={0} sm={0} md={1} lg={1} xl={1} ></Col>
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
				<Col xs={0} sm={0} md={1} lg={1} xl={1} ></Col>
				<Col xs={24} sm={24} md={5} lg={5} xl={5}>
					<Select
						style={{ width: "100%" }}
						placeholder="Products Status"
						defaultValue="Enabled"

					>
						<Option value="enabled">Enabled</Option>
						<Option value="disabled">Disabled</Option>
					</Select>
				</Col>
			</Row>
			<div className="cardProducts">
				<Table dataSource={dataSource} columns={columns} scroll={{ x: true }} />
			</div>
		</>
	)
}

export default Products;
