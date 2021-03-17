import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Row, Col, Spin } from "antd";
import { viewProductAction } from "../../../redux/actions/Product";
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
      message: "This field must be a number",
    },
  ],
};

const ProductDetails = (props) => {
  const { productDetail, loading, dispatch } = props;
  const { id } = useParams();

  useEffect(() => {
    dispatch(viewProductAction({ productId: id }));
  }, [id]);

  return (
    <>
      <div className="headingDetails">
        <p className="small">Overview</p>
        <h4 className="large">Product Details</h4>
      </div>
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
              </div>
              <div className="divider"></div>
              <div className="productImgWrapper">
                <h4>Amazon Picture</h4>
                <img
                  src={productDetail.amazonImage}
                  alt="product"
                  className="productDetailImg"
                />
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={15} lg={15} xl={15}>
            <div className="productDetailCard">
              <div className="header">
                <h4>Details</h4>
              </div>
              <div className="bodyProductDetail">
                <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                  <Col span={12}>
                    <h4>Keyword :</h4>
                    <p>{productDetail.keyword}</p>
                  </Col>
                  <Col span={12}>
                    <h4>Sold By :</h4>
                    <p>{productDetail.brandName}</p>
                  </Col>
                  <Col span={12}>
                    <h4>Brand Name :</h4>
                    <p>{productDetail.brandName}</p>
                  </Col>
                  <Col span={12}>
                    <h4>Seller Name :</h4>
                    <p>{productDetail.sellerName}</p>
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

const mapStateToProps = ({ products }) => {
  const { productDetail, loading } = products;
  return {
    productDetail,
    loading,
  };
};

export default connect(mapStateToProps)(ProductDetails);
