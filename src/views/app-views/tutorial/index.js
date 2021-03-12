import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
// import "./styles.css";

const Tutorials = (props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h4>Download the Rules And Regulations By Clicking the Button Below</h4>
      <Button size={50} type="primary" style={{ marginTop: "40px" }}>
        Download
      </Button>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Tutorials);
