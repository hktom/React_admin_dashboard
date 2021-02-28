import Dashboard from "views/Dashboard.js";
import Competences from "views/Competences.js";
import Apprenants from "views/Apprenant.js";
import Promotions from "views/Promotions.js";
import UserProfile from "views/UserProfile.js";
import AddApprenant from "./views/apprenants/add_apprenant";
import AddCompetence from "./views/competences/add_competence";
import AddPromotion from "./views/promotions/add_promotion";
import AddUser from "./views/user/add_profile";
import ShowApprenant from "./views/apprenants/show_apprenant";
import Login from "./views/Login.js";

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
    icon: "fas fa-cubes",
    component: Promotions,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "fas fa-user",
    component: UserProfile,
    layout: "/admin",
  },
  // Apprenants
  {
    path: "/apprenant/add",
    component: AddApprenant,
    layout: "/admin",
    sub: true,
  },
  {
    path: "/apprenant/edit",
    component: AddApprenant,
    layout: "/admin",
    sub: true,
  },
  {
    path: "/apprenant/show",
    component: ShowApprenant,
    layout: "/admin",
    sub: true,
  },
  // Competence
  {
    path: "/competence/add",
    component: AddCompetence,
    layout: "/admin",
    sub: true,
  },
  {
    path: "/competence/edit",
    component: AddCompetence,
    layout: "/admin",
    sub: true,
  },
  // Promotion
  {
    path: "/promotion/add",
    component: AddPromotion,
    layout: "/admin",
    sub: true,
  },
  {
    path: "/promotion/edit",
    component: AddPromotion,
    layout: "/admin",
    sub: true,
  },
  // user
  {
    path: "/user/add",
    component: AddUser,
    layout: "/admin",
    sub: true,
  },
  // login
  {
    path: "/admin",
    name: "Login",
    sub: true,
    component: Login,
  },
];

export default dashboardRoutes;