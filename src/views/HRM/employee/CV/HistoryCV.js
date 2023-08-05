import { Button, Divider, Input } from 'antd';
import React from 'react';

function HistoryCV() {
   const { TextArea } = Input;
   return (
      <div>
         <span className="main-color font-bold">А. Таны ирээдүйн 5 жилийн зорилго</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-1 gap-2 !mb-3">
            <TextArea rows={4} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={250} className="!mt-2" />
         </div>
         <span className="main-color font-bold">Б. Жолооны үнэмлэхтэй эсэх</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-5 gap-2 !mb-3">
            <div className="flex flex-col">
               <Input placeholder="" size="small" />
            </div>
         </div>
         <span className="main-color font-bold">В. Эрүүл мэндийн байдал</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-4 gap-2 !mb-3">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Биеийн өндөр  /см/</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Цусны бүлэг</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Өвчлөл, муу зуршил</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Эрүүл мэндийн байдал</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <span className="main-color font-bold">
            Г. Таныг ажил хэргийн хүрээнд сайн тодорхойлох 2 хүний мэдээлэл бичнэ үү
         </span>
         <Divider className="my-1" />
         <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Нэр *</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Эрхэлдэг ажил</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Албан тушаал</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Утас</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button>Мөр нэмэх</Button>
         </div>
      </div>
   );
}

export default HistoryCV;
