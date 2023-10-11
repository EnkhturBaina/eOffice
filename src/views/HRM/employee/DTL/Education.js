import { Button } from "antd";
import React, { useState } from "react";
import EducationUpdate from "./EducationUpdate";

function Education() {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <>
      {isUpdate ? (
        <EducationUpdate />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Ерөнхий боловсрол</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Сургууль:</span>
              <span className="text-xs font-bold">1-р сургууль</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Элссэн он:</span>
              <span className="text-xs font-bold">2017</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Төгссөн он:</span>
              <span className="text-xs font-bold">2021</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Улс:</span>
              <span className="text-xs font-bold">Монгол</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Аймаг, хот:</span>
              <span className="text-xs font-bold">Улаанбаатар</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Дүн:</span>
              <span className="text-xs font-bold">3.4</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="main-color font-bold">Дээд боловсрол</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Сургууль:</span>
              <span className="text-xs font-bold">МУИС - ХШУИС</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Элссэн он:</span>
              <span className="text-xs font-bold">2017</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Төгссөн он:</span>
              <span className="text-xs font-bold">2021</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Улс:</span>
              <span className="text-xs font-bold">Монгол</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Аймаг, хот:</span>
              <span className="text-xs font-bold">Улаанбаатар</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Дүн:</span>
              <span className="text-xs font-bold">3.4</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="main-color font-bold">
              Мэргэжлийн чиглэлээр хамрагдаж байсан сургалт
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">
                Нарийн мэргэжлийн нэр:
              </span>
              <span className="text-xs font-bold">
                Програм хангамжын хэл судалгаа
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Авсан он:</span>
              <span className="text-xs font-bold">2021</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">
                Хүчинтэй хугацаа дуусах он:
              </span>
              <span className="text-xs font-bold">Байхгүй</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">
                Байгууллага/Сургууль:
              </span>
              <span className="text-xs font-bold">НЭСТ Програмын сургалт</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">
                Гэрчилгээний дугаар:
              </span>
              <span className="text-xs font-bold">#17513215</span>
            </div>
          </div>
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
