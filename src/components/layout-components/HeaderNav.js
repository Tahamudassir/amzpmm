import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Layout, Avatar } from "antd";
import NavNotification from "./NavNotification";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAnnouncementAction } from "../../redux/actions/Announcement";

import {
  Menu,
  MenuItem,
  // MenuButton
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import {
  toggleCollapsedNav,
  onMobileNavToggle,
  logoutAction,
} from "redux/actions/Theme";
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
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();
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
    logoutAction,
  } = props;

  useEffect(() => {
    dispatch(getAnnouncementAction(authState.user._id));
  }, [dispatch, authState.user._id]);

  const navigateToProfile = () => history.push("/profile");

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
  const logout = () => {
    logoutAction();
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
            <NavNotification />
            <Menu
              menuButton={
                <div className="menuNavbar">
                  <Avatar
                    src={
                      user && user.imageUrl
                        ? user.imageUrl
                        : "/img/avatars/male.png"
                    }
                    style={{ backgroundColor: "#87d068", objectFit: "cover" }}
                  />
                  <h4>{user?.name}</h4>
                  <CaretDownOutlined />
                </div>
              }
            >
              <MenuItem className="menuNav" onClick={navigateToProfile}>
                <span className="iconMenuProfile">
                  <UserOutlined />
                </span>
                Profile
              </MenuItem>
              <MenuItem className="menuNav" onClick={logout}>
                <span className="iconMenuLogout">
                  <LogoutOutlined />
                </span>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Header>
  );
};

const mapStateToProps = ({ theme, auth }) => {
  const { navCollapsed, navType, headerNavColor, mobileNav, currentTheme } =
    theme;
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
  logoutAction,
})(HeaderNav);
