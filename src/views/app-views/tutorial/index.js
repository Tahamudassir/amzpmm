import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Viewer, { Worker, SpecialZoomLevel } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import axios from "../../../redux/config/lib";
import { message } from "antd";
import Loading from "../../../components/Loading";
import "./style.css";
const baseURL = process.env.REACT_APP_API_URL;

const Tutorials = (props) => {
  const { user } = props;
  const [loading, setLoading] = useState(false);
  const [rules, setRules] = useState(null);

  useEffect(() => {
    getRules();
  }, []);

  const getRules = async () => {
    try {
      showLoading();
      let result = await axios.get(`${baseURL}/admin/getrules`);
      setRules(result.data[0]);
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
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
      {loading && <Loading />}

      {user && user.userType === "PMM" ? (
        <>
          <h4 className="documentHeading">
            Rules Regulations Document for PMM
          </h4>
          {rules && rules.rulesPmm && (
            <div style={{ height: "600px" }}>
              <Viewer
                fileUrl={rules.rulesPmm}
                defaultScale={SpecialZoomLevel.PageFit}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <h4 className="documentHeading">Rules Regulations Document for PM</h4>
          {rules && rules.rulesPm && (
            <div style={{ height: "600px" }}>
              <Viewer
                fileUrl={rules.rulesPm}
                defaultScale={SpecialZoomLevel.PageFit}
              />
            </div>
          )}
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
