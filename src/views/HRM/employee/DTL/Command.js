import React from 'react';

function Command() {
   return (
      <div>
         <div className="mt-2">
            <span className="main-color font-bold">Ажилтны түүх</span>
         </div>
         <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ажилд орсон огноо:</span>
               <span className="text-xs">2001-10-4</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ажлаас гарсан огноо:</span>
               <span className="text-xs">2001-10-4</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Ажлаас гарсан шалтгаан:</span>
               <span className="text-xs">Биеийн байдал муу</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Албан байгууллага:</span>
               <span className="text-xs">Тайгам Алтай ХХК</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Алба хэлтэс:</span>
               <span className="text-xs">Хөгжүүлэлтийн хэлтэс</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Албан тушаал:</span>
               <span className="text-xs">Санхүүгийн шинжээч</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xs text-slate-500">Цалин:</span>
               <span className="text-xs">2000000</span>
            </div>
         </div>
      </div>
   );
}

export default Command;
