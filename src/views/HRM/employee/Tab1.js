import React from 'react';
import { Button, Select, DatePicker, Input, Table } from 'antd';
import { PlusCircleOutlined, DownloadOutlined, PrinterOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

function Tab1() {
   const { RangePicker } = DatePicker;
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
      },
      {
         value: 'disabled',
         label: 'Disabled',
         disabled: true
      }
   ];
   const handleChange = (value) => {
      console.log(`selected ${value}`);
   };
   const onSearch = (value) => console.log(value);
   const { Search } = Input;

   const columns = [
      {
         title: '№',
         align: 'center',
         dataIndex: 'col1',
         key: 'col1'
      },
      {
         title: 'Огноо',
         align: 'center',
         dataIndex: 'col2',
         key: 'col2'
      },
      {
         title: 'Хандсан төхөөрөмж',
         align: 'center',
         dataIndex: 'device',
         key: 'device'
      },
      {
         title: 'IP хаяг',
         align: 'center',
         dataIndex: 'ip',
         key: 'ip'
      },
      {
         title: 'Үйлдэл',
         align: 'center',
         key: 'action',
         render: (_, record) => <div>asxasx</div>
      }
   ];
   const data = [
      {
         key: '1',
         col1: '1',
         col2: '01/05/2023',
         device: 'Android s13',
         ip: '101.234.12.110'
      },
      {
         key: '2',
         col1: '2',
         col2: '02/05/2023',
         device: 'Android s13',
         ip: '101.234.12.110'
      }
   ];

   return (
      <div>
         <div className="flex justify-end">
            <Button type="primary" className="flex items-center" size="middle">
               <span className="text-sm">Ажилтан бүртгэх</span>
               <PlusCircleOutlined />
            </Button>
         </div>
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
         <Table columns={columns} dataSource={data} pagination={false} className="login-history-table" bordered />
      </div>
   );
}

export default Tab1;
