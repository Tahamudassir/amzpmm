import React from "react";
import { connect } from "react-redux";
import { Col, Row, Button, Progress, Card, Input, Avatar } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import "./styles.css";

const Profile = (props) => {
  const { user } = props;
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
            <Row gutter={[0, 8]} style={{ marginTop: "10px" }}>
              <Col span={24}>
                <p className="label">Name</p>
                <Input value={user && user.username ? user.username : ""} />
              </Col>
            </Row>
            <Row
              gutter={[0, 8]}
              style={{ marginTop: "10px", marginBottom: "20px" }}
            >
              <Col span={11}>
                <p className="label">Facebook</p>
                <Input
                  placeholder="FB Link"
                  value={user && user.fbLink ? user.fbLink : ""}
                />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <p className="label">Whatsapp/Weechat</p>
                <Input
                  placeholder="+92303..."
                  value={user && user.whatsapp ? user.whatsapp : ""}
                />
              </Col>
            </Row>
            <Button type="primary">Update Account</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Profile);
