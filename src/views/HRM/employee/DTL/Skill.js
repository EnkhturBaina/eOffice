import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import SkillUpdate from "./SkillUpdate";
import UpdateWorkerData from "../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import languageLevel from "../../../../references/languageLevel.json";

function Skill(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [aptData, setAptData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [langData, setLangData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSkill = async () => {
    console.log("props?.selectedUserData?.id", props?.selectedUserData?.id);
    setAptData([]);
    setAwardData([]);
    setLangData([]);
    setIsLoading(true);
    await UpdateWorkerData.getSkill({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("RES =======>", response);
        if (response.status === 200) {
          setAptData(response.data?.response?.aptitudes?.data);
          setAwardData(response.data?.response?.awards?.data);
          setLangData(response.data?.response?.languages?.data);
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

  const getName = (val) => {
    return languageLevel.map((item, index) => {
      console.log("item", item);
      if (item.value === val) {
        console.log("val", val);
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
          getSkill={getSkill}
          aptData={aptData}
          awardData={awardData}
          langData={langData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-1">
            <span className="main-color font-bold">Гадаад хэлний мэдлэг</span>
          </div>
          {langData.length !== 0 ? (
            langData?.map((el, index) => {
              return (
                <div key={index}>
                  <Divider className="mt-2 mb-1" />
                  <div className="grid grid-cols-3 gap-2">
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
                      <span className="text-xs text-slate-500">
                        Ерөнхий түвшин:
                      </span>
                      <span className="text-xs font-bold">
                        {getName(el.note)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
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
                <span className="text-xs text-slate-500">Ерөнхий түвшин:</span>
                <span className="text-xs font-bold">-</span>
              </div>
            </div>
          )}
          <div className="mt-1">
            <span className="main-color font-bold">Авъяас чадвар</span>
          </div>
          {aptData.length !== 0 ? (
            aptData?.map((el, index) => {
              return (
                <div key={index}>
                  <Divider className="mt-2 mb-1" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Төрөл:</span>
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
                <span className="text-xs text-slate-500">Төрөл:</span>
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
          {awardData.length !== 0 ? (
            awardData?.map((el, index) => {
              return (
                <div key={index}>
                  <Divider className="mt-2 mb-1" />
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Шагналын нэр:
                      </span>
                      <span className="text-xs font-bold">{el.awardName}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Он:</span>
                      <span className="text-xs font-bold">{el.sdate}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Талбар:</span>
                      <span className="text-xs font-bold">{el.type}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Тайлбар:</span>
                      <span className="text-xs font-bold">{el.reason}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Он:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Талбар:</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Шагналын нэр:</span>
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

export default Skill;
