import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import {
  Button,
  Input,
  Row,
  Col,
  Spin,
  Form,
  message,
  Upload,
  InputNumber,
  Select,
} from "antd";
import { SyncOutlined, EditOutlined, CopyOutlined } from "@ant-design/icons";
import copy from "copy-to-clipboard";
import {
  viewProductAction,
  editProductAction,
  editProductImageAction,
} from "../../../redux/actions/Product";
import {
  getCategoryAction,
  getMarketsAction,
} from "../../../redux/actions/AppData";
import rules from "../../../constants/validationRules";
import { dummyRequest } from "../../../constants/DummyData";
import Loading from "../../../components/Loading";
import "./styles.css";

const ProductDetails = (props) => {
  const { productDetail, loading, dispatch, uploading, categories, markets } =
    props;
  const [form] = Form.useForm();
  const [editProduct, setEditProduct] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(viewProductAction({ productId: id }));
    dispatch(getCategoryAction());
    dispatch(getMarketsAction());
  }, [id]);

  const switchEditProduct = () => {
    setEditProduct(!editProduct);
  };
  const onEditProduct = () => {
    form
      .validateFields()
      .then((values) => {
        if (
          values.saleLimitOverall !== productDetail.saleLimitOverall ||
          values.saleLimitDay !== productDetail.saleLimitDay
        ) {
          dispatch(
            editProductAction({
              ...values,
              id: productDetail._id,
              saleLimitDayLeft: values.saleLimitDay,
            })
          );
        } else {
          dispatch(editProductAction({ ...values, id: productDetail._id }));
        }
      })
      .catch((info) => {
        message.error("Validate Failed:", info);
      });
  };

  const onChangeAmazonImage = (info) => {
    let formData = new FormData();
    formData.append("amazonImage", info.file.originFileObj);
    const queryObj = {
      id: productDetail.productId,
      amazonImage: true,
      formData,
    };
    dispatch(editProductImageAction(queryObj));
  };
  const onChangeImage = (info) => {
    let formData = new FormData();
    formData.append("image", info.file.originFileObj);
    const queryObj = {
      id: productDetail.productId,
      amazonImage: false,
      formData,
    };
    dispatch(editProductImageAction(queryObj));
  };

  const copyFields = () => {
    if (productDetail) {
      let { soldBy, keyword, brandName } = productDetail;
      copy(
        "Keyword" +
          "\n" +
          keyword +
          "\n" +
          "\n" +
          "Brand Name" +
          "\n" +
          brandName +
          "\n" +
          "\n" +
          "Sold By" +
          "\n" +
          soldBy
      );
      message.success("copied to clipboard");
    }
  };

  const { Option } = Select;
  return (
    <>
      <div className="headingDetails">
        <p className="small">Overview</p>
        <h4 className="large">Product Details</h4>
      </div>
      {loading && <Loading />}
      {productDetail ? (
        <Row gutter={[0, 16]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="productImgCard">
              <div className="productImgWrapper">
                <h4>Product Picture</h4>
                <img
                  src={productDetail.image}
                  alt="product"
                  className="productDetailImg"
                />

                <Upload
                  customRequest={dummyRequest}
                  onChange={onChangeImage}
                  accept="image/x-png,image/gif,image/jpeg"
                  showUploadList={false}
                >
                  <Button
                    type="primary"
                    shape="round"
                    icon={<SyncOutlined />}
                    size="small"
                    className="changePic"
                    progress={false}
                  >
                    Change Pic
                  </Button>
                </Upload>
              </div>
              <div className="divider"></div>
              <div className="productImgWrapper">
                <h4>Amazon Picture</h4>
                <img
                  src={productDetail.amazonImage}
                  alt="product"
                  className="productDetailImg"
                />

                <Upload
                  customRequest={dummyRequest}
                  onChange={onChangeAmazonImage}
                  accept="image/x-png,image/gif,image/jpeg"
                  showUploadList={false}
                  progress={false}
                >
                  <Button
                    type="primary"
                    shape="round"
                    icon={<SyncOutlined />}
                    size="small"
                    className="changePic"
                  >
                    Change Pic
                  </Button>
                </Upload>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={15} lg={15} xl={15}>
            <div className="productDetailCard">
              <div className="header">
                <h4>Details</h4>
                {editProduct ? (
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size="small"
                    onClick={switchEditProduct}
                  >
                    Cancel{" "}
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size="small"
                    onClick={switchEditProduct}
                  >
                    Edit
                  </Button>
                )}
                <span
                  className="copyIcon"
                  style={{ fontSize: "20px" }}
                  onClick={copyFields}
                >
                  <CopyOutlined />
                </span>
              </div>
              {editProduct ? (
                <div className="bodyProductDetail">
                  <Form onFinish={onEditProduct} layout="vertical" form={form}>
                    <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                      <Col span={14}>
                        <Form.Item
                          name="keyword"
                          label="Keyword"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.keyword : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={9}>
                        <Form.Item
                          name="soldBy"
                          label="Sold By"
                          initialValue={
                            productDetail ? productDetail.soldBy : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={14}>
                        <Form.Item
                          name="brandName"
                          label="Brand Name"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.brandName : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={9}>
                        <Form.Item
                          name="productCategory"
                          label="Category"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.productCategory : ""
                          }
                        >
                          <Select placeholder="Select a category">
                            {categories &&
                              categories.map((category) => (
                                <Option value={category.name}>
                                  {category.name}
                                </Option>
                              ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          name="market"
                          label="Market"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.market : ""
                          }
                        >
                          <Select placeholder="Select a market">
                            {markets &&
                              markets.map((market) => (
                                <Option value={market.name}>
                                  {market.name}
                                </Option>
                              ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={15}>
                        <Form.Item
                          name="chineseSeller"
                          label="Chinese Seller"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.chineseSeller : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={11}>
                        <Form.Item
                          name="commission"
                          label="Commission"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.commission : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={11}>
                        <Form.Item
                          name="productId"
                          label="Product Id"
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.productId : ""
                          }
                        >
                          <Input disabled />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="instructions"
                          label="Instructions"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.instructions : ""
                          }
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="refundCondition"
                          label="Refund Condition"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.refundCondition : ""
                          }
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="commissionCondition"
                          label="Commission Condition"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            productDetail
                              ? productDetail.commissionCondition
                              : ""
                          }
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                      </Col>
                      <Col span={11}>
                        <Form.Item
                          name="saleLimitOverall"
                          label="Overall Sale Limit"
                          rules={rules.number}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.saleLimitOverall : 0
                          }
                        >
                          <InputNumber />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={11}>
                        <Form.Item
                          name="saleLimitDay"
                          label="Daily Sale Limit"
                          rules={rules.number}
                          hasFeedback
                          initialValue={
                            productDetail ? productDetail.saleLimitDay : 0
                          }
                        >
                          <InputNumber width="100%" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button
                      type="primary"
                      style={{ marginTop: "20px" }}
                      htmlType="submit"
                      loading={loading}
                    >
                      Update
                    </Button>
                  </Form>
                </div>
              ) : (
                <div className="bodyProductDetail">
                  <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                    <Col span={12}>
                      <h4>Keyword :</h4>
                      <p>{productDetail.keyword}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Sold By :</h4>
                      <p>{productDetail.soldBy}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Brand Name :</h4>
                      <p>{productDetail.brandName}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Seller Name :</h4>
                      <p>{productDetail.sellerFullName}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Market :</h4>
                      <p>{productDetail.market}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Commision :</h4>
                      <p>{productDetail.commission}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Chinese Seller :</h4>
                      <p>{productDetail.chineseSeller}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Product Category :</h4>
                      <p>{productDetail.productCategory}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Instructions :</h4>
                      <p>{productDetail.instructions}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Refund Condition :</h4>
                      <p>{productDetail.refundCondition}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Commision Condition :</h4>
                      <p>{productDetail.commissionCondition}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Product ID :</h4>
                      <p>{productDetail.productId}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Overall Sale Limit :</h4>
                      <p>{productDetail.saleLimitOverall}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Daily Sale Limit :</h4>
                      <p>{productDetail.saleLimitDay}</p>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </Col>
        </Row>
      ) : (
        <div className="loadingSpin">
          <Spin />
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ products, appData }) => {
  const { productDetail, loading, uploading } = products;
  const { categories, markets } = appData;
  return {
    productDetail,
    loading,
    uploading,
    categories,
    markets,
  };
};

export default connect(mapStateToProps)(ProductDetails);
