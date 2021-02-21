import React from "react";
import { Row, Col, Space, Button, DatePicker, Select } from "antd";
import "./styles.css";

const CreateExcel = () => {
  const { Option } = Select;
  return (
    <>
      <h4 className="createExcel">Create Excel</h4>
      <div className="cardCreateExcel">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Space direction="vertical" size={12}>
                  <p className="labelDatePicker">From</p>
                  <DatePicker format="YYYY-MM-DD HH:mm:ss" />
                </Space>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Space direction="vertical" size={12}>
                  <p className="labelDatePicker">To</p>
                  <DatePicker format="YYYY-MM-DD HH:mm:ss" />
                </Space>
              </Col>
            </Row>
            <br />
            <Select
              showSearch
              style={{ width: 250 }}
              placeholder="Select Order Status"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Ordered</Option>
              <Option value="lucy">Reviewed</Option>
              <Option value="tom">Refunded</Option>
              <Option value="tom">On Hold</Option>
              <Option value="tom">Cancelled</Option>
              <Option value="tom">Completed</Option>
            </Select>
            <br />
            <Button style={{ marginTop: "30px" }} type="primary">
              Generate
            </Button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            {/* <img src="" alt="person discussing" /> */}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateExcel;
