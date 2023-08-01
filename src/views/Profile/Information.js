import { CButton } from '@coreui/react';
import React from 'react';

function Information() {
   return (
      <div>
         <p className="main-color font-bold">Хувийн мэдээлэл</p>
         <div className="border-t border-slate-300 !my-2"></div>
         <div class="flex justify-start">
            <div className="basis-1/4">
               <p className="text-xs">Ургийн овог:</p>
               <p className="font-bold text-sm">Боржигон</p>
            </div>
            <div className="basis-1/4">
               <p className="text-xs">Эцэг /эх/-ийн нэр:</p>
               <p className="font-bold text-sm">Түдэв</p>
            </div>
         </div>
         <div class="flex justify-start mt-1">
            <div className="basis-1/4">
               <p className="text-xs">Өөрийн нэр:</p>
               <p className="font-bold text-sm">Зориглон</p>
            </div>
            <div className="basis-1/4">
               <p className="text-xs">Регистерийн дугаар:</p>
               <p className="font-bold text-sm">УХ00272176</p>
            </div>
         </div>
         <div class="flex justify-start mt-1">
            <div className="basis-1/4">
               <p className="text-xs">Яс үндэс:</p>
               <p className="font-bold text-sm">Халх</p>
            </div>
            <div className="basis-1/4">
               <p className="text-xs">Иргэншил:</p>
               <p className="font-bold text-sm">Монгол</p>
            </div>
         </div>
         <div class="flex justify-start mt-1">
            <div className="basis-1/4">
               <p className="text-xs">Албан байгууллага:</p>
               <p className="font-bold text-sm">Ян</p>
            </div>
            <div className="basis-1/4">
               <p className="text-xs">Албан тушаал:</p>
               <p className="font-bold text-sm">Хүний нөөцийн мэргэжилтэн</p>
            </div>
         </div>
         <p className="main-color font-bold mt-3">Холбогдох мэдээлэл</p>
         <div className="border-t border-slate-300 !my-2"></div>
         <div class="flex justify-start">
            <div className="basis-1/4">
               <p className="text-xs">Гар утас:</p>
               <p className="font-bold text-sm">99282233</p>
            </div>
            <div className="basis-1/4">
               <p className="text-xs">Гэрийн утас:</p>
               <p className="font-bold text-sm">77838333</p>
            </div>
         </div>
         <div class="flex justify-start">
            <div className="basis-1/4">
               <p className="text-xs">Имэйл хаяг:</p>
               <p className="font-bold text-sm">Zorigoo11@gmail.com</p>
            </div>
            <div className="basis-1/4">
               <p className="text-xs">Facebook:</p>
               <p className="font-bold text-sm">Zoro Zoro</p>
            </div>
         </div>
         <div class="flex justify-start">
            <div className="basis-1/4">
               <p className="text-xs">Linked In:</p>
               <p className="font-bold text-sm">Zoroo</p>
            </div>
            <div className="basis-1/4">
               <p className="text-xs">Оршин суудаг улс:</p>
               <p className="font-bold text-sm">Улаанбаатар</p>
            </div>
         </div>
         <div class="flex justify-start">
            <div className="basis-1/4">
               <p className="text-xs">Оршин суудаг хот:</p>
               <p className="font-bold text-sm">Улаанбаатар</p>
            </div>
         </div>
         <CButton
            color="dark"
            variant="ghost"
            className={`!mt-5 text-left profile-menu-button main-bg-color text-white`}
         >
            Засах
         </CButton>
      </div>
   );
}

export default Information;
