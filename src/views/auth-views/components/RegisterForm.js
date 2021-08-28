import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Select } from "antd";
import { signUpAction } from "../../../redux/actions/Auth";

const { Option } = Select;
const rules = {
  name: {
    required: true,
    message: "Please input your name",
  },
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

const banks = [
  "JazzCash",
  "EasyPaisa",
  "PayPal",
  "Allied Bank Limited",
  "Faysal Bank Limited",
  "Habib Bank Limited (HBL)",
  "Standard Chartered Bank Limited",
  "MCB Bank Limited",
  "Meezan Bank Limited",
  "National Bank of Pakistan",
  "Bank of Punjab",
  "Faysal Bank",
  "United Bank Limited",
];

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
        dispatch(
          signUpAction({
            ...values,
            userType: "PM",
            username:
              values.email.split("@")[0] +
              Math.floor(10000 + Math.random() * 9000),
          })
        );
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
        {/* <Form.Item
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
        </Form.Item> */}
        <Form.Item name="name" label="Name" rules={rules.required} hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={rules.email} hasFeedback>
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
          <Select placeholder="Select an option " allowClear>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>

        {/* <Form.Item name="userType" label="Role">
          <Input
            value="Proxy Marketer Manager"
            defaultValue="Proxy Marketer Manager"
            disabled={true}
          />
        </Form.Item> */}

        <Form.Item name="city" label="City" rules={rules.required} hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item
          name="paymentType"
          label="Account Title"
          hasFeedback
          rules={rules.required}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item name="bankName" label="Bank Name" hasFeedback>
          <Input />
        </Form.Item> */}

        <Form.Item name="bankName" label="Bank Name" rules={rules.required}>
          <Select placeholder="Select an option" allowClear>
            {banks.map((bank, i) => (
              <Option value={bank}>{bank}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="payNumber"
          label="Account Number"
          hasFeedback
          rules={rules.required}
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
