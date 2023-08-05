import React from 'react';
import avatar from '../../../assets/images/avatars/1.jpg';
import { Card } from 'antd';

function GridView() {
   return (
      <div>
         <div className="grid grid-cols-5 gap-2">
            <Card
               title={
                  <div className="flex flex-row items-center !p-3">
                     <img
                        src={avatar}
                        width={50}
                        height={50}
                        style={{ borderRadius: '50%' }}
                        className="border-2 main-border-color"
                     />
                     <div className="flex flex-col !ml-2">
                        <span>Түдэв Уянга</span>
                        <span className="text-gray-400 text-xs">UI/UX Designer</span>
                     </div>
                  </div>
               }
               style={{
                  width: 300
               }}
               className="contact-grid-card"
            >
               <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col !ml-2">
                     <span className="text-gray-400 text-xs">Ажилчны ID:</span>
                     <span>LA-0231</span>
                  </div>
                  <div className="flex flex-col !ml-2">
                     <span className="text-gray-400 text-xs">Албан тушаал:</span>
                     <span>UI/UX Desigenr</span>
                  </div>
                  <div className="flex flex-col !ml-2">
                     <span className="text-gray-400 text-xs">Цахим хаяг:</span>
                     <span>tuyanga@tenplus.mn</span>
                  </div>
                  <div className="flex flex-col !ml-2">
                     <span className="text-gray-400 text-xs">Утас:</span>
                     <span>+976 88282832</span>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   );
}

export default GridView;
