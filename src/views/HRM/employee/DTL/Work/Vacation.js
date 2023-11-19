import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import VacationUpdate from "./VacationUpdate";
import dayjs from "dayjs";

function Vacation(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [vacationData, setVacationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getVacation = async () => {
    setVacationData([]);
    setIsLoading(true);
    await UpdateWorkerData.getVacation({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get Vacation =======>", response);
        if (response.status === 200) {
          setVacationData(response.data?.response?.data);
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
    getVacation();
  }, [props?.selectedUserData]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <VacationUpdate
          selectedUserData={props.selectedUserData}
          getVacation={getVacation}
          vacationData={vacationData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Ээлжийн амралт</span>
          </div>
          {vacationData?.length !== 0 ? (
            vacationData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Тушаалын дугаар
                      </span>
                      <span className="text-xs font-bold">{el.number}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Эхэлсэн</span>
                      <span className="text-xs font-bold">
                        {dayjs(el.startDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Дууссан</span>
                      <span className="text-xs font-bold">
                        {dayjs(el.endDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Тайлбар</span>
                      <span className="text-xs font-bold">{el.comment}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Амралтын хоног
                      </span>
                      <span className="text-xs font-bold">{el.duration}</span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Тушаалын дугаар</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Эхэлсэн</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Дууссан</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Тайлбар</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Амралтын хоног</span>
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
              Нэмэх
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Vacation;
