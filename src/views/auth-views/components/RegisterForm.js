import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";

const rules = {
  email: [
    {
      required: true,
      message: "Please input your email address",
    },
    {
      type: "email",
      message: "Please enter a validate email!",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
    },
  ],
  confirm: [
    {
      required: true,
      message: "Please confirm your password!",
    },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject("Passwords do not match!");
      },
    }),
  ],
};

export const RegisterForm = (props) => {
  const {
    showLoading,
    token,
    loading,
    redirect,
    message,
    showMessage,
    allowRedirect,
  } = props;
  const [form] = Form.useForm();
  let history = useHistory();

  const onSignUp = () => {
    form
      .validateFields()
      .then((values) => {})
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  useEffect(() => {
    if (token !== null && allowRedirect) {
      history.push(redirect);
    }
    if (showMessage) {
      setTimeout(() => {}, 3000);
    }
  });

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        name="register-form"
        onFinish={onSignUp}
      >
        <Form.Item name="email" label="Email" rules={rules.email} hasFeedback>
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={rules.password}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="ConfirmPassword"
          rules={rules.confirm}
          hasFeedback
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { loading } = auth;
  return { loading };
};

const mapDispatchToProps = {
  // showAuthMessage,
  // hideAuthMessage,
  // showLoading,
  // authenticated
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
