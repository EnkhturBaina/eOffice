import React from "react";
import avatar from "../../../../assets/images/avatars/1.jpg";

function General(props) {
  console.log("props", props);
  return (
    <div>
      <div className="flex flex-row !mt-2">
        <div className="flex flex-col flex-1">
          <div className="flex flex-row">
            <span className="main-color font-bold">Хувийн мэдээлэл</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Ургийн овог:</span>
              <span className="text-xs font-bold">
                {props.selectedUserData?.humans?.familyName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Эцэг /эх/-ийн нэр:</span>
              <span className="text-xs font-bold">
                {props.selectedUserData?.humans?.firstName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Өөрийн нэр:</span>
              <span className="text-xs font-bold">
                {props.selectedUserData?.humans?.lastName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Регистрийн дугаар:</span>
              <span className="text-xs font-bold">
                {props.selectedUserData?.humans?.regNumber}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Яс үндэс:</span>
              <span className="text-xs font-bold">
                {props.selectedUserData?.humans?.nation}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Иргэншил:</span>
              <span className="text-xs font-bold">ID</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">
                Ажллаж буй компани:
              </span>
              <span className="text-xs font-bold">
                {props.selectedUserData?.companies?.name}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Ажлын поситион:</span>
              <span className="text-xs font-bold">-</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <span className="main-color font-bold">Холбоо барих</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Гар утас:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.mobile}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Гэрийн утас:</span>
          <span className="text-xs font-bold">-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">И-Мэйл хаяг:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.personalMail}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Facebook:</span>
          <span className="text-xs font-bold">-</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="main-color font-bold">
          Яаралтай тохиолдолд холбоо барих хүн
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Ажилчны юу болох:</span>
          <span className="text-xs font-bold">-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Овог:</span>
          <span className="text-xs font-bold">-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Нэр:</span>
          <span className="text-xs font-bold">-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Утасны дугаар:</span>
          <span className="text-xs font-bold">-</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="main-color font-bold">Хаяг</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Аймаг, хот:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.familyName}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Сум, дүүрэг:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.familyName}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Баг хороо:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.familyName}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Хороолол:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.familyName}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Байшин:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.familyName}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500">Хаалганы дугаар:</span>
          <span className="text-xs font-bold">
            {props.selectedUserData?.humans?.familyName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default General;

