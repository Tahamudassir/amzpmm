import React from "react";
import { Spin } from "antd";

const Loading = () => (
  <div style={loading}>
    <Spin />
  </div>
);
const loading = {
  position: "fixed",
  left: " 50%",
  top: "50%",
  transform: "translate(-50%, 0)",
};

export default Loading;
