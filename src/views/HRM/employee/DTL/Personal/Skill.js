import { Button, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import techType from "../../../../../references/techType.json";
import SkillUpdate from "./SkillUpdate";

function Skill(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [skillData, setSkillData] = useState([]);
  const [skillItemsData, setSkillItemsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTech = async () => {
    setSkillData([]);
    setIsLoading(true);
    await UpdateWorkerData.getTech({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get Tech =======>", response);
        if (response.status === 200) {
          setSkillData(
            response.data?.response?.data?.filter(
              (obj) =>
                obj.itechType === 2 ||
                obj.itechType === 3 ||
                obj.itechType === 4 ||
                obj.itechType === 5
            )
          );
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

  const getTechItems = async () => {
    setSkillItemsData([]);
    setIsLoading(true);
    await UpdateWorkerData.getTechItems({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get TechItems =======>", response);
        if (response.status === 200) {
          setSkillItemsData(response.data?.response?.data);
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
    getTech();
    getTechItems();
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return techType.map((item, index) => {
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
        <SkillUpdate
          selectedUserData={props.selectedUserData}
          getTechItems={getTechItems}
          skillData={skillData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Хувийн ур чадвар</span>
          </div>
          {skillData?.length !== 0 ? (
            skillData
              ?.filter((obj) => obj.itechType === 2)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {skillItemsData?.map((item, index) => {
                          if (item.itechId == el.id)
                            return (
                              <span key={index}>
                                {item.value ? getName(item.value) : "-"}
                              </span>
                            );
                        })}
                      </span>
                    </div>
                  </div>
                );
              })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500"></span>
                <span className="text-xs font-bold">-</span>
              </div>
            </div>
          )}
          <div className="mt-2">
            <span className="main-color font-bold">Харилцааны ур чадвар</span>
          </div>
          {skillData?.length !== 0 ? (
            skillData
              ?.filter((obj) => obj.itechType === 3)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {skillItemsData?.map((item, index) => {
                          if (item.itechId == el.id)
                            return (
                              <span key={index}>
                                {item.value ? getName(item.value) : "-"}
                              </span>
                            );
                        })}
                      </span>
                    </div>
                  </div>
                );
              })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">-</span>
                <span className="text-xs font-bold">-</span>
              </div>
            </div>
          )}
          <div className="mt-2">
            <span className="main-color font-bold">Бүлгээр ажиллах чадвар</span>
          </div>
          {skillData?.length !== 0 ? (
            skillData
              ?.filter((obj) => obj.itechType === 4)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {skillItemsData?.map((item, index) => {
                          if (item.itechId == el.id)
                            return (
                              <span key={index}>
                                {item.value ? getName(item.value) : "-"}
                              </span>
                            );
                        })}
                      </span>
                    </div>
                  </div>
                );
              })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">-</span>
                <span className="text-xs font-bold">-</span>
              </div>
            </div>
          )}
          <div className="mt-2">
            <span className="main-color font-bold">Бусад</span>
          </div>
          {skillData?.length !== 0 ? (
            skillData
              ?.filter((obj) => obj.itechType === 5)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {skillItemsData?.map((item, index) => {
                          if (item.itechId == el.id)
                            return (
                              <span key={index}>
                                {item.value ? getName(item.value) : "-"}
                              </span>
                            );
                        })}
                      </span>
                    </div>
                  </div>
                );
              })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">-</span>
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

export default Skill;
