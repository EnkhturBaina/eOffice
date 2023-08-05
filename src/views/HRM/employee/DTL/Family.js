import React from 'react';

function Family() {
   return (
      <div>
         <div className="mt-2">
            <span className="main-color font-bold">Гэр бүлийн байдал</span>
         </div>
         <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Гэрлэлтийн байдал:</span>
               <span className="text-xs">Гэрлэсэн</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ам бүлийн тоо:</span>
               <span className="text-xs">2</span>
            </div>
         </div>
         <div className="mt-2">
            <span className="main-color font-bold">Гэр бүлийн гишүүдийн мэдээлэл</span>
         </div>
         <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ажилтны юу болох:</span>
               <span className="text-xs">Нөхөр</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Эцэг /эх/-ийн нэр:</span>
               <span className="text-xs">Лхагва</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Нэр:</span>
               <span className="text-xs">Гантулга</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Төрсөн он:</span>
               <span className="text-xs">1999</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Төрсөн сум, дүүрэг:</span>
               <span className="text-xs">Нөхөр</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Төрсөн сум, дүүрэг:</span>
               <span className="text-xs">Лхагва</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Албан тушаал:</span>
               <span className="text-xs">Гантулга</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Утас:</span>
               <span className="text-xs">Утас</span>
            </div>
         </div>
         <div className="mt-2">
            <span className="main-color font-bold">
               Таныг ажил хэргийн хүрээнд сайн тодорхойлох 2 хүний мэдээлэл бичнэ үү
            </span>
         </div>
         <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Төрөл:</span>
               <span className="text-xs">Сагсан бөмбөг</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Хичээллэсэн жил:</span>
               <span className="text-xs">10+</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Зэрэг,цол:</span>
               <span className="text-xs">Мастер</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Зэрэг,цол:</span>
               <span className="text-xs">Мастер</span>
            </div>
         </div>
      </div>
   );
}

export default Family;
