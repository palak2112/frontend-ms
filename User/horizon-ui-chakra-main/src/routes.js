import React from "react";
import { Trans } from "react-i18next";
import "i18n.js";
import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLogout,
  MdLibraryBooks,
  MdOutlineNewLabel,
  MdEventAvailable,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import request from "views/admin/request";
import request2 from "views/admin/request2";
import event_details from "views/admin/event_details";

// import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
// const {t} = useTranslation();
var Dashboard = "Dashboard";
const routes = [
  {
    name: <Trans >{{Dashboard}}</Trans>,
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Raise Request",
    layout: "/admin",
    icon: (
      <Icon as={MdOutlineNewLabel} width="20px" height="20px" color="inherit" />
    ),
    // path: "/data-tables",
    path: "/request2",
    component: request2,
  },
  {
    name: "All requests",
    layout: "/admin",
    icon: (
      <Icon as={MdLibraryBooks} width="20px" height="20px" color="inherit" />
    ),
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Upcoming events",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon as={MdEventAvailable} width="20px" height="20px" color="inherit" />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign Out",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLogout} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  {
    name: "Event Details",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/eventdetails/:eid",
    component: event_details,
    children: <event_details />,
    sidebarIgnore: true,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
];

export default routes;
