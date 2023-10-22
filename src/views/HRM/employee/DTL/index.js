import React, { useState } from "react";
import { Button, Card, Tabs } from "antd";
import { CloseOutlined, ExportOutlined } from "@ant-design/icons";
import General from "./General";
import Education from "./Education";
import Skill from "./Skill";
import Work from "./Work";
import Family from "./Family";
import History from "./History";
import Contract from "./Contract";
import Command from "./Command";
import Contact from "./Contact";

function index(props) {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Ерөнхий мэдээлэл`,
      children: <General selectedUserData={props.selectedUserData} />,
    },
    {
      key: "2",
      label: `Боловсрол`,
      children: <Education selectedUserData={props.selectedUserData} />,
    },
    {
      key: "3",
      label: `Ур чадвар`,
      children: <Skill selectedUserData={props.selectedUserData} />,
    },
    {
      key: "4",
      label: `Ажлын туршлага`,
      children: <Work selectedUserData={props.selectedUserData} />,
    },
    {
      key: "5",
      label: `Гэр бүл`,
      children: <Family selectedUserData={props.selectedUserData} />,
    },
    {
      key: "6",
      label: `Түүхүүд`,
      children: <History selectedUserData={props.selectedUserData} />,
    },
    {
      key: "7",
      label: `Гэрээ`,
      children: <Contract selectedUserData={props.selectedUserData} />,
    },
    {
      key: "8",
      label: `Тушаал`,
      children: <Command selectedUserData={props.selectedUserData} />,
    },
    {
      key: "9",
      label: `Мэдээлэл өгөх хүн`,
      children: <Contact selectedUserData={props.selectedUserData} />,
    },
  ];

  const operations = (
    <div className="flex">
      <ExportOutlined
        className="!ml-5 cursor-pointer"
        style={{ fontSize: 20 }}
        onClick={() => {
          if (props.dtlSize === 1) {
            props.setDtlSize(2);
          } else if (props.dtlSize === 2) {
            props.setDtlSize(1);
          }
        }}
      />
      <CloseOutlined
        className="!ml-3 cursor-pointer"
        style={{ fontSize: 20 }}
        onClick={() => {
          props.setDtlSize(0);
          props.setSelectedUserData(null);
        }}
      />
    </div>
  );
  return (
    <div className="!w-full">
      <Card className="custom-employee-card">
        <div className="flex-row justify-between !block">
          <div>
            <Tabs
              defaultActiveKey="1"
              items={items.map((el, index) => {
                return {
                  label: <span className="text-xs">{el.label}</span>,
                  key: index,
                  children: el.children,
                };
              })}
              onChange={onChange}
              className="employee-dtl-tab"
              tabBarExtraContent={operations}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default index;

