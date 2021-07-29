import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import { Button, Form, Input, Select } from "antd";
=======
import { Button, Form, Input, Select, InputNumber } from "antd";
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
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
<<<<<<< HEAD
  // cnic: [
  //   {
  //     required: true,
  //     message: "Please input your cnic",
  //   },
  //   {
  //     pattern: /^[0-9]+$/,
  //     message: "Cnic should not contain any characters other then numbers",
  //   },
  // ],
=======
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
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
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
  phone_not_required: [
    {
      pattern: /^[0-9]+$/,
      message:
        "Phone number should not contain any characters other then numbers",
    },
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
<<<<<<< HEAD
        {/* <Form.Item name="cnic" label="CNIC" rules={rules.cnic} hasFeedback>
          <Input />
        </Form.Item> */}
=======
        <Form.Item name="cnic" label="CNIC" rules={rules.cnic} hasFeedback>
          <Input />
        </Form.Item>
>>>>>>> 74d4a9639ab57f9c826d536cfbf1d2405f42d1f3
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
          <Select placeholder="Select an option " allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="userType" label="Role" rules={rules.required}>
          <Select placeholder="Select an option" allowClear>
            <Option value="PMM">Proxy Marketer Manager</Option>
            <Option value="PM">Proxy Marketer</Option>
          </Select>
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
        <Form.Item name="paymentType" label="Account Holder Name" hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item name="bankName" label="Bank Name" hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item name="payNumber" label="Account Number" hasFeedback>
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
