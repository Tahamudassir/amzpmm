import React from "react";
import { Col, Row } from "antd";
import DashboardCard from "../../../components/DashboardCard";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <div className="headingDashboard">
        <p className="small">Dashboard</p>
        <h4 className="large">Orders Overview</h4>
      </div>
      <Row gutter={[0, 16]}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <DashboardCard
            title="Completed"
            percentage={0}
            percentageValue={true}
            number={0}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <DashboardCard
            title="Cancelled"
            percentage={0}
            percentageValue={false}
            number={0}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <DashboardCard
            title="Refunded"
            percentage={0}
            percentageValue={false}
            number={0}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <DashboardCard
            title="Commissioned"
            percentage={0}
            percentageValue={true}
            number={0}
          />
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <DashboardCard
            title="Refuned pending review"
            percentage={0}
            percentageValue={false}
            number={0}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <DashboardCard
            title="Reviewed"
            percentage={0}
            percentageValue={true}
            number={0}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <DashboardCard
            title="Ordered"
            percentage={0}
            percentageValue={true}
            number={0}
          />
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <DashboardCard
            title="Review Submitted for refund"
            percentage={0}
            percentageValue={true}
            number={0}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <DashboardCard
            title="Review deleted"
            percentage={0}
            percentageValue={false}
            number={0}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <DashboardCard
            title="on hold"
            percentage={0}
            percentageValue={false}
            number={0}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
