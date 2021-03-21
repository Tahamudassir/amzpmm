import React from "react";
import { Row, Col, Input, Button, message, Form } from "antd";
import { connect } from "react-redux";
import { changePasswordAction } from "../../../redux/actions/Auth";
import staticData from "../../../constants/static.json";
import "./styles.css";

const ChangePassword = (props) => {
  let [form] = Form.useForm();
  const onChangePassword = (data) => {
    if (data.password !== data.confirmPassword) {
      message.error("New password and confirm password does not match");
    } else {
      const queryObj = {
        oldpass: data.oldPassword,
        newpassword: data.password,
      };
      props.dispatch(changePasswordAction(queryObj));
      form.resetFields();
    }
  };

  return (
    <>
      <h4 className="changePwd">Change Password</h4>
      <div className="cardChangePwd">
        <Row>
          <Col xs={24} sm={24} md={11} lg={11} xl={11}>
            <p className="labelPwd">Update Password</p>
            <p>{staticData.updatePasswordDesc}</p>
            <Form onFinish={onChangePassword} form={form}>
              <Form.Item
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your old password",
                  },
                ]}
              >
                <Input.Password placeholder="Old Password" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password",
                  },
                ]}
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your new password",
                  },
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ marginTop: "40px" }}
                  type="primary"
                  loading={props.loading}
                  htmlType="submit"
                >
                  Update Now
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              src="https://p2.piqsels.com/preview/705/161/167/adult-business-businesswoman-choices-thumbnail.jpg"
              alt="person discussing"
              style={{ borderRadius: "4px" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = ({ auth }) => {
  const { loading } = auth;
  return { loading };
};
export default connect(mapStateToProps)(ChangePassword);
