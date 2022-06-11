import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdAssignment,
  MdNoteAdd,
  MdOutlineShoppingCart,
  MdAccountBalance,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import Profile1 from "views/admin/profile1";
import Profile2 from "views/admin/profile2";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Upcoming Events",
    layout: "/admin",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    path: "/NFTMarketplace",
    component: NFTMarketplace,
  },
  {
    name: "Requests",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/requests",
    component: DataTables,
  },

  {
    name: "Request Details",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/details",
    component: Profile1,
  },

  {
    name: "Add Event",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdNoteAdd} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },

  {
    name: "Event Details",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/eventdetails",
    component: Profile2,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
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
