import { Button, Divider, Input } from 'antd';
import React from 'react';

function FamilyCV() {
   return (
      <div>
         <span className="main-color font-semibold">А. Гэр бүлийн байдал</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Гэрлэлтийн байдал:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ам бүлийн тоо:</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button size="small">Мөр нэмэх</Button>
         </div>
         <span className="main-color font-semibold">А. Гэр бүлийн гишүүдийн мэдээлэл</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ажилтны юу болох:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Эцэг /эх/-ийн нэр:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Нэр:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Төрсөн он:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Төрсөн сум, дүүрэг:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ажлын газар:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Албан тушаал:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Утас:</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button size="small">Мөр нэмэх</Button>
         </div>
      </div>
   );
}

export default FamilyCV;
