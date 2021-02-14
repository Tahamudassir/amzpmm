import React from "react";
import { Row, Col, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./styles.css";

const AddProduct = () => {
  const props = {
    name: "file",
    accept: "image/png, image/jpeg",
    customRequest: () => { },
    onChange(info) { },
  };
  const { TextArea } = Input;
  return (
    <>
      <h4 className="createProduct">Add Product</h4>
      <div className="cardAddProduct">
        <p className="labelAddProduct">
          Add New Product <span>(Seller ID is 71)</span>
        </p>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row style={rowStyle}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Input placeholder="Keyword" />
              </Col>
            </Row>
            <Row style={rowStyle} gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
              <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                <Input placeholder="Brand Name" />
              </Col>
              <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
              <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                <Input placeholder="AMZ Seller" />
              </Col>
            </Row>
            <Row style={rowStyle} gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
              <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                <Input placeholder="Market" />
              </Col>
              <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
              <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                <Input placeholder="Chinese Seller" />
              </Col>
            </Row>
            <Row style={rowStyle} gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <p className="labelPicture">Amazon Picture</p>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <p className="labelPicture">Picture</p>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </Col>
            </Row>
            <Row style={rowStyle}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Input placeholder="Commision" />
              </Col>
            </Row>
            <Row style={rowStyle}>
              <Input placeholder="System Commission" />
            </Row>
            <Row style={rowStyle}>
              <TextArea rows={4} placeholder="Instructions" />
            </Row>
          </Col>
          <Col xs={24} sm={24} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={11} lg={11} xl={11}>
            <Row style={rowStyle}>
              <TextArea rows={4} placeholder="Refund Conditions" />
            </Row>
            <Row style={rowStyle}>
              <TextArea rows={4} placeholder="Commision Conditions" />
            </Row>
            <Row style={rowStyle} gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Input placeholder="Sale limit per day" />
              </Col>
              <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
              <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                <Input placeholder="Overall sale limit " />
              </Col>
            </Row>
            <Button style={{ marginTop: "30px" }} type="primary">
              Add Now
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
const rowStyle = { marginBottom: "20px" };
export default AddProduct;
