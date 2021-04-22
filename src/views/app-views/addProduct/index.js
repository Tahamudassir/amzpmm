import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Input, Upload, Button, Form, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import constants from "../../../constants/addProduct";
import { addProductAction } from "../../../redux/actions/Product";
import {
  getCategoryAction,
  getMarketsAction,
} from "../../../redux/actions/AppData";
import rules from "../../../constants/validationRules";
import { dummyRequest } from "../../../constants/DummyData";
import "./styles.css";

const AddProduct = (props) => {
  const { dispatch, loading, clearForm, markets, categories } = props;
  const [form] = Form.useForm();
  const [amazonImage, setAmazonImage] = useState(null);
  const [image, setImage] = useState(null);

  const { TextArea } = Input;
  const { Option } = Select;

  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getMarketsAction());
  }, []);

  useEffect(() => {
    if (clearForm) {
      form.resetFields();
      setAmazonImage(null);
      setImage(null);
    }
  }, [clearForm]);

  const onAddProduct = () => {
    form
      .validateFields()
      .then((values) => {
        // if (amazonImage === null || image === null) {
        //   message.error("Product images are required");
        // } else {
        let bodyFormData = new FormData();
        bodyFormData.append("brandName", values.brandName);
        bodyFormData.append("soldBy", values.soldBy);
        bodyFormData.append("chineseSeller", values.chineseSeller);
        bodyFormData.append("commission", values.commission);
        bodyFormData.append("commissionCondition", values.commissionCondition);
        bodyFormData.append("instructions", values.instructions);
        bodyFormData.append("keyword", values.keyword);
        bodyFormData.append("market", values.market);
        bodyFormData.append("productCategory", values.productCategory);
        bodyFormData.append("refundCondition", values.refundCondition);
        bodyFormData.append("saleLimitDay", values.saleLimitDay);
        bodyFormData.append("saleLimitOverall", values.saleLimitOverall);
        bodyFormData.append("systemCommission", values.systemCommission);
        bodyFormData.append("files", values.amazonImage.file.originFileObj);
        bodyFormData.append("files", values.image.file.originFileObj);
        dispatch(addProductAction(bodyFormData));
        // console.log("image", values.image);
        // }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
  // const onChangeAmazonImage = (info) => {
  //   setAmazonImage(info.file);
  // };
  // const onChangeImage = (info) => {
  //   setImage(info.file);
  // };
  // const removeImage = () => {
  //   setImage(null);
  //   return true;
  // };
  // const removeAmazonImage = () => {
  //   setAmazonImage(null);
  //   return true;
  // };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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
                <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
                <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                  <Form.Item name="soldBy" rules={rules.required} hasFeedback>
                    <Input placeholder="soldBy" />
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
                  <Form.Item
                    name="productCategory"
                    rules={rules.required}
                    hasFeedback
                  >
                    <Select placeholder="Select a category">
                      {categories &&
                        categories.map((category) => (
                          <Option value={category.name}>{category.name}</Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[0, { xs: 8, sm: 16, md: 0, lg: 0 }]}>
                <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                  <Form.Item name="market" rules={rules.required} hasFeedback>
                    <Select placeholder="Select a market">
                      {markets &&
                        markets.map((market) => (
                          <Option value={market.name}>{market.name}</Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
                <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                  <Form.Item name="chineseSeller" hasFeedback>
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
                  {/* <Upload
                    customRequest={dummyRequest}
                    onChange={onChangeAmazonImage}
                    listType="picture"
                    onRemove={removeAmazonImage}
                    accept="image/x-png,image/gif,image/jpeg"
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload> */}
                  <Form.Item
                    name="amazonImage"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={rules.imageRequired}
                  >
                    <Upload customRequest={dummyRequest} listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <p className="labelPicture">Picture</p>
                  {/* <Upload
                    customRequest={dummyRequest}
                    onChange={onChangeImage}
                    listType="picture"
                    accept="image/x-png,image/gif,image/jpeg"
                    onRemove={removeImage}
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload> */}
                  <Form.Item
                    name="image"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={rules.imageRequired}
                  >
                    <Upload
                      customRequest={dummyRequest}
                      listType="picture"
                      accept="image/x-png,image/gif,image/jpeg"
                    >
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
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
                  <Form.Item
                    name="instructions"
                    label="Instructions"
                    rules={rules.required}
                    hasFeedback
                    initialValue={constants.instructions}
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
                  <Form.Item
                    name="refundCondition"
                    label="Refund Condition"
                    rules={rules.required}
                    hasFeedback
                    initialValue={constants.refundCondition}
                  >
                    <Input.TextArea rows={4} placeholder="Refund Conditions" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    name="commissionCondition"
                    label="Commission Condition"
                    rules={rules.required}
                    initialValue={constants.commisionCondition}
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
  const { loading, clearForm } = state.products;
  const { categories, markets } = state.appData;
  return {
    loading,
    clearForm,
    categories,
    markets,
  };
};

export default connect(mapStateToProps)(AddProduct);
