import React, { useEffect, useState } from "react";
import { Col, Row, message } from "antd";
import axios from "../../../redux/config/lib";
import DashboardCard from "../../../components/DashboardCard";
import Loading from "../../../components/Loading";
import "./styles.css";
const baseURL = process.env.REACT_APP_API_URL;

const Home = () => {
  const [cancelled, setCancelled] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [refunded, setRefunded] = useState(0);
  const [commisioned, setCommissioned] = useState(0);
  const [refundedPending, setRefundedPending] = useState(0);
  const [reviewed, setReviewed] = useState(0);
  const [ordered, setOrdered] = useState(0);
  const [reviewSubmmitted, setReviewSubmitted] = useState(0);
  const [reviewDeleted, setReviewDeleted] = useState(0);
  const [onHold, setOnHold] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStats();
  }, []);

  const getStats = async () => {
    try {
      let stats = await axios.get(`${baseURL}/order/usercount2`);
      showStats(stats.data);
    } catch (err) {
      message.error(err.message);
      setLoading(false);
    }
  };

  const showStats = (event) => {
    event.forEach((element) => {
      statsCase(element);
    });
    setLoading(false);
  };

  const statsCase = (event) => {
    switch (event._id.orderstatus) {
      case "Ordered":
        setOrdered(event.count);
        break;
      case "Reviewed":
        setReviewed(event.count);
        break;
      case "Cancelled":
        setCancelled(event.count);
        break;
      case "On Hold":
        setOnHold(event.count);
        break;
      case "Commissioned":
        setCommissioned(event.count);
        break;
      case "Completed":
        setCompleted(event.count);
        break;
      case "Refunded":
        setRefunded(event.count);
        break;
      case "Refunded Pending":
        setRefundedPending(event.count);
        break;
      case "Review Submitted Pending Refund":
        setReviewSubmitted(event.count);
        break;
      case "Review Deleted":
        setReviewDeleted(event.count);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="headingDashboard">
        <p className="small">Dashboard</p>
        <h4 className="large">Orders Overview</h4>
      </div>
      {loading && <Loading />}
      <Row gutter={[0, 16]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="Completed"
            percentage={0}
            percentageValue={true}
            number={completed}
          /> */}
          <DashboardCard
            title="Ordered"
            percentage={0}
            percentageValue={true}
            number={ordered}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="Cancelled"
            percentage={0}
            percentageValue={false}
            number={cancelled}
          /> */}
          <DashboardCard
            title="Reviewed"
            percentage={0}
            percentageValue={true}
            number={reviewed}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="Refunded"
            percentage={0}
            percentageValue={false}
            number={refunded}
          /> */}
          <DashboardCard
            title="Review Submitted for refund"
            percentage={0}
            percentageValue={true}
            number={reviewSubmmitted}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="Commissioned"
            percentage={0}
            percentageValue={true}
            number={commisioned}
          /> */}
          <DashboardCard
            title="Refunded"
            percentage={0}
            percentageValue={false}
            number={refunded}
          />
        </Col>
        {/* </Row> */}
        {/* <Row gutter={[0, 16]}> */}
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <DashboardCard
            title="Refuned pending review"
            percentage={0}
            percentageValue={false}
            number={refundedPending}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="Reviewed"
            percentage={0}
            percentageValue={true}
            number={reviewed}
          /> */}
          <DashboardCard
            title="On Hold"
            percentage={0}
            percentageValue={false}
            number={onHold}
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="Ordered"
            percentage={0}
            percentageValue={true}
            number={ordered}
          /> */}
          <DashboardCard
            title="Review deleted"
            percentage={0}
            percentageValue={false}
            number={reviewDeleted}
          />
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="Review Submitted for refund"
            percentage={0}
            percentageValue={true}
            number={reviewSubmmitted}
          /> */}
          <DashboardCard
            title="Cancelled"
            percentage={0}
            percentageValue={false}
            number={cancelled}
          />
        </Col>
        {/* <Col xs={24} sm={24} md={8} lg={8} xl={8}> */}
        {/* <DashboardCard
            title="Review deleted"
            percentage={0}
            percentageValue={false}
            number={reviewDeleted}
          /> */}
        {/* <DashboardCard
            title="Commissioned"
            percentage={0}
            percentageValue={true}
            number={commisioned}
          /> */}
        {/* </Col> */}
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          {/* <DashboardCard
            title="On Hold"
            percentage={0}
            percentageValue={false}
            number={onHold}
          /> */}
          <DashboardCard
            title="Completed"
            percentage={0}
            percentageValue={true}
            number={completed}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
