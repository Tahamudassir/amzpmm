import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Upload, Button, Form, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import constants from "../../../constants/addProduct";
import { addProductAction } from "../../../redux/actions/Product";
import "./styles.css";

const rules = {
  required: [
    {
      required: true,
      message: "This field is required",
    },
  ],
  number: [
    {
      required: true,
      message: "This field is required",
    },
    {
      type: "number",
      message: "This field should be a number",
    },
  ],
};
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

const AddProduct = (props) => {
  const [form] = Form.useForm();
  const { dispatch, loading } = props;
  const [amazonImage, setAmazonImage] = useState(null);
  const [image, setImage] = useState(null);

  const { TextArea } = Input;
  const { Option } = Select;

  const changeCommissionCondition = (value) => {
    let result = form.getFieldValue("commissionCondition") + value;
    form.setFieldsValue({
      commissionCondition: result,
    });
  };
  const changeRefundCondition = (value) => {
    let result = form.getFieldValue("refundCondition") + value;
    form.setFieldsValue({
      refundCondition: result,
    });
  };
  const changeInstructions = (value) => {
    let result = form.getFieldValue("instructions") + value;
    form.setFieldsValue({
      instructions: result,
    });
  };

  const onAddProduct = () => {
    form
      .validateFields()
      .then((values) => {
        if (amazonImage === null || image === null) {
          message.error("Product images are required");
        }
        let bodyFormData = new FormData();
        bodyFormData.append("brandName", values.brandName);
        bodyFormData.append("chineseSeller", values.chineseSeller);
        bodyFormData.append("commission", values.commission);
        bodyFormData.append("commissionCondition", values.commissionCondition);
        bodyFormData.append("instructions", values.instructions);
        bodyFormData.append("keyword", values.keyword);
        bodyFormData.append("market", values.market);
        bodyFormData.append("refundCondition", values.refundCondition);
        bodyFormData.append("saleLimitDay", values.saleLimitDay);
        bodyFormData.append("saleLimitOverall", values.saleLimitOverall);
        bodyFormData.append("systemCommission", values.systemCommission);
        bodyFormData.append("files", image.originFileObj);
        bodyFormData.append("files", amazonImage.originFileObj);
        dispatch(addProductAction(bodyFormData));
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  const onChangeAmazonImage = (info) => {
    setAmazonImage(info.file);
  };
  const onChangeImage = (info) => {
    setImage(info.file);
  };
  const removeImage = () => {
    setImage(null);
    return true;
  };
  const removeAmazonImage = () => {
    setAmazonImage(null);
    return true;
  };
  return (
    <>
      <h4 className="createProduct">Add Product</h4>
      <div className="cardAddProduct">
        <p className="labelAddProduct">Add New Product</p>
        <Form
          form={form}
          layout="vertical"
          name="add-product"
          onFinish={onAddProduct}
        >
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item name="keyword" rules={rules.required} hasFeedback>
                    <Input placeholder="Keyword" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                  <Form.Item
                    name="brandName"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Input placeholder="Brand Name" />
                  </Form.Item>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
                <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                  {/* <Form.Item
                    name="AMZSeller"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Input placeholder="AMZ Seller" />
                  </Form.Item> */}
                </Col>
              </Row>
              <Row gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
                <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                  <Form.Item name="market" rules={rules.required} hasFeedback>
                    <Input placeholder="Market" />
                  </Form.Item>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                  <Form.Item
                    name="chineseSeller"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Input placeholder="Chinese Seller" />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}
                style={rowStyle}
              >
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <p className="labelPicture">Amazon Picture</p>
                  <Upload
                    customRequest={dummyRequest}
                    onChange={onChangeAmazonImage}
                    listType="picture"
                    onRemove={removeAmazonImage}
                    accept="image/x-png,image/gif,image/jpeg"
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <p className="labelPicture">Picture</p>
                  <Upload
                    customRequest={dummyRequest}
                    onChange={onChangeImage}
                    listType="picture"
                    accept="image/x-png,image/gif,image/jpeg"
                    onRemove={removeImage}
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="commission"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Input placeholder="Commission" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    name="systemCommission"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Input placeholder="System Commission" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Select
                    placeholder="Select Instructions"
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={changeInstructions}
                  >
                    <Option value={constants.instructionOne}>
                      {constants.instructionOne}
                    </Option>
                    <Option value={constants.instructionTwo}>
                      {constants.instructionTwo}
                    </Option>
                    <Option value={constants.instructionThree}>
                      {constants.instructionThree}
                    </Option>
                    <Option value={constants.instructionFour}>
                      {constants.instructionFour}
                    </Option>
                    <Option value={constants.instructionFive}>
                      {constants.instructionFive}
                    </Option>
                    <Option value={constants.instructionSix}>
                      {constants.instructionSix}
                    </Option>
                  </Select>
                  <Form.Item
                    name="instructions"
                    rules={rules.required}
                    hasFeedback
                    initialValue=""
                  >
                    <Input.TextArea rows={4} placeholder="Instructions" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={1} lg={1} xl={1}></Col>
            <Col xs={24} sm={24} md={11} lg={11} xl={11}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Select
                    placeholder="Select Refund Conditions"
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={changeRefundCondition}
                  >
                    <Option value={constants.refundConditionOne}>
                      {constants.refundConditionOne}
                    </Option>
                    <Option value={constants.refundConditionTwo}>
                      {constants.refundConditionTwo}
                    </Option>
                  </Select>
                  <Form.Item
                    name="refundCondition"
                    rules={rules.required}
                    hasFeedback
                    initialValue=""
                  >
                    <Input.TextArea rows={4} placeholder="Refund Conditions" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Select
                    placeholder="Select Commision Conditions"
                    style={{ width: "100%", marginBottom: "10px" }}
                    onChange={changeCommissionCondition}
                  >
                    <Option value={constants.commssionConditionOne}>
                      {constants.commssionConditionOne}
                    </Option>
                    <Option value={constants.commsionCondtionTwo}>
                      {constants.commsionCondtionTwo}
                    </Option>
                  </Select>
                  <Form.Item
                    name="commissionCondition"
                    rules={rules.required}
                    initialValue=""
                    hasFeedback
                  >
                    <TextArea rows={4} placeholder="Commision Conditions" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="saleLimitDay"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Input placeholder="Sale limit per day" type="number" />
                  </Form.Item>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
                <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                  <Form.Item
                    name="saleLimitOverall"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Input type="number" placeholder="Overall sale limit " />
                  </Form.Item>
                </Col>
              </Row>
              <Button
                style={{ marginTop: "30px" }}
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                Add Now
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};
const rowStyle = { marginBottom: "20px" };

const mapStateToProps = (state) => {
  const { loading } = state.products;
  return {
    loading,
  };
};

export default connect(mapStateToProps)(AddProduct);
