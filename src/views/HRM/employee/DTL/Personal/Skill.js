import { Button, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import techType from "../../../../../references/techType.json";
import SkillUpdate from "./SkillUpdate";

function Skill(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [techData, setTechData] = useState([]);
  const [techItemsData, setTechItemsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [testState, setTestState] = useState({});

  const getTech = async () => {
    setTechData([]);
    setIsLoading(true);
    await UpdateWorkerData.getTech({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get Tech =======>", response);
        if (response.status === 200) {
          setTechData(
            response.data?.response?.data?.filter(
              (obj) =>
                obj.itechType === 2 ||
                obj.itechType === 3 ||
                obj.itechType === 4 ||
                obj.itechType === 5
            )
          );
          getTechItems();
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
    setTechItemsData([]);
    setIsLoading(true);
    await UpdateWorkerData.getTechItems({ userId: props?.selectedUserData?.id })
      .then((response) => {
        if (response.status === 200) {
          console.log("getTech Items=======>", response);
          setTechItemsData(response.data?.response?.data);
          if (techData) {
            const test = techData.map((techDataTest) => ({
              id: techDataTest.id,
              value: response.data?.response?.data.find(
                (tt) => tt.itechId === techDataTest.id
              )?.value,
            }));
            const initalValue = test.reduce(
              (obj, item) => Object.assign(obj, { [item.id]: item.value }),
              {}
            );
            setTestState(initalValue);
          }
        } else {
          setTestState({});
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
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return techType.map((item, index) => {
      console.log("VAL", val);
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
          techData={techData}
          setIsUpdate={setIsUpdate}
          testState={testState}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Хувийн ур чадвар</span>
          </div>
          {techData?.length !== 0 ? (
            techData
              ?.filter((obj) => obj.itechType === 2)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {techItemsData?.map((item, index) => {
                          if (item.itechId == el.id)
                            return (
                              <span key={index}>
                                {item.value !== null
                                  ? getName(item.value)
                                  : "-"}
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
          {techData?.length !== 0 ? (
            techData
              ?.filter((obj) => obj.itechType === 3)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {techItemsData?.map((item, index) => {
                          if (item.itechId == el.id) {
                            return (
                              <span key={index}>
                                {item.value !== null
                                  ? getName(item.value)
                                  : "-"}
                              </span>
                            );
                          }
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
          {techData?.length !== 0 ? (
            techData
              ?.filter((obj) => obj.itechType === 4)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {techItemsData?.map((item, index) => {
                          if (item.itechId == el.id) {
                            return (
                              <span key={index}>
                                {item.value !== null
                                  ? getName(item.value)
                                  : "-"}
                              </span>
                            );
                          }
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
          {techData?.length !== 0 ? (
            techData
              ?.filter((obj) => obj.itechType === 5)
              ?.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-row mb-1">
                      <span className="text-xs text-slate-500">{el.name}:</span>
                      <span className="text-xs font-bold ml-1">
                        {techItemsData?.map((item, index) => {
                          if (item.itechId == el.id) {
                            return (
                              <span key={index}>
                                {item.value !== null
                                  ? getName(item.value)
                                  : "-"}
                              </span>
                            );
                          }
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
