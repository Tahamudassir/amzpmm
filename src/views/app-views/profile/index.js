import React from "react";
import { Col, Row, Button, Progress, Card, Input } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import Avatar from "../../../components/Avatar";
import "./styles.css";

const Profile = () => {
  return (
    <div>
      <div className="headingProfile">
        <p className="small">Overview</p>
        <h4 className="large">User Name</h4>
      </div>
      <Row gutter={[0, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <div className="profileCard">
            <div className="innerProfileCard">
              <Avatar width="120px" height="120px" />
              <h2 className="userName">User Name</h2>
              <p className="userType">User Type</p>
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
                <Input disabled={true} value="User Name" />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <p className="label">Email</p>
                <Input disabled={true} value="user@gmail.com" />
              </Col>
            </Row>
            <Row gutter={[0, 8]} style={{ marginTop: "10px" }}>
              <Col span={24}>
                <p className="label">Name</p>
                <Input value="User Name" />
              </Col>
            </Row>
            <Row
              gutter={[0, 8]}
              style={{ marginTop: "10px", marginBottom: "20px" }}
            >
              <Col span={11}>
                <p className="label">Facebook</p>
                <Input placeholder="FB Link" />
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <p className="label">Whatsapp/Weechat</p>
                <Input placeholder="+92303..." />
              </Col>
            </Row>
            <Button type="primary">Update Account</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
