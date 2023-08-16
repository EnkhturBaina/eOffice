import { CButton } from '@coreui/react';
import React from 'react';

function Information(props) {
   return (
      <div>
         <p className="main-color font-bold">Хувийн мэдээлэл</p>
         <div className="border-t border-slate-300 !my-2"></div>
         <div className="flex justify-start">
            <div className="basis-1/4 grid">
               <span className="text-xs">Ургийн овог:</span>
               <span className="font-bold text-sm">Боржигон</span>
            </div>
            <div className="basis-1/4 grid">
               <span className="text-xs">Эцэг /эх/-ийн нэр:</span>
               <span className="font-bold text-sm">Түдэв</span>
            </div>
         </div>
         <div className="flex justify-start mt-2">
            <div className="basis-1/4 grid">
               <span className="text-xs">Өөрийн нэр:</span>
               <span className="font-bold text-sm">Зориглон</span>
            </div>
            <div className="basis-1/4 grid">
               <span className="text-xs">Регистрийн дугаар:</span>
               <span className="font-bold text-sm">УХ00272176</span>
            </div>
         </div>
         <div className="flex justify-start mt-2">
            <div className="basis-1/4 grid">
               <span className="text-xs">Яс үндэс:</span>
               <span className="font-bold text-sm">Халх</span>
            </div>
            <div className="basis-1/4 grid">
               <span className="text-xs">Иргэншил:</span>
               <span className="font-bold text-sm">Монгол</span>
            </div>
         </div>
         <div className="flex justify-start mt-2">
            <div className="basis-1/4 grid">
               <span className="text-xs">Албан байгууллага:</span>
               <span className="font-bold text-sm">Ян</span>
            </div>
            <div className="basis-1/4 grid">
               <span className="text-xs">Албан тушаал:</span>
               <span className="font-bold text-sm">Хүний нөөцийн мэргэжилтэн</span>
            </div>
         </div>
         <p className="main-color font-bold mt-3">Холбогдох мэдээлэл</p>
         <div className="border-t border-slate-300 !my-2"></div>
         <div className="flex justify-start mt-2">
            <div className="basis-1/4 grid">
               <span className="text-xs">Гар утас:</span>
               <span className="font-bold text-sm">99282233</span>
            </div>
            <div className="basis-1/4 grid">
               <span className="text-xs">Гэрийн утас:</span>
               <span className="font-bold text-sm">77838333</span>
            </div>
         </div>
         <div className="flex justify-start mt-2">
            <div className="basis-1/4 grid">
               <span className="text-xs">Имэйл хаяг:</span>
               <span className="font-bold text-sm">Zorigoo11@gmail.com</span>
            </div>
            <div className="basis-1/4 grid">
               <span className="text-xs">Facebook:</span>
               <span className="font-bold text-sm">Zoro Zoro</span>
            </div>
         </div>
         <div className="flex justify-start mt-2">
            <div className="basis-1/4 grid">
               <span className="text-xs">Linked In:</span>
               <span className="font-bold text-sm">Zoroo</span>
            </div>
            <div className="basis-1/4 grid">
               <span className="text-xs">Оршин суудаг улс:</span>
               <span className="font-bold text-sm">Улаанбаатар</span>
            </div>
         </div>
         <div className="flex justify-start mt-2">
            <div className="basis-1/4 grid">
               <span className="text-xs">Оршин суудаг хот:</span>
               <span className="font-bold text-sm">Улаанбаатар</span>
            </div>
         </div>
         <CButton
            color="dark"
            variant="ghost"
            className={`!mt-5 profile-menu-button main-bg-color text-white`}
            onClick={() => props.setIsEdit(true)}
            size="sm"
         >
            Засах
         </CButton>
      </div>
   );
}

export default Information;
