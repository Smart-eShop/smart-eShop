import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  
  {
    _tag: "CSidebarNavTitle",
    _children: ["Įrankiai"],
  },
  
  {
    _tag: "CSidebarNavItem",
    name: "Vartotojai",
    to: "/theme/UserRoles",
    icon: "cil-puzzle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Kategorijos",
    to: "/all-categories",
    icon: "cil-list",
  },
  {
    _tag: "CSidebarNavItem",

    name: "Produktai",
    to: "/all-products",
    icon: "cil-basket",
  },
  {
    _tag: "CSidebarNavItem",

    name: "Užsakymai",
    to: "/all-orders",
    icon: "cil-cursor",
  },
  {
    _tag: "CSidebarNavItem",

    name: "Keisti Produktą",
    to: "/edit-product",
    icon: "cil-basket",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Pristatymai",
    to: "/all-delivery",
    icon: "cil-truck",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Apmokėjimai",
    to: "/all-payments",
    icon: "cil-euro",
  },
 
];

export default _nav;
