import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Input, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { FacebookSVG } from "assets/svg/icon";
import CustomIcon from "components/util-components/CustomIcon";
import { signInAction } from "redux/actions/Auth";
import { useHistory } from "react-router-dom";

export const LoginForm = (props) => {
  let history = useHistory();
  const { loading, redirect, allowRedirect, dispatch } = props;

  const onLogin = (user) => {
    dispatch(signInAction(user));
  };

  useEffect(() => {
    if (allowRedirect && redirect) {
      history.push(redirect);
    }
  }, [redirect, allowRedirect]);

  const renderOtherSignIn = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">
          Connect with us
        </span>
      </Divider>
      <div className="d-flex justify-content-center">
        <Button className="mr-2" icon={<WhatsAppOutlined color="#00FF00" />}>
          Whatsapp
        </Button>
        <Button icon={<CustomIcon svg={FacebookSVG} />}>Facebook</Button>
      </div>
    </div>
  );
  const registerWithUs = (
    <div>
      <Divider>
        <span className="text-muted font-size-base font-weight-normal">or</span>
      </Divider>
      <div className="d-flex justify-content-center">
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
  return (
    <>
      <Form layout="vertical" name="login-form" onFinish={onLogin}>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your user name",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password
            autoComplete="current-password"
            prefix={<LockOutlined className="text-primary" />}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign In
          </Button>
        </Form.Item>
        {renderOtherSignIn}
        {registerWithUs}
      </Form>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { loading, redirect, allowRedirect } = auth;
  return { loading, redirect, allowRedirect };
};

export default connect(mapStateToProps)(LoginForm);
