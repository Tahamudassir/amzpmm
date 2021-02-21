import React from "react";
import { Row, Col, Input, Button, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./styles.css";

const rules = {
  email: [
    {
      required: true,
      message: "Please input customer email address",
    },
    {
      type: "email",
      message: "Please enter a valid email!",
    },
  ],
  required: [
    {
      required: true,
      message: "This field is required",
    },
  ],
  orderNumber: [
    {
      required: true,
      message: "This field is required",
    },
    {
      pattern: /^[0-9]+$/,
      message:
        "Phone number should not contain any characters other then numbers",
    },
  ],
};
const CreateOrder = () => {
  const [form] = Form.useForm();
  const onAddOrder = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("values", values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  return (
    <>
      <h4 className="createOrderTitle">Orders</h4>
      <div className="cardCreateOrder">
        <Row>
          <Col xs={24} sm={24} md={11} lg={11} xl={11}>
            <p className="labelAddNewOrder">Add New Order</p>
            <Form
              form={form}
              layout="vertical"
              name="register-form"
              onFinish={onAddOrder}
            >
              <Form.Item
                name="orderNumber"
                label="Order Number"
                rules={rules.orderNumber}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="customer_email"
                label="Customer Email Address"
                rules={rules.email}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="market"
                label="Market"
                rules={rules.required}
                hasFeedback
              >
                <Input />
              </Form.Item>
              {/* <Form.Item
          name="phone"
          label="AMZ Review Link"
          rules={rules.phone}
          hasFeedback
        >
          <Input />
        </Form.Item> */}
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Now
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              src="https://p2.piqsels.com/preview/705/161/167/adult-business-businesswoman-choices-thumbnail.jpg"
              alt="person discussing"
              style={{ borderRadius: "4px", width: "100%" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateOrder;
