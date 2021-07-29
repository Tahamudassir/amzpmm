import React, { useState } from "react";
import { Menu, Dropdown, Badge, List } from "antd";
import { BellOutlined } from "@ant-design/icons";

import Flex from "components/shared-components/Flex";
import { useSelector } from "react-redux";
const getNotificationBody = (list) => {
  return list.length > 0 ? (
    <List
      size="small"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item className="list-clickable">
          <Flex alignItems="center">
            <div className="mr-3">
              <span className="font-weight-bold text-dark">
                {item.announcement}{" "}
              </span>
              {/* <span className="text-gray-light">{item.desc}</span> */}
            </div>
          </Flex>
        </List.Item>
      )}
    />
  ) : (
    <div className="empty-notification">
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
        alt="empty"
      />
      {/* <p className="mt-3">You have viewed all notifications</p> */}
    </div>
  );
};

export const NavNotification = () => {
  const [visible, setVisible] = useState(false);
  // const [data, setData] = useState(notificationData);
  const state = useSelector((state) => state.announcements);
  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const notificationList = (
    <div className="nav-dropdown nav-notification">
      <div className="nav-notification-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Notification</h4>
        {/* <Button type="link" onClick={() => setData([])} size="small">
          Clear{" "}
        </Button> */}
      </div>
      <div className="nav-notification-body">
        {getNotificationBody(state.notifications)}
      </div>
      {/* {data.length > 0 ? (
        <div className="nav-notification-footer">
          <a className="d-block" href="#/">
            View all
          </a>
        </div>
      ) : null} */}
    </div>
  );

  return (
    <Dropdown
      placement="bottomRight"
      overlay={notificationList}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      trigger={["click"]}
    >
      <Menu mode="horizontal">
        <Menu.Item>
          <Badge count={state.notifications ? state.notifications.length : 0}>
            <BellOutlined className="nav-icon mx-auto" type="bell" />
          </Badge>
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default NavNotification;
