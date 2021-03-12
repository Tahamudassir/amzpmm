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
  Select,
} from "antd";
import { SyncOutlined, EditOutlined } from "@ant-design/icons";
import {
  viewOrderAction,
  editOrderAction,
  editOrderPicAction,
} from "../../../redux/actions/Orders";
import Loading from "../../../components/Loading";
import rules from "../../../constants/validationRules";
import { dummyRequest } from "../../../constants/DummyData";
import "./styles.css";

const OrderDetailPm = (props) => {
  const { orderDetail, loading, dispatch } = props;
  const [form] = Form.useForm();
  const [editOrder, setEditOrder] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(viewOrderAction({ orderid: id }));
  }, [id]);

  const switchEditOrder = () => {
    setEditOrder(!editOrder);
  };

  const onEditOrder = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(editOrderAction(values));
      })
      .catch((info) => {
        message.error("Validate Failed:", info);
      });
  };

  const onChangeOrderImage = (info) => {
    let formData = new FormData();
    formData.append("image", info.file.originFileObj);
    const queryObj = {
      id: orderDetail.product_id,
      image: formData,
      orderPicType: "Order",
    };
    dispatch(editOrderPicAction(queryObj));
  };

  const onChangeRefundImage = (info) => {
    let formData = new FormData();
    formData.append("image", info.file.originFileObj);
    const queryObj = {
      id: orderDetail.product_id,
      image: formData,
      orderPicType: "Refund",
    };
    dispatch(editOrderPicAction(queryObj));
  };
  const onChangeReviewImage = (info) => {
    let formData = new FormData();
    formData.append("image", info.file.originFileObj);
    const queryObj = {
      id: orderDetail.product_id,
      image: formData,
      orderPicType: "Review",
    };
    dispatch(editOrderPicAction(queryObj));
  };

  const onStatusChanged = (value) => {
    form.setFieldsValue({
      orderstatus: value,
    });
  };
  const { Option } = Select;
  return (
    <>
      <div className="headingDetails">
        <p className="small">Overview</p>
        <h4 className="large">Order Details</h4>
      </div>
      {loading && <Loading />}
      {orderDetail ? (
        <Row gutter={[0, 16]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className="productImgCard">
              <div className="productImgWrapper">
                <h4>Order Picture</h4>
                <img
                  src={orderDetail.orderPic}
                  alt="product"
                  className="productDetailImg"
                />

                <Upload
                  customRequest={dummyRequest}
                  onChange={onChangeOrderImage}
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
                <h4>Refund Picture</h4>
                <img
                  src={orderDetail.orderPic}
                  alt="product"
                  className="productDetailImg"
                />

                <Upload
                  customRequest={dummyRequest}
                  onChange={onChangeRefundImage}
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
              <div className="divider"></div>
              <div className="productImgWrapper">
                <h4>Review Picture</h4>
                <img
                  src={orderDetail.orderPic}
                  alt="product"
                  className="productDetailImg"
                />

                <Upload
                  customRequest={dummyRequest}
                  onChange={onChangeReviewImage}
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
                {editOrder ? (
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size="small"
                    onClick={switchEditOrder}
                  >
                    Cancel{" "}
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size="small"
                    onClick={switchEditOrder}
                  >
                    Edit
                  </Button>
                )}
              </div>
              {editOrder ? (
                <div className="bodyProductDetail">
                  <Form onFinish={onEditOrder} layout="vertical" form={form}>
                    <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                      <Col span={15}>
                        <Form.Item
                          name="customer_email"
                          label="Customer Email"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            orderDetail ? orderDetail.customer_email : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={8}>
                        <Form.Item
                          name="amzreviewlink"
                          label="AMZ Review Link"
                          // rules={rules.required}
                          hasFeedback
                          // initialValue={
                          //   orderDetail ? orderDetail.amzreviewlink : ""
                          // }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={11}>
                        <Form.Item
                          name="market"
                          label="Market"
                          rules={rules.required}
                          hasFeedback
                          initialValue={orderDetail ? orderDetail.market : ""}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={12}>
                        <Form.Item
                          name="orderstatus"
                          label="Order Status"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            orderDetail ? orderDetail.orderstatus : ""
                          }
                        >
                          <Select onChange={onStatusChanged}>
                            <Option value="male">Completed</Option>
                            <Option value="female">Reviewed</Option>
                            <Option value="female">Ordered</Option>
                            <Option value="female">
                              Review Submitted Pending Refund
                            </Option>
                            <Option value="female">Refunded</Option>
                            <Option value="female">
                              Refunded Pending Review
                            </Option>
                            <Option value="female">On Hold</Option>
                            <Option value="female">Review Deleted</Option>
                            <Option value="female">Cancelled</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="remarks"
                          label="Remarks"
                          hasFeedback
                          initialValue={orderDetail ? orderDetail.remarks : ""}
                        >
                          <Input.TextArea rows={4} />
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
                      <h4>Order Number :</h4>
                      <p>{orderDetail.orderNumber}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Product Id :</h4>
                      <p>{orderDetail.product_id}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Customer Email :</h4>
                      <p>{orderDetail.customer_email}</p>
                    </Col>
                    <Col span={12}>
                      <h4>AMZ Review Link :</h4>
                      {/* <p>{productDetail.sellerName}</p> */}
                    </Col>
                    <Col span={12}>
                      <h4>Market :</h4>
                      <p>{orderDetail.market}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Order Status :</h4>
                      <p>{orderDetail.orderstatus}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Order Date :</h4>
                      {/* <p>{productDetail.chineseSeller}</p> */}
                    </Col>
                    <Col span={12}>
                      <h4>Review Date :</h4>
                      {/* <p>{orderDetail.reviewDate}</p> */}
                    </Col>
                    <Col span={12}>
                      <h4>Refund Date :</h4>
                      {/* <p>{orderDetail.refundDate}</p> */}
                    </Col>
                    <Col span={12}>
                      <h4>Last Update :</h4>
                      {/* <p>{productDetail.lastUpdate}</p> */}
                    </Col>
                    <Col span={12}>
                      <h4>Seller ID :</h4>
                      {/* <p>{productDetail.sellerId}</p> */}
                    </Col>
                    <Col span={12}>
                      <h4>Commission :</h4>
                      {/* <p>{orderDetail.commission}</p> */}
                    </Col>
                    <Col span={24}>
                      <h4>Remarks :</h4>
                      {/* <p>{orderDetail.saleLimitDay}</p> */}
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </Col>
        </Row>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = ({ orders }) => {
  const { orderDetail, loading, uploading } = orders;
  return {
    orderDetail,
    loading,
    uploading,
  };
};

export default connect(mapStateToProps)(OrderDetailPm);
