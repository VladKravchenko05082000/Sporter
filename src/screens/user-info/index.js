import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import style from "./style.module.scss";

import UserAnalytics from "./user-analytics";
import UserCalendar from "./user-calendar";
import UserData from "./user-data";
import UserMailing from "./user-mailing";
import UserTeam from "./user-team";
import Tabs from "components/tabs";

const UserInfo = () => {
  const [activeTab, setActiveTab] = useState("0");
  console.log(activeTab);
  const namesForTab = [
    {
      Component: UserData,
      name: "Information",
      routingTabItem: "info",
    },
    {
      Component: UserCalendar,
      name: "Calendar",
      routingTabItem: "calendar",
    },
    {
      Component: UserTeam,
      name: "Team",
      routingTabItem: "team",
    },
    {
      Component: UserAnalytics,
      name: "Analytics",
      routingTabItem: "analytics",
    },
    {
      Component: UserMailing,
      name: "Mailing",
      routingTabItem: "mailing",
    },
  ];

  const { tabItem, userId } = useParams();

  const history = useHistory();

  // useEffect(() => {
  //   const tabIndex = namesForTab.findIndex(
  //     ({ routingTabItem }) => routingTabItem === tabItem
  //   );
  //   setActiveTab(String(tabIndex));
  // }, [tabItem]);

  const showTabComponent = () => {
    const { Component } = namesForTab[+activeTab];
    return <Component activeTab={activeTab} setActiveTab={setActiveTab} />;
  };

  const setItem = (item) => {
    const { routingTabItem } = namesForTab[+item];

    history.push("/user-info/" + userId + `/${routingTabItem}`);

    setActiveTab(item);
  };

  return <div className={style.some}>{showTabComponent()}</div>;
};

export default UserInfo;
