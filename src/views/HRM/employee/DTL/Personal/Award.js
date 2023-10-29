import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import AwardUpdate from "./AwardUpdate";
import dayjs from "dayjs";

function Award(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [awardData, setAwardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAward = async () => {
    setAwardData([]);
    setIsLoading(true);
    await UpdateWorkerData.getAward({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("getAward =======>", response);
        if (response.status === 200) {
          setAwardData(response.data?.response?.data);
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
    getAward();
  }, [props?.selectedUserData]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <AwardUpdate
          selectedUserData={props.selectedUserData}
          getAward={getAward}
          awardData={awardData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Шагнал урамшуулал</span>
          </div>
          {awardData?.length !== 0 ? (
            awardData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шагналын нэр
                      </span>
                      <span className="text-xs font-bold">{el.awardName}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шагналын төрөл
                      </span>
                      <span className="text-xs font-bold">{el.type}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шийдвэрийн дугаар
                      </span>
                      <span className="text-xs font-bold">{el.sNumber}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шийдвэрийн нэр
                      </span>
                      <span className="text-xs font-bold">{el.sName}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шагнасан байгууллага:
                      </span>
                      <span className="text-xs font-bold">{el.bonus}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шагнагдсан шалтгаан:
                      </span>
                      <span className="text-xs font-bold">{el.reason}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шагнуулсан огноо:
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.date).format("YYYY-MM-DD")}
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
                <span className="text-xs text-slate-500">Шагналын нэр</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Шагналын төрөл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Шийдвэрийн дугаар
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Шийдвэрийн нэр</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Шагнасан байгууллага:
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Шагнагдсан шалтгаан:
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Шагнуулсан огноо:
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

export default Award;
