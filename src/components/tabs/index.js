import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Tabs = ({ children }) => {
  return <div className="custom-tab"></div>;
};

const TabPane = ({ children }) => {
  return { children };
};

Tabs.TabPane = TabPane;

export default Tabs;
