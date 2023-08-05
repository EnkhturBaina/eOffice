import { Button, Divider, Input } from 'antd';
import React from 'react';

function WorkCV() {
   const { TextArea } = Input;
   return (
      <div>
         <span className="main-color font-bold">А. Нийгмийн даатгалаар баталгаажсан хөдөлмөр эрхлэлт</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-5 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Төрсөн он сар өдөр<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Гарсан огноо<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Байгууллагын нэр<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">
                  Албан тушаал<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Цалин</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Шилжсэн/Гарсан шалтгаан</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Удирдлага</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500 !mb-1">Утас</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
         <span className="main-color font-bold">
            Б. Хэрэв та удаан хугацаанд ажил хийгээгүй бол шалтгаанаа бичнэ үү
         </span>
         <Divider className="my-1" />
         <div className="grid grid-cols-1 gap-x-4 gap-y-2">
            <TextArea rows={7} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={250} className="!mt-2" />
         </div>
      </div>
   );
}

export default WorkCV;
