import React from "react";
import { Popover } from "antd";
import "./styles.css";

const UserInfo = (props) => {
  const { user } = props;
  const info = user && user[0];
  return (
    <>
      <Popover content={() => content(info)} title="User Info">
        <p style={{ margin: 0 }}>{info && info.username}</p>
      </Popover>
    </>
  );
};
const content = (user) => {
  return (
    <>
      {user && (
        <>
          <p>
            User : <span>{user.username ? user.username : "n/a"}</span>
          </p>
          <p>
            Phone : <span>{user.phone ? user.phone : "n/a"}</span>
          </p>
          <p>
            Email : <span>{user.email ? user.email : "n/a"}</span>
          </p>
        </>
      )}
    </>
  );
};

export default UserInfo;
