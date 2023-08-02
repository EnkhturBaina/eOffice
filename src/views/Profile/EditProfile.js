import React from 'react';
import { CButton, CForm, CFormInput, CFormTextarea } from '@coreui/react';

function EditProfile(props) {
   return (
      <div>
         <CForm>
            <p className="main-color font-bold">Хувийн мэдээлэл</p>
            <div className="border-t border-slate-300 !my-2"></div>
            <div className="flex justify-start">
               <div className="basis-1/4">
                  <span className="text-xs">Ургийн овог:</span>
                  <CFormInput type="text" id="" placeholder="Ургийн овог" size="sm" className="w-9/12 mt-1" />
               </div>
               <div className="basis-1/4">
                  <span className="text-xs">Эцэг /эх/-ийн нэр:</span>
                  <CFormInput type="text" id="" placeholder="Эцэг /эх/-ийн нэр" size="sm" className="w-9/12 mt-1" />
               </div>
            </div>
            <div className="flex justify-start mt-1">
               <div className="basis-1/4">
                  <p className="text-xs">Өөрийн нэр:</p>
                  <CFormInput type="text" id="" placeholder="Өөрийн нэр" size="sm" className="w-9/12 mt-1" />
               </div>
               <div className="basis-1/4">
                  <p className="text-xs">Регистерийн дугаар:</p>
                  <CFormInput type="text" id="" placeholder="Регистерийн дугаар" size="sm" className="w-9/12 mt-1" />
               </div>
            </div>
            <div className="flex justify-start mt-1">
               <div className="basis-1/4">
                  <p className="text-xs">Яс үндэс:</p>
                  <CFormInput type="text" id="" placeholder="Яс үндэс" size="sm" className="w-9/12 mt-1" />
               </div>
               <div className="basis-1/4">
                  <p className="text-xs">Иргэншил:</p>
                  <CFormInput type="text" id="" placeholder="Иргэншил" size="sm" className="w-9/12 mt-1" />
               </div>
            </div>
            <div className="flex justify-start mt-1">
               <div className="basis-1/4">
                  <p className="text-xs">Албан байгууллага:</p>
                  <CFormInput type="text" id="" placeholder="Албан байгууллага" size="sm" className="w-9/12 mt-1" />
               </div>
               <div className="basis-1/4">
                  <p className="text-xs">Албан тушаал:</p>
                  <CFormInput type="text" id="" placeholder="Албан тушаал" size="sm" className="w-9/12 mt-1" />
               </div>
            </div>
            <p className="main-color font-bold mt-3">Холбогдох мэдээлэл</p>
            <div className="border-t border-slate-300 !my-2"></div>
            <div className="flex justify-start">
               <div className="basis-1/4">
                  <p className="text-xs">Гар утас:</p>
                  <CFormInput type="text" id="" placeholder="Гар утас" size="sm" className="w-9/12 mt-1" />
               </div>
               <div className="basis-1/4">
                  <p className="text-xs">Гэрийн утас:</p>
                  <CFormInput type="text" id="" placeholder="Гэрийн утас" size="sm" className="w-9/12 mt-1" />
               </div>
            </div>
            <div className="flex justify-start">
               <div className="basis-1/4">
                  <p className="text-xs">Имэйл хаяг:</p>
                  <CFormInput type="text" id="" placeholder="Имэйл хаяг" size="sm" className="w-9/12 mt-1" />
               </div>
               <div className="basis-1/4">
                  <p className="text-xs">Facebook:</p>
                  <CFormInput type="text" id="" placeholder="Facebook" size="sm" className="w-9/12 mt-1" />
               </div>
            </div>
            <div className="flex justify-start">
               <div className="basis-1/4">
                  <p className="text-xs">Linked In:</p>
                  <CFormInput type="text" id="" placeholder="Linked In" size="sm" className="w-9/12 mt-1" />
               </div>
               <div className="basis-1/4">
                  <p className="text-xs">Оршин суудаг улс:</p>
                  <CFormInput type="text" id="" placeholder="Оршин суудаг улс" size="sm" className="w-9/12 mt-1" />
               </div>
            </div>
            <div className="flex justify-start">
               <div style={{ width: '44%' }}>
                  <p className="text-xs">Оршин суудаг хот:</p>
                  <CFormTextarea id="exampleFormControlTextarea1" rows={2} className="mt-1"></CFormTextarea>
               </div>
            </div>
            <CButton
               color="dark"
               variant="ghost"
               className={`!mt-5 profile-menu-button main-bg-color text-white`}
               onClick={() => props.setIsEdit(false)}
               size="sm"
            >
               Засах
            </CButton>
            <CButton
               color="dark"
               variant="outline"
               className={`!mt-5 !ml-5 text-black disable-button-hover`}
               onClick={() => props.setIsEdit(false)}
               size="sm"
            >
               Буцах
            </CButton>
         </CForm>
      </div>
   );
}

export default EditProfile;
