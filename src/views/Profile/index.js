import { CButton } from "@coreui/react";
import React, { useContext, useState, useEffect } from "react";
import header_bg from "../../assets/images/profile/header_bg.png";
import avatar from "../../assets/images/avatars/1.jpg";
import { cilCloudUpload, cilPen } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import Information from "./Information";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import LoginHistory from "./LoginHistory";
import AuthContext from "src/context/AuthContext";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import Human from "../../services/profile/human";

function index() {
  const auth_state = useContext(AuthContext);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: "Системээс гарах уу?",
      icon: <ExclamationCircleFilled />,
      content: "",
      onOk() {
        console.log("Тийм");
        auth_state.logout();
      },
      onCancel() {
        console.log("Үгүй");
      },
      okText: "Тийм",
      cancelText: "Үгүй",
    });
  };

  const getHuman = async () => {
    await Human.get()
      .then((t) => {
        console.log("T", t);
      })
      .catch((c) => {})
      .finally(() => {});
  };

  useEffect(() => {
    getHuman();
  }, []);

  return (
    <div>
      <img src={header_bg} width={"100%"} height={150} />
      <div className="d-flex px-20">
        <div className="relative">
          <img
            src={avatar}
            width={180}
            height={180}
            className="rounded-circle profile-avatar"
          />
          <div className="profile-avatar-edit-btn">
            <input
              className="profile-avatar-input"
              type="file"
              name="pic"
              accept="image/*"
            />
            <CIcon
              icon={cilCloudUpload}
              className="text-white cursor-pointer"
              size="xl"
              style={{ marginTop: "25%" }}
            />
          </div>
        </div>
        <div className="p-4">
          <span className="font-bold text-xl">
            Зориглон Бат-Эрдэнэ
            <CIcon
              icon={cilPen}
              className="main-color ml-1 cursor-pointer"
              size="xl"
              onClick={() => {
                setSelectedMenu(0);
                setIsEdit(true);
              }}
            />
          </span>
          <p className="italic text-lg">Хүний нөөцийн мэргэжилтэн</p>
        </div>
      </div>
      <div className="profile-container px-20 !mt-5 flex flex-row">
        <div className="basis-2/12 profile-menu-container">
          <div className="d-grid">
            <CButton
              color="dark"
              variant="ghost"
              className={`!mt-5 text-left profile-menu-button ${
                selectedMenu === 0 && "main-bg-color text-white"
              }`}
              onClick={() => {
                setSelectedMenu(0);
              }}
            >
              Ерөнхий мэдээлэл
            </CButton>
            <CButton
              color="dark"
              variant="ghost"
              className={`!mt-5 text-left profile-menu-button ${
                selectedMenu === 1 && "main-bg-color text-white"
              }`}
              onClick={() => {
                setSelectedMenu(1);
              }}
            >
              Нууц үг солих
            </CButton>
            <CButton
              color="dark"
              variant="ghost"
              className={`!mt-5 text-left profile-menu-button ${
                selectedMenu === 2 && "main-bg-color text-white"
              }`}
              onClick={() => {
                setSelectedMenu(2);
              }}
            >
              Хандалтын түүх
            </CButton>
            <CButton
              color="dark"
              variant="ghost"
              className={`!mt-5 text-left profile-menu-button`}
              onClick={() => {
                showConfirm();
              }}
            >
              Гарах
            </CButton>
          </div>
        </div>
        <div className="basis-10/12 ml-5 border-l border-slate-300 px-3">
          {!isEdit && selectedMenu === 0 && (
            <Information isEdit={isEdit} setIsEdit={setIsEdit} />
          )}
          {isEdit && selectedMenu === 0 && (
            <EditProfile isEdit={isEdit} setIsEdit={setIsEdit} />
          )}
          {selectedMenu === 1 && <ChangePassword />}
          {selectedMenu === 2 && <LoginHistory />}
        </div>
      </div>
    </div>
  );
}

export default index;

