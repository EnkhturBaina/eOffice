import React from 'react';
import { Select, DatePicker, Input } from 'antd';
import { DownloadOutlined, PrinterOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

function Toolbar() {
   const { RangePicker } = DatePicker;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const employee_list = [
      {
         value: 'jack',
         label: 'Jack'
      },
      {
         value: 'lucy',
         label: 'Lucy'
      },
      {
         value: 'Yiminghe',
         label: 'yiminghe'
      }
   ];
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   const onSearch = (value) => console.log(value);

   return (
      <div>
         <div className="flex justify-end !my-3 items-center">
            <Search
               className="pexar-rounded"
               placeholder="Хайх"
               allowClear
               onSearch={onSearch}
               style={{
                  height: 35,
                  width: 200,
                  borderRadius: 4
               }}
            />
            <Select
               defaultValue="lucy"
               style={{
                  width: 120
               }}
               onChange={handleChange}
               options={employee_list}
               className="custom-tab-select !mx-2"
            />
            <RangePicker
               defaultValue={[dayjs(now, dateFormat), dayjs(now.add(-1, 'month'), dateFormat)]}
               format={dateFormat}
               className="!rounded"
               style={{ height: 35 }}
            />
            <PrinterOutlined className="main-color !ml-3 cursor-pointer" style={{ fontSize: 20 }} />
            <DownloadOutlined className="main-color !ml-3 cursor-pointer" style={{ fontSize: 20 }} />
         </div>
      </div>
   );
}

export default Toolbar;
