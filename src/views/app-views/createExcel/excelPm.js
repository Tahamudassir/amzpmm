import React from "react";
import {
  Row,
  Col,
  Button,
  DatePicker,
  Select,
  Form,
  message,
  Spin,
} from "antd";
import { connect } from "react-redux";
import { exportToExcelPmAction } from "../../../redux/actions/Orders";
import orderStatus from "../../../constants/orderStatus";
import "./styles.css";

const CreateExcel = (props) => {
  const { dispatch, loading } = props;
  const { Option } = Select;
  const [form] = Form.useForm();

  const onGenerateExcel = () => {
    form
      .validateFields()
      .then((values) => {
        let queryObj = {
          from: values["from"].format("YYYY-MM-DD"),
          to: values["to"].format("YYYY-MM-DD"),
          orderstatus: values.orderstatus,
        };

        dispatch(exportToExcelPmAction(queryObj));
      })
      .catch((info) => {
        message.error("Validation Failed:");
      });
  };
  const onStatusChanged = (value) => {
    form.setFieldsValue({
      orderstatus: value,
    });
  };
  const config = {
    rules: [{ type: "object", required: true, message: "Please select date!" }],
  };
  return (
    <>
      <h4 className="createExcel">Create Excel</h4>
      {loading && (
        <div className="loadingSpin">
          <Spin />
        </div>
      )}
      <div className="cardCreateExcel">
        <Row>
          <Col xs={24} sm={24} md={9} lg={9} xl={9}>
            <Form
              form={form}
              layout="vertical"
              name="register-form"
              onFinish={onGenerateExcel}
            >
              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item name="from" label="From" hasFeedback {...config}>
                    <DatePicker format="YYYY-MM-DD" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item name="to" label="To" hasFeedback {...config}>
                    <DatePicker format="YYYY-MM-DD" />
                  </Form.Item>
                </Col>
              </Row>
              <br />
              <Form.Item
                name="orderstatus"
                rules={[
                  { required: true, message: "Please select order status!" },
                ]}
                onChange={onStatusChanged}
                hasFeedback
              >
                <Select placeholder="Select Order Status" hasFeedback>
                  <Option value={orderStatus[0]}>{orderStatus[0]}</Option>
                  <Option value={orderStatus[1]}>{orderStatus[1]}</Option>
                  <Option value={orderStatus[2]}>{orderStatus[2]}</Option>
                  <Option value={orderStatus[3]}>{orderStatus[3]}</Option>
                  <Option value={orderStatus[4]}>{orderStatus[4]}</Option>
                  <Option value={orderStatus[5]}>{orderStatus[5]}</Option>
                  <Option value={orderStatus[6]}>{orderStatus[6]}</Option>
                  <Option value={orderStatus[7]}>{orderStatus[7]}</Option>
                  <Option value={orderStatus[8]}>{orderStatus[8]}</Option>
                </Select>
              </Form.Item>
              <br />
              <Button
                style={{ marginTop: "30px" }}
                type="primary"
                htmlType="submit"
              >
                Generate
              </Button>
            </Form>
          </Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
          <Col xs={24} sm={24} md={14} lg={14} xl={14}></Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = ({ orders }) => {
  const { loading } = orders;
  return {
    loading,
  };
};

export default connect(mapStateToProps)(CreateExcel);
