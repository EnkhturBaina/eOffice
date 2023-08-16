import CIcon from '@coreui/icons-react';
import { DatePicker, Input } from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import CustomSelect from './CustomSelect';

const AppHeader = (props) => {
   const { RangePicker } = DatePicker;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const onSearch = (value) => console.log(value);

   return (
      <div className="flex flex-row !px-10 !py-5 justify-between">
         <div className="flex flex-row items-center">
            <CIcon icon={props.icon} className="main-color !mx-2" size="xl" />
            <span className="font-bold">{props.title}</span>
         </div>
         <div className="flex flex-row">
            {/* <RangePicker
               defaultValue={[dayjs(now, dateFormat), dayjs(now.add(-1, 'month'), dateFormat)]}
               format={dateFormat}
               className="!rounded"
               style={{ height: 35 }}
            /> */}
            <Search
               className="!mx-2 pexar-rounded"
               placeholder="Хайх"
               allowClear
               onSearch={onSearch}
               style={{
                  height: 35,
                  width: 300,
                  borderRadius: 4
               }}
            />
            <CustomSelect
               style={{
                  height: 35,
                  width: 250
               }}
            />
         </div>
      </div>
   );
};

export default AppHeader;
