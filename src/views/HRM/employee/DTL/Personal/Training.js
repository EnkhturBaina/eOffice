import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import familyPersons from "../../../../../references/familyPersons.json";
import jobType from "../../../../../references/jobType.json";
import TrainingUpdate from "./TrainingUpdate";
import dayjs from "dayjs";

function Training(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [trainingData, setTrainingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTraining = async () => {
    setTrainingData([]);
    setIsLoading(true);
    await UpdateWorkerData.getTraining({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("getTraining =======>", response);
        if (response.status === 200) {
          setTrainingData(response.data?.response?.data);
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
    getTraining();
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return familyPersons.map((item, index) => {
      if (item.value === val) {
        return <span key={index}>{item.label}</span>;
      }
    });
  };
  const getJobName = (val) => {
    return jobType.map((item, index) => {
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
        <TrainingUpdate
          selectedUserData={props.selectedUserData}
          getTraining={getTraining}
          trainingData={trainingData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">
              Сургалтанд хамрагдсан байдал
            </span>
          </div>
          {trainingData?.length !== 0 ? (
            trainingData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Сургалтын нэр
                      </span>
                      <span className="text-xs font-bold">{el.name}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Сургалтын чиглэл
                      </span>
                      <span className="text-xs font-bold">{el.course}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Сургалтын төрөл
                      </span>
                      <span className="text-xs font-bold">{el.type}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Зохион байгуулагч
                      </span>
                      <span className="text-xs font-bold">{el.organiser}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Улс</span>
                      <span className="text-xs font-bold">
                        {el?.country?.name}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Аймаг</span>
                      <span className="text-xs font-bold">
                        {el?.city?.name}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Үнэмлэх №</span>
                      <span className="text-xs font-bold">{el.serNumber}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Эхэлсэн огноо
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.startDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Дууссан огноо
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.endDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Сургалтын нэр</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Сургалтын чиглэл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Сургалтын төрөл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Зохион байгуулагч
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Улс</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Аймаг</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Үнэмлэх №</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Эхэлсэн огноо</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Дууссан огноо</span>
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

export default Training;
