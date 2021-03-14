import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { message } from "antd";
import Loading from "../../../components/Loading";
import "./style.css";
// import pdf from "../../../assets/git.pdf";
const baseURL = process.env.REACT_APP_API_URL;

const Tutorials = (props) => {
  const { user } = props;
  const [loading, setLoading] = useState(false);
  const [rules, setRules] = useState(null);

  useEffect(() => {
    // getRules();
  }, []);

  const getRules = async () => {
    try {
      showLoading();
      let rules = await axios.get(`${baseURL}/admin/addrules`);
      setRules(rules);
      hideLoading();
    } catch (err) {
      message.error(err.message);
      hideLoading();
    }
  };

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);
  return (
    <>
      <h4 className="ordersTitle">Rules Regulations</h4>
      {loading && <Loading />}

      {user && user.userType === "PMM" ? (
        <>
          <h4 className="documentHeading">
            Rules Regulations Document for PMM
          </h4>
          <embed src={"https://google.com"} width="100%" height="800px" />
        </>
      ) : (
        <>
          <h4 className="documentHeading">
            Rules Regulations Document for PMM
          </h4>
          <embed src={"https://google.com"} width="100%" height="800px" />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Tutorials);
