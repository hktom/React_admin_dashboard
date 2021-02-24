import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Add from "./views/apprenants/add";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-tachometer-alt",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Apprenants",
    icon: "fas fa-graduation-cap",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Competences",
    icon: "fas fa-chart-pie",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Promotions",
    icon: 'fas fa-cubes',
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: 'fas fa-user',
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/apprenant/add",
    component: Add,
    layout: "/admin",
    sub:true,
  },
  {
    path: "/admin/apprenant/edit/:id",
    component: UserProfile,
    layout: "/admin",
    sub:true,
  },
];

export default dashboardRoutes;
