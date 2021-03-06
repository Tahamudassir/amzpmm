import {
  DashboardOutlined,
  ShoppingCartOutlined,
  FileAddOutlined,
  CalculatorOutlined,
  KeyOutlined,
  UserOutlined,
  FileExcelOutlined,
  InfoOutlined,
  ReadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const dashBoardNavTree = [
  {
    key: "home",
    path: "/home",
    title: "Home",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "orders",
    path: "/orders",
    title: "Orders",
    icon: ShoppingCartOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "products",
    path: "/products",
    title: "Products",
    icon: FileAddOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "reservations",
    path: "/reservations",
    title: "Reservations",
    icon: CalculatorOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "change_password",
    path: "/change-password",
    title: "Change Password",
    icon: KeyOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "user_profile",
    path: "/profile",
    title: "User Profile",
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "create_excel",
    path: "/create-excel",
    title: "Create Excel",
    icon: FileExcelOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "rules",
    path: "/rules",
    title: "Rules / Regulations",
    icon: InfoOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "videos",
    path: "/videos",
    title: "Videos",
    icon: VideoCameraOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "public_products_tab",
    path: "/public-products-tab",
    title: "Public Products",
    icon: ReadOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
