import React from "react";
import { Card } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import "./styles.css";

const DashboardCard = (props) => {
  const { title, number, percentage, percentageValue } = props;
  return (
    <Card bordered={false} className="cardDashboard">
      <h4 className="title">{title && title}</h4>
      <h3 className="number">{number && number}</h3>
      <p className="percentage">
        {percentageValue ? (
          <span className="greenCaret">
            <CaretUpOutlined />
          </span>
        ) : (
          <span className="redCaret">
            <CaretDownOutlined />
          </span>
        )}
        <span className={percentageValue ? "greenCaret" : "redCaret"}>
          {percentage}%
        </span>
      </p>
    </Card>
  );
};

export default DashboardCard;
