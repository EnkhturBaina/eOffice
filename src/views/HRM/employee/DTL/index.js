import React, { useState } from "react";
import { Card, Menu, Radio } from "antd";
import {
  CloseOutlined,
  ExportOutlined,
  CopyOutlined,
  ContactsOutlined,
  BulbOutlined,
  MenuOutlined,
  MedicineBoxOutlined,
  ThunderboltOutlined,
  ConsoleSqlOutlined,
  ZhihuOutlined,
  DribbbleOutlined,
  TrophyOutlined,
  FileDoneOutlined,
  ContainerOutlined,
  FileTextOutlined,
  ScheduleOutlined,
  DollarOutlined,
  SnippetsOutlined,
  FileProtectOutlined,
  FunnelPlotOutlined,
  DatabaseOutlined,
  BuildOutlined,
  AuditOutlined,
  ApartmentOutlined,
  CarryOutOutlined,
  BugOutlined,
} from "@ant-design/icons";
import General from "./General";
import Education from "./Education";
import Work from "./Work";
import Family from "./Family";
import avatar from "../../../../assets/images/avatars/1.jpg";

function index(props) {
  const [valueRadio, setValueRadio] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("0");
  const options = [
    {
      label: "Хувийн мэдээлэл",
      value: 0,
    },
    {
      label: "Ажлын мэдээлэл",
      value: 1,
    },
  ];

  const onChange3 = ({ target: { value } }) => {
    setValueRadio(value);
  };
  const onClick = (e) => {
    setSelectedMenu(e.key);
  };
  const itemsPersonal = [
    {
      label: "Үндсэн мэдээлэл",
      key: "0",
      icon: <CopyOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Гэр бүлийн байдал",
      key: "1",
      icon: <ContactsOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Садан төрлийн байдал",
      key: "2",
      icon: <ContactsOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Боловсролын байдал",
      key: "3",
      icon: <BulbOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Ажлын туршлага",
      key: "4",
      icon: <ContainerOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Хамрагдсан сургалт",
      key: "5",
      icon: <FileDoneOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Шагнал урамшуулал",
      key: "6",
      icon: <TrophyOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Урлаг спортын авьяас",
      key: "7",
      icon: <DribbbleOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Гадаад хэлний мэдлэг",
      key: "8",
      icon: <ZhihuOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Мэдээллийн технологи",
      key: "9",
      icon: <ConsoleSqlOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Хувийн ур чадвар",
      key: "10",
      icon: <ThunderboltOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Эрүүл мэндийн үзлэг",
      key: "11",
      icon: <MedicineBoxOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Бусад мэдээлэл",
      key: "12",
      icon: <MenuOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
  ];
  const itemsWork = [
    {
      label: "Хөдөлмөрийн гэрээ",
      key: "0",
      icon: <FileTextOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Ажил үүргийн хуваарь",
      key: "1",
      icon: <ScheduleOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Цалинжих нөхцөл",
      key: "2",
      icon: <DollarOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Тодорхойлолт",
      key: "3",
      icon: <SnippetsOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Системийн хандалт",
      key: "4",
      icon: <FileProtectOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Тусгай удирдлага",
      key: "5",
      icon: <FileDoneOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Алдаа дутагдал",
      key: "6",
      icon: <FunnelPlotOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Нийгмийн халамж",
      key: "7",
      icon: <DatabaseOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Ээлжийн амралт",
      key: "8",
      icon: <BuildOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Албан томилолт",
      key: "9",
      icon: <AuditOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Шилжилт хөдөлгөөн",
      key: "10",
      icon: <ApartmentOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Дотоод сургалт",
      key: "11",
      icon: <CarryOutOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
    {
      label: "Ёс зүй",
      key: "12",
      icon: <BugOutlined style={{ fontSize: 20, color: "#1677ff" }} />,
    },
  ];
  return (
    <div className="!w-full flex">
      <Card className="custom-employee-card">
        <div
          style={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="relative">
            <img
              src={avatar}
              className="rounded-md"
              style={{ height: 160, width: 270 }}
            />
            <span
              className="absolute"
              style={{
                bottom: 10,
                left: "22%",
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Б. Нандин-Учрал
            </span>
          </div>
          <Radio.Group
            options={options}
            onChange={onChange3}
            value={valueRadio}
            optionType="button"
            buttonStyle="solid"
            style={{ marginTop: -5 }}
          />
          <Menu
            onClick={onClick}
            style={{
              width: 256,
              paddingTop: 10,
              borderInlineEnd: "none",
            }}
            defaultSelectedKeys={["0"]}
            mode="inline"
            items={valueRadio === 0 ? itemsPersonal : itemsWork}
          />
        </div>
      </Card>
      <div className="pl-4 !w-full">
        <div className="flex justify-end">
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
        {valueRadio === 0 && selectedMenu === "0" ? (
          <General selectedUserData={props.selectedUserData} />
        ) : null}
        {valueRadio === 0 && selectedMenu === "1" ? (
          <Family selectedUserData={props.selectedUserData} />
        ) : null}
        {valueRadio === 0 && selectedMenu === "2" ? <span>X</span> : null}
        {valueRadio === 0 && selectedMenu === "3" ? (
          <Education selectedUserData={props.selectedUserData} />
        ) : null}
        {valueRadio === 0 && selectedMenu === "4" ? (
          <Work selectedUserData={props.selectedUserData} />
        ) : null}
        {valueRadio === 0 && selectedMenu === "5" ? <span>X</span> : null}
        {valueRadio === 0 && selectedMenu === "6" ? <span>X</span> : null}
        {valueRadio === 0 && selectedMenu === "7" ? <span>X</span> : null}
        {valueRadio === 0 && selectedMenu === "8" ? <span>X</span> : null}
        {valueRadio === 0 && selectedMenu === "9" ? <span>X</span> : null}
        {valueRadio === 0 && selectedMenu === "10" ? (
          <General selectedUserData={props.selectedUserData} />
        ) : null}
        {valueRadio === 0 && selectedMenu === "11" ? (
          <General selectedUserData={props.selectedUserData} />
        ) : null}
        {valueRadio === 0 && selectedMenu === "12" ? (
          <General selectedUserData={props.selectedUserData} />
        ) : null}
        {valueRadio === 1 && selectedMenu === "0" ? (
          <span>Хөдөлмөрийн гэрээ</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "1" ? (
          <span>Ажил үүргийн хуваарь</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "2" ? (
          <span>Цалинжих нөхцөл</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "3" ? (
          <span>Тодорхойлолт</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "4" ? (
          <span>Системийн хандалт</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "5" ? (
          <span>Тусгай удирдлага</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "6" ? (
          <span>Алдаа дутагдал</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "7" ? (
          <span>Нийгмийн халамж</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "8" ? (
          <span>Ээлжийн амралт</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "9" ? (
          <span>Албан томилолт</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "10" ? (
          <span>Шилжилт хөдөлгөөн</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "11" ? (
          <span>Дотоод сургалт</span>
        ) : null}
        {valueRadio === 1 && selectedMenu === "12" ? <span>Ёс зүй</span> : null}
      </div>
    </div>
  );
}

export default index;

