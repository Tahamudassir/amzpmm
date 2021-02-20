import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Row, Col } from "antd";

const RegisterTwo = (props) => {
  return (
    <div className={`bg-white`} style={{ paddingTop: "40px" }}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={20} sm={20} md={24} lg={24}>
          <div className="container d-flex flex-column justify-content-center h-100">
            <Row justify="center">
              <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                <h1>Register Here</h1>
                <p>
                  Already have an account? <a href="/login">Sign In</a>
                </p>
                <div className="mt-4">
                  <RegisterForm {...props} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterTwo;
