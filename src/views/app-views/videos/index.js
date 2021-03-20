import React, { useState, useEffect } from "react";
import axios from "../../../redux/config/lib";
import { message } from "antd";
import Loading from "../../../components/Loading";
import "./style.css";
const baseURL = process.env.REACT_APP_API_URL;

const Videos = () => {
  const [loading, setLoading] = useState(false);
  const [rules, setRules] = useState(null);

  useEffect(() => {
    // getVideos();
  }, []);

  const getVideos = async () => {
    try {
      showLoading();
      let result = await axios.get(`${baseURL}/admin/getvideos`);
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
      <h4 className="videosTitle">Video Tutorials</h4>
      {loading && <Loading />}
    </>
  );
};

export default Videos;
