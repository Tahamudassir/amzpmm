import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Select, InputNumber } from "antd";
import { signUpAction } from "../../../redux/actions/Auth";
const { Option } = Select;
const rules = {
  email: [
    {
      required: true,
      message: "Please input your email address",
    },
    {
      type: "email",
      message: "Please enter a valid email!",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
    },
  ],
  cnic: [
    {
      required: true,
      message: "Please input your cnic",
    },
    {
      pattern: /^[0-9]+$/,
      message: "Cnic should not contain any characters other then numbers",
    },
  ],
  required: [
    {
      required: true,
      message: "This field is required",
    },
  ],
  phone: [
    {
      required: true,
      message: "This field is required",
    },
    {
      pattern: /^[0-9]+$/,
      message:
        "Phone number should not contain any characters other then numbers",
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
  const { loading, dispatch, redirectPath, allowRedirect } = props;
  const [form] = Form.useForm();
  const history = useHistory();
  useEffect(() => {
    if (allowRedirect) {
      history.push(redirectPath);
    }
  }, [allowRedirect, redirectPath]);
  const onSignUp = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(signUpAction(values));
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        name="register-form"
        onFinish={onSignUp}
      >
        <Form.Item
          name="firstname"
          label="First Name"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastname"
          label="Last Name"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={rules.email} hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label="Login Username"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item name="cnic" label="CNIC" rules={rules.cnic} hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone (Whatsapp)"
          rules={rules.phone}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={rules.password}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={rules.required}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="experience"
          label="Proxy Marketing Experience"
          width="100%"
          rules={rules.required}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item name="city" label="City" rules={rules.required} hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item
          name="referralName"
          label="Referral Name"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="referralContact"
          label="Referral Contact Number"
          rules={rules.phone}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="paymentType"
          label="Bank Account /Jazz Cash /Easy paisa Title"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="bankName"
          label="Bank Name"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="payNumber"
          label="Bank Account /Jazz Cash /Easy paisa Number"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="branchCity"
          label="Bank Branch City"
          rules={rules.required}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { loading, allowRedirect, redirectPath } = auth;
  return { loading, allowRedirect, redirectPath };
};

export default connect(mapStateToProps)(RegisterForm);
