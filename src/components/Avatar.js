import React from "react";
import "./styles.css";

const AvatarCard = (props) => {
  const { width, height, onClick, url } = props;
  return (
    <div style={{ width: width, height: height }} onClick={onClick}>
      <img
        src={url ? url : "/img/avatars/male.png"}
        className="imgAvatar"
        alt="avatar"
      />
    </div>
  );
};

export default AvatarCard;
