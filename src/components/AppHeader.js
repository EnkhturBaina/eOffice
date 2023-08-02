import { cilUser } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { DatePicker, Input, Select } from 'antd';
import React from 'react';
import dayjs from 'dayjs';

const AppHeader = () => {
   const { RangePicker } = DatePicker;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   const onSearch = (value) => console.log(value);
   return (
      <div className="flex flex-row !px-10 !py-5 justify-between">
         <div className="flex flex-row items-center">
            <CIcon icon={cilUser} className="main-color !mx-2" size="xl" />
            <span className="font-bold">Ажилчид</span>
         </div>
         <div className="flex flex-row">
            <RangePicker
               defaultValue={[dayjs(now, dateFormat), dayjs(now.add(-1, 'month'), dateFormat)]}
               format={dateFormat}
               className="!rounded"
            />
            <Search
               className="!mx-2 pexar-rounded"
               placeholder="Хайх"
               allowClear
               onSearch={onSearch}
               style={{
                  width: 200,
                  borderRadius: 4
               }}
            />
            <Select
               defaultValue="lucy"
               className="!rounded"
               style={{
                  width: 120
               }}
               onChange={handleChange}
               dropdownRender={(menu) => (
                  <div>
                     <div>ASDASD1</div>
                     <div>ASDASD2</div>
                     <div>ASDASD3</div>
                     <div>ASDASD4</div>
                     <div>ASDASD5</div>
                     <div>ASDASD6</div>
                  </div>
               )}
            />
         </div>
      </div>
   );
};

export default AppHeader;
