import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import doctorType from "../../../../../references/doctorType.json";
import HealthUpdate from "./HealthUpdate";
import dayjs from "dayjs";

function Health(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [doctorData, setDoctorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDoctor = async () => {
    setDoctorData([]);
    setIsLoading(true);
    await UpdateWorkerData.getDoctor({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get Doctor =======>", response);
        if (response.status === 200) {
          setDoctorData(response.data?.response?.data);
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
    getDoctor();
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return doctorType.map((item, index) => {
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
        <HealthUpdate
          selectedUserData={props.selectedUserData}
          getDoctor={getDoctor}
          doctorData={doctorData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Эрүүл мэндийн үзлэг</span>
          </div>
          {doctorData?.length !== 0 ? (
            doctorData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Үзлэгийн төрөл
                      </span>
                      <span className="text-xs font-bold">
                        {getName(el.type)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Үзлэгт орсон огноо
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.date).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Эмчлүүлэх шаардлагтай эсэх
                      </span>
                      <span className="text-xs font-bold">
                        {el.isDoctor ? "Тийм" : "Үгүй"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Бусад тайлбар
                      </span>
                      <span className="text-xs font-bold">{el.info}</span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Үзлэгийн төрөл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Үзлэгт орсон огноо
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Эмчлүүлэх шаардлагтай эсэх
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Бусад тайлбар</span>
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

export default Health;
