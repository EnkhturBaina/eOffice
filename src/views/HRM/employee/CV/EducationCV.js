import { Button, Divider, Input } from 'antd';
import React from 'react';

function EducationCV() {
   return (
      <div>
         <span className="main-color font-bold">А.Ерөнхий боловсрол</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-6 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Элссэн он<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Төгссөн он<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Улс</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Аймаг, хот</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Сургууль</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Дүн</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
         <span className="main-color font-bold">Б.Дээд боловсрол</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-6 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Элссэн он<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Төгссөн он<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Улс</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Сургууль</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Мэргэжил</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Дүн</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
         <span className="main-color font-bold">В. Мэргэжлийн чиглэлээр хамрагдаж байсан сургалт</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-5 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Нарийн мэргэжлийн нэр</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Авсан он</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Хүчинтэй хугацаа дуусах он</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Байгууллага/сургууль</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Гэрчилгээний №</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
      </div>
   );
}

export default EducationCV;
