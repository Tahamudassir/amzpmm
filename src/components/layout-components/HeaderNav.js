import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { toggleCollapsedNav, onMobileNavToggle } from "redux/actions/Theme";
import {
  NAV_TYPE_TOP,
  SIDE_NAV_COLLAPSED_WIDTH,
  SIDE_NAV_WIDTH,
} from "constants/ThemeConstant";
import Logo from "./Logo";
import utils from "utils";
import "./styles.css";

const { Header } = Layout;

export const HeaderNav = (props) => {
  const {
    navCollapsed,
    mobileNav,
    navType,
    headerNavColor,
    toggleCollapsedNav,
    onMobileNavToggle,
    isMobile,
    currentTheme,
    user,
  } = props;

  const onToggle = () => {
    if (!isMobile) {
      toggleCollapsedNav(!navCollapsed);
    } else {
      onMobileNavToggle(!mobileNav);
    }
  };

  const isNavTop = navType === NAV_TYPE_TOP ? true : false;
  const mode = () => {
    if (!headerNavColor) {
      return utils.getColorContrast(
        currentTheme === "dark" ? "#00000" : "#ffffff"
      );
    }
    return utils.getColorContrast(headerNavColor);
  };
  const navMode = mode();
  const getNavWidth = () => {
    if (isNavTop || isMobile) {
      return "0px";
    }
    if (navCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`;
    } else {
      return `${SIDE_NAV_WIDTH}px`;
    }
  };
  const itemClick = () => {
    alert("clicked");
  };
  return (
    <Header
      className={`app-header ${navMode}`}
      style={{ backgroundColor: headerNavColor }}
    >
      <div className={`app-header-wrapper ${isNavTop ? "layout-top-nav" : ""}`}>
        <Logo logoType={navMode} />
        <div className="nav" style={{ width: `calc(100% - ${getNavWidth()})` }}>
          <div className="nav-left">
            <ul className="ant-menu ant-menu-root ant-menu-horizontal">
              {isNavTop && !isMobile ? null : (
                <li
                  className="ant-menu-item ant-menu-item-only-child"
                  onClick={() => {
                    onToggle();
                  }}
                >
                  {navCollapsed || isMobile ? (
                    <MenuUnfoldOutlined className="nav-icon" />
                  ) : (
                    <MenuFoldOutlined className="nav-icon" />
                  )}
                </li>
              )}
            </ul>
          </div>
          <div className="nav-right">
            <Dropdown overlay={menu} trigger={["click"]}>
              <div className="menuNavbar">
                <Avatar
                  src={
                    user && user.imageUrl
                      ? user.imageUrl
                      : "/img/avatars/male.png"
                  }
                  style={{ backgroundColor: "#87d068", objectFit: "cover" }}
                />
                <h4>{user && user.username}</h4>
                <CaretDownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};
const menu = (
  <Menu>
    <Menu.Item key="0" icon={<UserOutlined />}>
      <Link to="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" icon={<LogoutOutlined />} style={{ color: "#97122e" }}>
      Logout
    </Menu.Item>
  </Menu>
);

const mapStateToProps = ({ theme, auth }) => {
  const {
    navCollapsed,
    navType,
    headerNavColor,
    mobileNav,
    currentTheme,
  } = theme;
  const { user } = auth;
  return {
    navCollapsed,
    navType,
    headerNavColor,
    mobileNav,
    currentTheme,
    user,
  };
};

export default connect(mapStateToProps, {
  toggleCollapsedNav,
  onMobileNavToggle,
})(HeaderNav);
