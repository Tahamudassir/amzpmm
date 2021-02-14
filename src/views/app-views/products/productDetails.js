import React, { useState } from "react";
import { Button, Input, Row, Col } from "antd";
import { SyncOutlined, EditOutlined } from "@ant-design/icons";
import "./styles.css";

const imageUrl = "https://amzmarketings.com/global_admin/public/assets/images/products/picture/6591/1611578010.png"
const ProductDetails = () => {
    const [editProduct, setEditProduct] = useState(false);
    const switchEditProduct = () => {
        setEditProduct(!editProduct);
    }
    const { TextArea } = Input;
    return (
        <div>
            <div className="headingDetails">
                <p className="small">Overview</p>
                <h4 className="large">Product Details</h4>
            </div>
            <Row gutter={[0, 16]}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <div className="productImgCard">
                        <div className="productImgWrapper">
                            <h4>Product Picture</h4>
                            <img src={imageUrl} alt="product" className="productDetailImg" />
                            <Button
                                type="primary"
                                shape="round"
                                icon={<SyncOutlined />}
                                size="small"
                                className="changePic"
                            >
                                Change Pic
              </Button>
                        </div>
                        <div className="divider"></div>
                        <div className="productImgWrapper">
                            <h4>Amazon Picture</h4>
                            <img src={imageUrl} alt="product" className="productDetailImg" />
                            <Button
                                type="primary"
                                shape="round"
                                icon={<SyncOutlined />}
                                size="small"
                                className="changePic"
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
                            {editProduct ? <Button
                                type="primary"
                                icon={<EditOutlined />}
                                size="small"
                                onClick={switchEditProduct}
                            >
                                Cancel   </Button> :
                                <Button
                                    type="primary"
                                    icon={<EditOutlined />}
                                    size="small"
                                    onClick={switchEditProduct}
                                >
                                    Edit </Button>
                            }
                        </div>
                        {editProduct ? <div className="bodyProductDetail">
                            <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                                <Col span={15}>
                                    <Input value="Indoor TV Ariel" />
                                </Col>
                                <Col span={1} />
                                <Col span={8}>
                                    <Input value="71" />
                                </Col>
                                <Col span={15}>
                                    <Input value="the Billing Store" />

                                </Col>
                                <Col span={1} />
                                <Col span={8}>
                                    <Input value="lc smarts" />
                                </Col>
                                <Col span={8}>
                                    <Input value="UK" />
                                </Col>
                                <Col span={1} />
                                <Col span={15}>
                                    <Input placeholder="Chinese Seller" />
                                </Col>
                                <Col span={12}>
                                    <Input value="525" />
                                </Col>
                                <Col span={12}>
                                </Col>
                                <Col span={24}>
                                    <TextArea rows={4} value="Star positive review needed of 2-3 li" />
                                </Col>
                                <Col span={24}>
                                    <TextArea rows={4} value="Star positive review needed of 2-3 li" />

                                </Col>
                                <Col span={24}>
                                    <TextArea rows={4} value="Star positive review needed of 2-3 li" />

                                </Col>
                                <Col span={11}>
                                    <Input value="3" />
                                </Col>
                                <Col span={1} />
                                <Col span={11}>
                                    <Input value="3" />
                                </Col>
                            </Row>
                            <Button type="primary" style={{ marginTop: "20px" }} >Update</Button>
                        </div> :
                            <div className="bodyProductDetail">
                                <Row gutter={[0, { xs: 8, sm: 8, md: 16, lg: 16, xl: 16 }]}>
                                    <Col span={12}>
                                        <h4>Keyword :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Sold By :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Brand Name :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Seller Name :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}> <h4>Market :</h4>
                                        <p>Indoor Tv ariel</p></Col>
                                    <Col span={12}>
                                        <h4>Commision :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Seller Name :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Chinese Seller :</h4>
                                        <p></p>
                                    </Col>
                                    <Col span={24}>
                                        <h4>Instructions :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={24}>
                                        <h4>Refund Condition :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={24}> <h4>Commision Condition :</h4>
                                        <p>Indoor Tv ariel</p></Col>
                                    <Col span={24}>
                                        <h4>Product ID :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Overall Sale Limit :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                    <Col span={12}>
                                        <h4>Daily Sale Limit :</h4>
                                        <p>Indoor Tv ariel</p>
                                    </Col>
                                </Row>
                            </div>
                        }
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default ProductDetails;
