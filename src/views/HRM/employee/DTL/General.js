import React from 'react';
import avatar from '../../../../assets/images/avatars/1.jpg';

function General() {
   return (
      <div>
         <div className="flex flex-row !mt-2">
            <div style={{ width: 140 }}>
               <img src={avatar} className="rounded-md" style={{ height: 160, width: 140 }} />
            </div>
            <div className="flex flex-col flex-1 !ml-3">
               <div className="flex flex-row">
                  <span className="main-color font-bold">Хувийн мэдээлэл</span>
               </div>
               <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Ургийн овог:</span>
                     <span className="text-xs">Боржигон</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Эцэг /эх/-ийн нэр:</span>
                     <span className="text-xs">Түдэв</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Өөрийн нэр:</span>
                     <span className="text-xs">Уянга</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Регистерийн дугаар:</span>
                     <span className="text-xs">УХ00272176</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Яс үндэс:</span>
                     <span className="text-xs">Халх</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Иргэншил:</span>
                     <span className="text-xs">Монгол</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Ажллаж буй компани:</span>
                     <span className="text-xs">Tenplus ХХК</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Ажлын поситион:</span>
                     <span className="text-xs">UI/UX Designer</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-2">
            <span className="main-color font-bold">Холбоо барих</span>
         </div>
         <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Гар утас:</span>
               <span className="text-xs">+976 9511 0654</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Гэрийн утас:</span>
               <span className="text-xs">11 330 420</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">И-Мэйл хаяг:</span>
               <span className="text-xs">tuyanga@tenplus.com</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Facebook:</span>
               <span className="text-xs">Уянга Түдэвээ нь байнаа</span>
            </div>
         </div>
         <div className="mt-2">
            <span className="main-color font-bold">Яаралтай тохиолдолд холбоо барих хүн</span>
         </div>
         <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ажилчны юу болох:</span>
               <span className="text-xs">Эцэг</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Овог:</span>
               <span className="text-xs">Лхагва</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Нэр:</span>
               <span className="text-xs">Түдэв</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Утасны дугаар:</span>
               <span className="text-xs">+976 99119669</span>
            </div>
         </div>
         <div className="mt-2">
            <span className="main-color font-bold">Хаяг</span>
         </div>
         <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Аймаг, хот:</span>
               <span className="text-xs">Улаанбаатар</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Сум, дүүрэг:</span>
               <span className="text-xs">Хан-Уул</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Баг хороо:</span>
               <span className="text-xs">18-р хороо</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Хороолол:</span>
               <span className="text-xs">Цоглог хотхон</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Байшин:</span>
               <span className="text-xs">15-р байшин</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Хаалганы дугаар:</span>
               <span className="text-xs">11 тоот</span>
            </div>
         </div>
      </div>
   );
}

export default General;
