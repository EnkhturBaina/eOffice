import React from 'react';
import { DatePicker } from 'antd';
import { AppstoreOutlined, PrinterOutlined, DownloadOutlined, BarsOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

function Toolbar(props) {
   const { RangePicker } = DatePicker;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();
   return (
      <div>
         <div className="flex justify-end !my-3 items-center">
            <RangePicker
               defaultValue={[dayjs(now, dateFormat), dayjs(now.add(-1, 'month'), dateFormat)]}
               format={dateFormat}
               className="!rounded"
               style={{ height: 35 }}
            />
            {props.isGrid ? (
               <BarsOutlined
                  className="main-color !ml-3 cursor-pointer"
                  style={{ fontSize: 20 }}
                  onClick={() => props.setIsGrid(false)}
               />
            ) : (
               <AppstoreOutlined
                  className="main-color !ml-3 cursor-pointer"
                  style={{ fontSize: 20 }}
                  onClick={() => props.setIsGrid(true)}
               />
            )}
            <PrinterOutlined className="main-color !ml-3 cursor-pointer" style={{ fontSize: 20 }} />
            <DownloadOutlined className="main-color !ml-3 cursor-pointer" style={{ fontSize: 20 }} />
         </div>
      </div>
   );
}

export default Toolbar;
