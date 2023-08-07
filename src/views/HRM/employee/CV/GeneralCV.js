import React from 'react';
import uploadAvatar from '../../../../assets/uploadAvatar.png';
import uploadBtn from '../../../../assets/uploadBtn.png';
import { Button, Divider, Input } from 'antd';

function GeneralCV() {
   return (
      <div>
         <span className="main-color font-semibold">A. Хувийн мэдээлэл</span>
         <Divider className="my-1" />
         <div className="flex flex-row !mt-2 !mb-2">
            <div style={{ width: 140 }} className="flex flex-col items-center">
               <img src={uploadAvatar} className="rounded-md" style={{ height: 130, width: 120 }} />
               <img
                  src={uploadBtn}
                  className="rounded-md cursor-pointer"
                  style={{ height: 30, width: 130, marginTop: 10 }}
               />
            </div>
            <div className="flex flex-col flex-1 !ml-3">
               <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Ургийн овог:</span>
                     <Input placeholder="" size="small" />
                     <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Эцэг /эх/-ийн нэр:</span>
                     <Input placeholder="" size="small" />
                     <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Өөрийн нэр:</span>
                     <Input placeholder="" size="small" />
                     <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Регистерийн дугаар:</span>
                     <Input placeholder="" size="small" />
                     <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Яс үндэс:</span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Иргэншил:</span>
                     <Input placeholder="" size="small" />
                  </div>
               </div>
            </div>
         </div>
         <span className="main-color font-semibold">Б.Холбоо барих</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-4 gap-x-4 gap-y-2 !mb-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Гар утас:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Гэрийн утас:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Имэйл хаяг:</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Facebook:</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <span className="main-color font-semibold">В. Яаралтай тохиолдолд холбоо барих хүн</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-4 gap-x-4 gap-y-2 !mb-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">
                  Таны юу болох<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
               <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">
                  Овог:<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
               <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">
                  Нэр:<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
               <span style={{ fontSize: 10 }}>Криллээр бичнэ үү</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">
                  Утасны дугаар:<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
         </div>
         <div className="flex justify-end !mt-2">
            <Button size="small">Мөр нэмэх</Button>
         </div>
         <span className="main-color font-semibold">Г.Хаяг</span>
         <Divider className="my-1" />
         <div className="grid grid-cols-6 gap-x-4 gap-y-2 !mb-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">
                  Аймаг, хот<span className="text-red-500"> *</span>
               </span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Сум, дүүрэг</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Баг, хороо</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Хороолол</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Байшин</span>
               <Input placeholder="" size="small" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Хаалганы дугаар</span>
               <Input placeholder="" size="small" />
            </div>
         </div>
      </div>
   );
}

export default GeneralCV;
