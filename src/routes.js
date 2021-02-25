import Dashboard from "views/Dashboard.js";
import Competences from "views/Competences.js";
import Apprenants from "views/Apprenant.js";
import Promotions from "views/Promotions.js";
import UserProfile from "views/UserProfile.js";
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
    path: "/apprenants",
    name: "Apprenants",
    icon: "fas fa-graduation-cap",
    component: Apprenants,
    layout: "/admin",
  },
  {
    path: "/competences",
    name: "Competences",
    icon: "fas fa-chart-pie",
    component: Competences,
    layout: "/admin",
  },
  {
    path: "/promotions",
    name: "Promotions",
    icon: 'fas fa-cubes',
    component: Promotions,
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
