import { Button, Divider } from "antd";
import React, { useState, useEffect } from "react";
import EducationUpdate from "./EducationUpdate";
import UpdateWorkerData from "../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";

function Education(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [educationData, setEducationData] = useState(false);

  const getEducation = async (values) => {
    console.log("A");
    await UpdateWorkerData.get({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("getEducation", response.data?.response?.data);
        if (response.status === 200) {
          setEducationData(response.data?.response?.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getEducation();
  }, []);

  return (
    <>
      {isUpdate ? (
        <EducationUpdate selectedUserData={props.selectedUserData} />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Ерөнхий боловсрол</span>
          </div>
          {educationData &&
            educationData
              ?.filter((data) => data.type === 1)
              .map((el, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-3 gap-x-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Сургууль:
                        </span>
                        <span className="text-xs font-bold">
                          {el.schoolName}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Элссэн он:
                        </span>
                        <span className="text-xs font-bold">
                          {el.startYear}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Төгссөн он:
                        </span>
                        <span className="text-xs font-bold">{el.endYear}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">Улс:</span>
                        <span className="text-xs font-bold">
                          {el.countryId}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Аймаг, хот:
                        </span>
                        <span className="text-xs font-bold">{el.cityId}</span>
                      </div>
                    </div>
                    <Divider className="mt-2 mb-1" />
                  </div>
                );
              })}
          <div className="mt-1">
            <span className="main-color font-bold">Дээд боловсрол</span>
          </div>
          {educationData &&
            educationData
              ?.filter((data) => data.type === 2)
              .map((el, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-3 gap-x-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Сургууль:
                        </span>
                        <span className="text-xs font-bold">
                          {el.schoolName}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Элссэн он:
                        </span>
                        <span className="text-xs font-bold">
                          {el.startYear}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Төгссөн он:
                        </span>
                        <span className="text-xs font-bold">{el.endYear}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">Улс:</span>
                        <span className="text-xs font-bold">
                          {el.countryId}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Аймаг, хот:
                        </span>
                        <span className="text-xs font-bold">{el.cityId}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Мэргэжил:
                        </span>
                        <span className="text-xs font-bold">
                          {el.occupation}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Зэрэглэл:
                        </span>
                        <span className="text-xs font-bold">{el.degree}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Дипломны дугаар:
                        </span>
                        <span className="text-xs font-bold">
                          {el.diplomNumber}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">Дүн:</span>
                        <span className="text-xs font-bold">{el.grade}</span>
                      </div>
                    </div>
                    <Divider className="mt-2 mb-1" />
                  </div>
                );
              })}
          <div className="mt-1">
            <span className="main-color font-bold">
              Мэргэжлийн чиглэлээр хамрагдаж байсан сургалт
            </span>
          </div>
          {educationData &&
            educationData
              ?.filter((data) => data.type === 3)
              .map((el, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-3 gap-x-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Нарийн мэргэжлийн нэр:
                        </span>
                        <span className="text-xs font-bold">
                          {el.fineProfession}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Авсан он:
                        </span>
                        <span className="text-xs font-bold">
                          {el.startDate}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Хугацаа дуусах он:
                        </span>
                        <span className="text-xs font-bold">{el.endDate}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Байгууллага/Сургууль:
                        </span>
                        <span className="text-xs font-bold">
                          {el.organizationName}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          Гэрчилгээний дугаар:
                        </span>
                        <span className="text-xs font-bold">
                          {el.certificateNumber}
                        </span>
                      </div>
                    </div>
                    <Divider className="mt-2 mb-1" />
                  </div>
                );
              })}
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

export default Education;
