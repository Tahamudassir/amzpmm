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
} from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { editUserAction } from "../../../redux/actions/Auth";
import "./styles.css";

const rules = {
  username: [
    {
      required: true,
      message: "Name can't be empty",
    },
  ],
  fbLink: [
    {
      type: "url",
      message: "This is not a valid url",
    },
  ],
  phone: [
    {
      pattern: /^[0-9]+$/,
      message:
        "Phone number should not contain any characters other then numbers",
    },
  ],
};
const Profile = (props) => {
  const { user, dispatch, loading } = props;
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
              <Button
                type="primary"
                shape="round"
                icon={<SyncOutlined />}
                size={32}
              >
                Change Pic
              </Button>
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
                <p className="label">Email</p>
                <Input
                  disabled={true}
                  value={user && user.email ? user.email : ""}
                />
              </Col>
            </Row>
            <Form form={form} layout="vertical" onFinish={updateProfile}>
              <Row gutter={[0, 8]} style={{ marginTop: "20px" }}>
                <Col span={24}>
                  <Form.Item
                    name="username"
                    label="Name"
                    rules={rules.username}
                    hasFeedback
                    initialValue={user ? user.username : ""}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={[0, 8]}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <Col span={11}>
                  <Form.Item
                    name="fbLink"
                    label="Facebook"
                    rules={rules.fbLink}
                    hasFeedback
                    initialValue={user && user.fbLink ? user.fbLink : ""}
                  >
                    <Input placeholder="FB Link" />
                  </Form.Item>
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <Form.Item
                    name="phone"
                    label="Whatsapp/Weechat"
                    rules={rules.phone}
                    hasFeedback
                    initialValue={user && user.phone ? user.phone : ""}
                  >
                    <Input placeholder="+92303..." />
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
  const { user, loading } = auth;
  return {
    user,
    loading,
  };
};

export default connect(mapStateToProps)(Profile);
