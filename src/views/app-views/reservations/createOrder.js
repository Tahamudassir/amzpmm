import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Input, Button, Form, Upload, message, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { addNewOrderAction } from "../../../redux/actions/Orders";
import { getMarketsAction } from "../../../redux/actions/AppData";
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
      pattern: /^\w\d{2}-[-|]?\d{7}-[-|]?\d{7}$/,
      message: "Order number does not match the pattern xxx-xxxxxxx-xxxxxxx",
    },
  ],
};
const CreateOrder = (props) => {
  const { loading, dispatch, clearForm, markets } = props;
  const [form] = Form.useForm();
  const [orderPic, setOrderPic] = React.useState(null);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMarketsAction());
    if (clearForm) {
      form.resetFields();
      setOrderPic(null);
    }
  }, [clearForm]);

  useEffect(() => {
    dispatch(getMarketsAction());
  }, []);

  const setPic = (file) => {
    setOrderPic(file);
  };

  const onAddOrder = () => {
    form
      .validateFields()
      .then((values) => {
        if (orderPic === null) {
          message.error("Order Picture is required");
        }
        let bodyFormData = new FormData();
        bodyFormData.append("product_id", id);
        bodyFormData.append("orderNumber", values.orderNumber);
        bodyFormData.append("customer_email", values.customer_email);
        bodyFormData.append("market", values.market);
        bodyFormData.append("orderPic", orderPic.file);
        dispatch(addNewOrderAction(bodyFormData));
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  const { Option } = Select;
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
              <Form.Item name="market" rules={rules.required} hasFeedback>
                <Select placeholder="Select a market">
                  {markets &&
                    markets.map((market) => (
                      <Option value={market.name}>{market.name}</Option>
                    ))}
                </Select>
              </Form.Item>
              <div style={{ margin: "20px 0px" }}>
                <Upload
                  onChange={(file) => setPic(file)}
                  listType="picture"
                  accept="image/png, image/jpeg"
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
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
const mapStateToProps = (state) => {
  const { loading, clearForm } = state.orders;
  const { markets } = state.appData;
  return { loading, clearForm, markets };
};
export default connect(mapStateToProps)(CreateOrder);
