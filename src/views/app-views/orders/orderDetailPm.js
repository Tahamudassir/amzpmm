import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Button, Input, Row, Col, Form, message, Select } from "antd";
import { SyncOutlined, EditOutlined } from "@ant-design/icons";
import {
  viewOrderAction,
  editOrderAction,
  editOrderPicAction,
} from "../../../redux/actions/Orders";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import moment from "moment-timezone";
import Loading from "../../../components/Loading";
import rules from "../../../constants/validationRules";
import orderStatus from "../../../constants/orderStatus";
import "./styles.css";

const OrderDetailPm = (props) => {
  // ref to image inputs
  let orderImg = null;
  let reviewImg = null;
  let refundImg = null;

  const { orderDetail, loading, dispatch } = props;
  const { id } = useParams();
  const [form] = Form.useForm();
  const [editOrder, setEditOrder] = useState(false);

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
        dispatch(editOrderAction({ id: orderDetail._id, ...values }));
      })
      .catch((info) => {
        message.error("Validate Failed:", info);
      });
  };

  //click handlers to trigger file input
  const onOrderImgBtnClick = () => orderImg.click();
  const onRefundImgBtnClick = () => refundImg.click();
  const onReviewImgBtnClick = () => reviewImg.click();

  const onChangeOrderImage = (info) => {
    let formData = new FormData();
    formData.append("image", info.target.files[0]);

    const queryObj = {
      id: orderDetail.orderNumber,
      image: formData,
      orderPicType: "Order",
    };
    dispatch(editOrderPicAction(queryObj));
    orderImg.value = null;
  };

  const onChangeRefundImage = (info) => {
    let formData = new FormData();
    formData.append("image", info.target.files[0]);

    const queryObj = {
      id: orderDetail.orderNumber,
      image: formData,
      orderPicType: "Refund",
    };
    dispatch(editOrderPicAction(queryObj));
    refundImg.value = null;
  };

  const onChangeReviewImage = (info) => {
    let formData = new FormData();
    formData.append("image", info.target.files[0]);

    const queryObj = {
      id: orderDetail.orderNumber,
      image: formData,
      orderPicType: "Review",
    };
    dispatch(editOrderPicAction(queryObj));
    reviewImg.value = null;
  };

  const copyFields = () => {
    if (orderDetail) {
      let { orderNumber, customer_email } = orderDetail;
      copy(
        "Order No" +
          "\n" +
          orderNumber +
          "\n" +
          "\n" +
          "Brand Name" +
          "\n" +
          customer_email
      );
      message.success("copied to clipboard");
    }
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
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={onChangeOrderImage}
                  ref={(input) => (orderImg = input)}
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={(input) => (refundImg = input)}
                  onChange={onChangeRefundImage}
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={(input) => (reviewImg = input)}
                  onChange={onChangeReviewImage}
                />
                <img
                  src={orderDetail.orderPic}
                  alt="product"
                  className="productDetailImg"
                />

                <Button
                  type="primary"
                  shape="round"
                  icon={<SyncOutlined />}
                  size="small"
                  className="changePic"
                  onClick={onOrderImgBtnClick}
                >
                  Change Pic
                </Button>
              </div>
              <div className="divider"></div>
              <div className="productImgWrapper">
                <h4>Refund Picture</h4>
                {orderDetail && orderDetail.refundPic && (
                  <img
                    src={orderDetail.refundPic}
                    alt="product"
                    className="productDetailImg"
                  />
                )}
              </div>
              <div className="divider"></div>
              <div className="productImgWrapper">
                <h4>Review Picture</h4>
                {orderDetail && orderDetail.reviewPic && (
                  <img
                    src={orderDetail.reviewPic}
                    alt="product"
                    className="productDetailImg"
                  />
                )}
                <Button
                  type="primary"
                  shape="round"
                  icon={<SyncOutlined />}
                  size="small"
                  className="changePic"
                  onClick={onReviewImgBtnClick}
                >
                  Change Pic
                </Button>
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
                    Cancel
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
                <span
                  className="copyIcon"
                  style={{ fontSize: "20px" }}
                  onClick={copyFields}
                >
                  <CopyOutlined />
                </span>
              </div>
              {editOrder ? (
                <div className="bodyProductDetail">
                  <Form onFinish={onEditOrder} layout="vertical" form={form}>
                    <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                      <Col span={15}>
                        <Form.Item
                          name="customer_email"
                          label="Customer Email"
                          initialValue={
                            orderDetail ? orderDetail.customer_email : ""
                          }
                        >
                          <Input disabled />
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={8}>
                        <Form.Item
                          name="reviewLink"
                          label="AMZ Review Link"
                          hasFeedback
                          initialValue={
                            orderDetail && orderDetail.reviewLink
                              ? orderDetail.reviewLink
                              : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={11}>
                        <Form.Item
                          name="orderstatus"
                          label="Order Status"
                          rules={rules.required}
                          hasFeedback
                          initialValue={
                            orderDetail ? orderDetail.orderstatus : ""
                          }
                        >
                          <Select>
                            <Option value={orderStatus[1]}>
                              {orderStatus[1]}
                            </Option>
                            <Option value={orderStatus[2]}>
                              {orderStatus[2]}
                            </Option>
                            <Option value={orderStatus[8]}>
                              {orderStatus[8]}
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={1} />
                      <Col span={12}>
                        <Form.Item
                          name="orderNumber"
                          label="Order Number"
                          hasFeedback
                          initialValue={
                            orderDetail && orderDetail.orderNumber
                              ? orderDetail.orderNumber
                              : ""
                          }
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="remarks"
                          label="Remarks"
                          hasFeedback
                          initialValue={
                            orderDetail && orderDetail.remarks
                              ? orderDetail.remarks
                              : ""
                          }
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button
                      type="primary"
                      style={{ marginTop: "20px" }}
                      htmlType="submit"
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
                      <h4>Brand Name :</h4>
                      <p>{orderDetail.customer_email}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Product Id :</h4>
                      <p>{orderDetail.product_id}</p>
                    </Col>
                    <Col span={12}>
                      <h4>AMZ Review Link :</h4>
                      <p>{orderDetail.reviewLink}</p>
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
                      <p>
                        {moment(orderDetail.createdAt).format("DD-MM-YYYY")}
                      </p>
                    </Col>
                    <Col span={12}>
                      <h4>Review Date :</h4>
                      {orderDetail.reviewDate && (
                        <p>
                          {moment(orderDetail.reviewDate).format("DD-MM-YYYY")}
                        </p>
                      )}
                    </Col>
                    <Col span={12}>
                      <h4>Refund Date :</h4>
                      {orderDetail.refundate && (
                        <p>
                          {moment(orderDetail.refundate).format("DD-MM-YYYY")}
                        </p>
                      )}
                    </Col>
                    <Col span={12}>
                      <h4>Last Update :</h4>
                      <p>
                        {moment(orderDetail.updatedAt).format("DD-MM-YYYY")}
                      </p>
                    </Col>
                    <Col span={12}>
                      <h4>Seller Id:</h4>
                      <p>{orderDetail.sellerId}</p>
                    </Col>
                    <Col span={12}>
                      <h4>Commission :</h4>
                      <p>{orderDetail.commission}</p>
                    </Col>
                    <Col span={24}>
                      <h4>Remarks :</h4>
                      <p>{orderDetail.remarks}</p>
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
  const { orderDetail, loading } = orders;
  return {
    orderDetail,
    loading,
  };
};

export default connect(mapStateToProps)(OrderDetailPm);
