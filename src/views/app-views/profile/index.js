import React from "react";
import { connect } from "react-redux";
import {
  Col,
  Row,
  Button,
  Progress,
  Card,
  Input,
  Avatar,
  Form,
  message,
  Upload,
} from "antd";
import { SyncOutlined } from "@ant-design/icons";
import {
  editUserAction,
  editUserAvatarAction,
} from "../../../redux/actions/Auth";
import rules from "../../../constants/validationRules";
import { dummyRequest } from "../../../constants/DummyData";
import "./styles.css";

const Profile = (props) => {
  const { user, dispatch, loading, uploading } = props;
  const [form] = Form.useForm();

  const updateProfile = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(editUserAction(values));
      })
      .catch((info) => {
        message.error("Validate Failed:", info);
      });
  };

  const onChangeProfileImage = (info) => {
    let formData = new FormData();
    formData.append("imageUrl", info.file.originFileObj);
    dispatch(editUserAvatarAction(formData));
  };

  return (
    <div>
      <div className="headingProfile">
        <p className="small">Overview</p>
        <h4 className="large">{user && user.username}</h4>
      </div>
      <Row gutter={[0, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="profileCard">
            <div className="innerProfileCard">
              <Avatar
                src={
                  user && user.imageUrl
                    ? user.imageUrl
                    : "/img/avatars/male.png"
                }
                style={{ backgroundColor: "#87d068", objectFit: "cover" }}
                size={100}
              />
              <h2 className="userName">{user && user.username}</h2>
              <p className="userType">{user && user.userType}</p>
              <Upload
                customRequest={dummyRequest}
                onChange={onChangeProfileImage}
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
                  loading={uploading}
                >
                  Change Pic
                </Button>
              </Upload>
            </div>
            <div className="profileWorkload">
              <p>Workload</p>
              <Progress strokeLinecap="square" percent={75} />
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={24} sm={24} md={15} lg={15} xl={15}>
          <Card title="Account Details" className="cardDetails">
            <Row gutter={[0, 24]}>
              <Col span={11}>
                <p className="label">Name</p>
                <Input
                  disabled={true}
                  value={user && user.username ? user.username : ""}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <p className="label">User Name</p>
                <Input
                  disabled={true}
                  value={user && user.username ? user.username : ""}
                />
              </Col>
              <Col span={11}>
                <p className="label">Email</p>
                <Input
                  disabled={true}
                  value={user && user.email ? user.email : ""}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <p className="label">Gender</p>
                <Input
                  disabled={true}
                  value={user && user.gender ? user.gender : ""}
                />
              </Col>
            </Row>
            <Form
              form={form}
              layout="vertical"
              name="register-form"
              onFinish={updateProfile}
            >
              <Row gutter={[0, 8]} style={{ marginTop: "20px" }}>
                <Col span={24}>
                  <Form.Item
                    name="address"
                    label="Address"
                    hasFeedback
                    initialValue={user && user.address ? user.address : ""}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={[0, 8]}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <Col span={7}>
                  <Form.Item
                    name="city"
                    label="City"
                    hasFeedback
                    initialValue={user && user.city ? user.city : ""}
                  >
                    <Input placeholder="City" />
                  </Form.Item>
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                  <Form.Item
                    name="country"
                    label="Country"
                    hasFeedback
                    initialValue={user && user.country ? user.country : ""}
                  >
                    <Input placeholder="Pakistan" />
                  </Form.Item>
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                  <Form.Item
                    name="phone"
                    label="Phone"
                    rules={rules.phone}
                    hasFeedback
                    initialValue={user && user.phone ? user.phone : ""}
                  >
                    <Input placeholder="+92303..." />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={[0, 8]}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <Col span={8}>
                  <Form.Item
                    name="bankName"
                    label="Bank Name"
                    hasFeedback
                    initialValue={user && user.bankName ? user.bankName : ""}
                  >
                    <Input placeholder="FB Link" />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={14}>
                  <Form.Item
                    name="accountNumber"
                    label="Account Number"
                    hasFeedback
                    initialValue={
                      user && user.accountNumber ? user.accountNumber : ""
                    }
                  >
                    <Input placeholder="34343..." />
                  </Form.Item>
                </Col>
              </Row>

              <Button type="primary" htmlType="submit" loading={loading}>
                Update Account
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user, loading, uploading } = auth;
  return {
    user,
    loading,
    uploading,
  };
};

export default connect(mapStateToProps)(Profile);
