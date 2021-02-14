import React from "react";
import { Row, Col, Input, Space, Button } from "antd";
import staticData from "../../../constants/static.json";
import "./styles.css";

const ChangePassword = () => {
  return (
    <>
      <h4 className="changePwd">Change Password</h4>
      <div className="cardChangePwd">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className="labelPwd">Update Password</p>
            <p>{staticData.updatePasswordDesc}</p>
            <Space direction="vertical" style={{ width: "100%" }} size="middle">
              <Input placeholder="Old Password" />
              <Input placeholder="New Password" />
              <Input placeholder="Type Again New Password" />
            </Space>
            <Button style={{ marginTop: "40px" }} type="primary">
              Update Now
            </Button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
        </Row>
      </div>
    </>
  );
};

export default ChangePassword;
