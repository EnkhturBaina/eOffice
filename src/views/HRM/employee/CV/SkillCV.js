import { Button, Divider, Input } from 'antd';
import React from 'react';

function SkillCV() {
   return (
      <div>
         <span className="main-color font-bold">А.Гадаад хэлний мэдлэг</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-5 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Гадаад хэл<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Ерөнхий түвшин<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Бичих чадвар<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Сонсох чадвар<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Ярих чадвар<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
         <span className="main-color font-bold">Б.Авъяас чадвар</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Төрөл</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Хиээллэсэн жил</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Зэрэг, цол</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
         <span className="main-color font-bold">В. Шагналын мэдээлэл</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-4 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Он</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Талбар</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Шагналын нэр</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Тайлбар</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
      </div>
   );
}

export default SkillCV;
