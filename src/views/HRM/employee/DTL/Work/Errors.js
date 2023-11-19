import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import mistakesType from "../../../../../references/mistakesType.json";
import ErrorsUpdate from "./ErrorsUpdate";

function Errors(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [mistakeData, setMistakeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMistakes = async () => {
    setMistakeData([]);
    setIsLoading(true);
    await UpdateWorkerData.getMistakes({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get Mistakes =======>", response);
        if (response.status === 200) {
          setMistakeData(response.data?.response?.data);
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
    getMistakes();
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return mistakesType.map((item, index) => {
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
        <ErrorsUpdate
          selectedUserData={props.selectedUserData}
          getMistakes={getMistakes}
          mistakeData={mistakeData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Алдаа дутагдал</span>
          </div>
          {mistakeData?.length !== 0 ? (
            mistakeData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Төрөл</span>
                      <span className="text-xs font-bold">
                        {getName(el.type)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Тушаалын №</span>
                      <span className="text-xs font-bold">{el.number}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Алдаа дутагдал
                      </span>
                      <span className="text-xs font-bold">{el.mistakes}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шалтгаан тайлбар
                      </span>
                      <span className="text-xs font-bold">{el.reason}</span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Төрөл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Тушаалын №</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Алдаа дутагдал</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Шалтгаан тайлбар</span>
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

export default Errors;
