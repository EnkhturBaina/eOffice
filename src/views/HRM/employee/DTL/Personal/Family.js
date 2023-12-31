import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import FamilyUpdate from "./FamilyUpdate";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import dayjs from "dayjs";
import familyPersons from "../../../../../references/familyPersons.json";

function Family(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [familyData, setFamilyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFamily = async () => {
    setFamilyData([]);
    setIsLoading(true);
    await UpdateWorkerData.getFamily({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get Family =======>", response);
        if (response.status === 200) {
          setFamilyData(response.data?.response?.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {
        setIsUpdate(false);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getFamily();
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return familyPersons.map((item, index) => {
      if (item.value === val) {
        return <span key={index}>{item.label}</span>;
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <FamilyUpdate
          selectedUserData={props.selectedUserData}
          getFamily={getFamily}
          familyData={familyData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">
              Гэр бүлийн гишүүдийн мэдээлэл
            </span>
          </div>
          {familyData?.length !== 0 ? (
            familyData?.map((el, index) => {
              return (
                <div key={index}>
                  <Divider className="mt-2 mb-1" />
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Таны хэн болох
                      </span>
                      <span className="text-xs font-bold">
                        {getName(el.whoIs)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Овог</span>
                      <span className="text-xs font-bold">{el.lName}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Нэр</span>
                      <span className="text-xs font-bold">{el.fName}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Ажлын төрөл
                      </span>
                      <span className="text-xs font-bold">{el.jobType}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Тайлбар</span>
                      <span className="text-xs font-bold">{el.desc}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Ажлын нэр</span>
                      <span className="text-xs font-bold">{el.jobName}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Зэрэглэл</span>
                      <span className="text-xs font-bold">{el.rank}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Ажил мэргэжил
                      </span>
                      <span className="text-xs font-bold">{el.occupation}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Төрсөн он сар өдөр
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.birthDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Төрсөн аймаг/хот
                      </span>
                      <span className="text-xs font-bold">
                        {el.birthCity.name}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Амьдарч буй аймаг/хот
                      </span>
                      <span className="text-xs font-bold">
                        {el.liveCity.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Таны хэн болох</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Овог</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Нэр</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Ажлын төрөл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Тайлбар</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Ажлын нэр</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Зэрэглэл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Ажил мэргэжил</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Төрсөн он сар өдөр
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Төрсөн аймаг/хот</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Амьдарч буй аймаг/хот
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
            </div>
          )}
          <div className="flex justify-end !mt-12">
            <Button
              onClick={() => {
                setIsUpdate(true);
              }}
            >
              Засах
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Family;
