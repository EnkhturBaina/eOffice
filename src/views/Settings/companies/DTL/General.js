import React from 'react';
import avatar from '../../../../assets/images/avatars/1.jpg';

function General() {
   return (
      <div>
         <div className="flex flex-row !mt-2">
            <div style={{ width: 140 }}>
               <img src={avatar} className="rounded-md" style={{ height: 140, width: 140 }} />
            </div>
            <div className="flex flex-col flex-1 !ml-3">
               <div className="flex flex-row">
                  <span className="main-color font-semibold">Ерөнхий мэдээлэл</span>
               </div>
               <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Компаний нэр</span>
                     <span className="text-xs">Tenplus</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Улсын бүртгэлийн дугаар</span>
                     <span className="text-xs">128581262</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Регистерийн дугаар</span>
                     <span className="text-xs">9258165</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500">Өмчлөлийн хэлбэр</span>
                     <span className="text-xs">ХХК</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-2">
            <span className="main-color font-semibold">Гүйцэтгэх удирдлага</span>
         </div>
         <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Овог нэр</span>
               <span className="text-xs">Цогт Наранмандаг</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Албан тушаал</span>
               <span className="text-xs">Гүйцэтгэх захирал</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Утас</span>
               <span className="text-xs">+976 9911 5643</span>
            </div>
         </div>
         <div className="mt-2">
            <span className="main-color font-semibold">Холбоо барих, хаяг</span>
         </div>
         <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Утас</span>
               <span className="text-xs">+976 9911 5643</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">И-Мэйл</span>
               <span className="text-xs">info@tenplus.com</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Вебсайт</span>
               <span className="text-xs">tenplus.mn</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Байршил</span>
               <span className="text-xs">ХУД, 18-р хороо</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Байшин</span>
               <span className="text-xs">Эл Эс Плаза</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Хаалганы дугаар</span>
               <span className="text-xs">203</span>
            </div>
         </div>
      </div>
   );
}

export default General;
