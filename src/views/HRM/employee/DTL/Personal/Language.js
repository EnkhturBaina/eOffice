import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import LanguageUpdate from "./LanguageUpdate";
import languageLevel from "../../../../../references/languageLevel.json";

function Language(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [languageData, setLanguageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLanguage = async () => {
    setLanguageData([]);
    setIsLoading(true);
    await UpdateWorkerData.getLanguage({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("getLanguage =======>", response);
        if (response.status === 200) {
          setLanguageData(response.data?.response?.data);
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
    getLanguage();
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return languageLevel.map((item, index) => {
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
        <LanguageUpdate
          selectedUserData={props.selectedUserData}
          getLanguage={getLanguage}
          languageData={languageData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Садан төрлийн мэдээлэл</span>
          </div>
          {languageData?.length !== 0 ? (
            languageData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Гадаад хэл:
                      </span>
                      <span className="text-xs font-bold">
                        {el.country?.name}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Шалгалт:</span>
                      <span className="text-xs font-bold">{el.exam}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Оноо:</span>
                      <span className="text-xs font-bold">{el.score}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Ярих:</span>
                      <span className="text-xs font-bold">
                        {getName(el.speak)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Сонсох:</span>
                      <span className="text-xs font-bold">
                        {getName(el.listen)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Унших :</span>
                      <span className="text-xs font-bold">
                        {getName(el.read)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Бичих:</span>
                      <span className="text-xs font-bold">
                        {getName(el.write)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Тайлбар:</span>
                      <span className="text-xs font-bold">{el.note}</span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Гадаад хэл:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Шалгалт:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Оноо:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Ярих:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Сонсох:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Унших :</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Бичих:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Тайлбар:</span>
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

export default Language;
