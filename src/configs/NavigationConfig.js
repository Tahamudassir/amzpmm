import {
  DashboardOutlined,
  ShoppingCartOutlined,
  FileAddOutlined,
  CalculatorOutlined,
  KeyOutlined,
  UserOutlined,
  FileExcelOutlined,
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
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
