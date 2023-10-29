import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import SkillUpdate from "./SkillUpdate";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";

function Skill(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [aptData, setAptData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSkill = async () => {
    setAptData([]);
    setIsLoading(true);
    await UpdateWorkerData.getAptitude({ userId: props?.selectedUserData?.id })
      .then((response) => {
        //   console.log("getSkill =======>", response);
        if (response.status === 200) {
          setAptData(response.data?.response?.aptitudes?.data);
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
    getSkill();
  }, [props?.selectedUserData]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <SkillUpdate
          selectedUserData={props.selectedUserData}
          getSkill={getSkill}
          aptData={aptData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-1">
            <span className="main-color font-bold">Урлаг спортын мэдээлэл</span>
          </div>
          {aptData?.length !== 0 ? (
            aptData?.map((el, index) => {
              return (
                <div key={index}>
                  <Divider className="mt-2 mb-1" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Хичээллэдэг урлаг, спорт:
                      </span>
                      <span className="text-xs font-bold">{el.sName}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Хичээллэсэн жил:
                      </span>
                      <span className="text-xs font-bold">{el.sYear}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Зэрэг,цол:</span>
                      <span className="text-xs font-bold">{el.level}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Хичээллэдэг урлаг, спорт:
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Хичээллэсэн жил:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Зэрэг,цол:</span>
                <span className="text-xs font-bold">-</span>
              </div>
            </div>
          )}
          <div className="mt-1">
            <span className="main-color font-bold">Шагналын мэдээлэл</span>
          </div>
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

export default Skill;
