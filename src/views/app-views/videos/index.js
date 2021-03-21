import React, { useState, useEffect } from "react";
import axios from "../../../redux/config/lib";
import { message } from "antd";
import Loading from "../../../components/Loading";
import "./style.css";
const baseURL = process.env.REACT_APP_API_URL;

const AddRules = () => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    showLoading();
    try {
      let result = await axios.get(`${baseURL}/admin/getvideos`);
      setVideos(result.data);
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
      <h4 className="videosMainTitle">Videos</h4>
      {loading && <Loading />}
      <div className="wrapperVideos">
        {videos &&
          videos.map((video) => (
            <div key={video._id} className="cardVideo">
              <div className="cardVideoHeader">
                <h4 className="videoTitle">{video.title}</h4>
              </div>
              <span
                style={{ width: "100%" }}
                dangerouslySetInnerHTML={{ __html: video.link }}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default AddRules;
