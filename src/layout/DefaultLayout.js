import React, { useContext, useState } from "react";
import { AppContent, AppSidebar } from "../components/index";
import { CImage } from "@coreui/react";
import main_logo from "src/assets/main_logo.png";
import avatarImg from "src/assets/images/avatars/2.jpg";
import MainContext from "src/context/MainContext";
import CIcon from "@coreui/icons-react";
import {
  cilAvTimer,
  cilBell,
  cilChatBubble,
  cilFile,
  cilGroup,
  cilSettings,
  freeSet,
} from "@coreui/icons";
import { useNavigate } from "react-router-dom";

const DefaultLayout = () => {
  const state = useContext(MainContext);
  const [hoverItem, setHoverItem] = useState(null);
  const navigate = useNavigate();
  const menus = [
    // {
    //    id: 1,
    //    className: 'icon icon-b',
    //    text: 'FRM',
    //    disabled: true
    // },
    {
      id: 2,
      text: "HRM",
      isHideSidebar: true,
      url: "/hrm",
    },
    {
      id: 3,
      icon: cilSettings,
      url: "/settings/companies",
    },
    {
      id: 4,
      icon: freeSet.cilMediaEject,
    },
  ];
  const bottom_menus = [
    {
      id: 9,
      icon: cilFile,
      isHideSidebar: true,
      url: "/report",
    },
    {
      id: 10,
      icon: cilAvTimer,
      url: "/attendance/main",
    },
    {
      id: 11,
      icon: cilChatBubble,
    },
    {
      id: 12,
      icon: cilGroup,
      isHideSidebar: true,
      url: "",
    },
    {
      id: 13,
      icon: cilBell,
    },
    {
      id: 99,
      isProfile: true,
      isHideSidebar: true,
      url: "/profile",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="leftSide">
        <div className="top">
          <CImage
            align="start"
            rounded
            src={main_logo}
            width={47}
            height={32}
          />
          <ul style={{ marginTop: "50%" }}>
            {menus.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    state.selectedParentMenu === item.id ? "active" : ""
                  }
                  onClick={() => {
                    if (!item.disabled) {
                      state.setSelectedParentMenu(item.id);
                      if (item.isHideSidebar) {
                        state.setSidebarShow(false);
                      } else {
                        state.setSidebarShow(true);
                      }
                      item.url && navigate(item.url);
                    }
                  }}
                >
                  <div
                    className={
                      hoverItem === item.id ? "content hover-style" : "content"
                    }
                    onMouseEnter={() => {
                      setHoverItem(item.id);
                    }}
                    onMouseLeave={() => {
                      setHoverItem(null);
                    }}
                  >
                    {item.icon ? (
                      <CIcon
                        icon={item.icon}
                        className={
                          hoverItem === item.id ||
                          state.selectedParentMenu === item.id
                            ? "main-color"
                            : "text-white"
                        }
                        size="lg"
                      />
                    ) : null}
                    {item.text ? (
                      <span
                        className={
                          hoverItem === item.id ||
                          state.selectedParentMenu === item.id
                            ? "main-color"
                            : "text-white"
                        }
                        style={{ fontSize: 12, caretColor: "transparent" }}
                      >
                        {item.text}
                      </span>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bottom">
          <ul>
            {bottom_menus.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    state.selectedParentMenu === item.id ? "active" : ""
                  }
                  onClick={() => {
                    state.setSelectedParentMenu(item.id);
                    if (item.isHideSidebar) {
                      state.setSidebarShow(false);
                    } else {
                      state.setSidebarShow(true);
                    }
                    item.url && navigate(item.url);
                  }}
                >
                  <div
                    className={
                      hoverItem === item.id ? "content hover-style" : "content"
                    }
                    onMouseEnter={() => {
                      setHoverItem(item.id);
                    }}
                    onMouseLeave={() => {
                      setHoverItem(null);
                    }}
                  >
                    {item.icon ? (
                      <CIcon
                        icon={item.icon}
                        className={
                          hoverItem === item.id ||
                          state.selectedParentMenu === item.id
                            ? "main-color"
                            : "text-white"
                        }
                        size="lg"
                      />
                    ) : null}
                    {item.isProfile ? (
                      <CImage
                        align="start"
                        rounded
                        src={avatarImg}
                        width={20}
                        height={20}
                        className="disable-caret"
                        onClick={() => navigate("/profile")}
                      />
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {state.sidebarShow ? <AppSidebar /> : null}
      <div
        className={`wrapper d-flex flex-column min-vh-100 ${
          state.sidebarShow ? "bg-slate-50" : "bg-white"
        }`}
        style={{ paddingLeft: state.sidebarShow ? "22rem" : "6rem" }}
      >
        <div className="body flex-grow-1 main-content-body">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

