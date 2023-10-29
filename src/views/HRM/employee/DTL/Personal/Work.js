import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import WorkUpdate from "./WorkUpdate";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import dayjs from "dayjs";

function Work(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [workData, setWorkData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getWork = async () => {
    setWorkData([]);
    setIsLoading(true);
    await UpdateWorkerData.getWork({ userId: props?.selectedUserData?.id })
      .then((response) => {
        //   console.log("getWork =======>", response);
        if (response.status === 200) {
          setWorkData(response.data?.response?.data);
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
    getWork();
  }, [props?.selectedUserData]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <WorkUpdate
          selectedUserData={props.selectedUserData}
          getWork={getWork}
          workData={workData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">
              Нийгмийн даатгалаар баталгаажсан хөдөлмөр эрхлэлт
            </span>
          </div>
          {workData?.length !== 0 ? (
            workData?.map((el, index) => {
              return (
                <div key={index}>
                  <Divider className="mt-2 mb-1" />

                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Ямар ажил хийж байсан
                      </span>
                      <span className="text-xs font-bold">{el.workType}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Ажлын газар
                      </span>
                      <span className="text-xs font-bold">{el.company}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Салбар</span>
                      <span className="text-xs font-bold">{el.branch}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Карьер</span>
                      <span className="text-xs font-bold">{el.career}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Ажилд орсон огноо
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.startDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Ажилаас гарсан огноо
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.endDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Ажилаас гарсан шалтгаан
                      </span>
                      <span className="text-xs font-bold">{el.reason}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Ямар ажил хийж байсан
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Ажлын газар</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Салбар</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Карьер</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Ажилд орсон огноо
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Ажилаас гарсан огноо
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Ажилаас гарсан шалтгаан
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

export default Work;
