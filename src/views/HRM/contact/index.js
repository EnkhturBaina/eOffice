import React, { useState } from 'react';
import { AppHeader } from 'src/components';
import { cilPhone } from '@coreui/icons';
import { Card, DatePicker, Progress, Table } from 'antd';
import {
   UserAddOutlined,
   FileOutlined,
   TagOutlined,
   AlignLeftOutlined,
   AppstoreOutlined,
   PrinterOutlined,
   DownloadOutlined,
   BarsOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';
import avatar from '../../../assets/images/avatars/1.jpg';
import GridView from './GridView';

function index() {
   const { RangePicker } = DatePicker;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const [isGird, setIsGrid] = useState(false);

   const columns = [
      {
         title: <span className="text-gray-400">Овог, нэр</span>,
         align: 'center',
         dataIndex: 'name',
         key: 'name',
         render: (_, record) => (
            <div className="flex flex-row items-center">
               <img src={avatar} width={30} height={30} style={{ borderRadius: '50%' }} />
               <span className="!ml-2 font-bold">{record.name}</span>
            </div>
         )
      },
      {
         title: <span className="text-gray-400">Ажилчны ID</span>,
         align: 'center',
         dataIndex: 'empoyee_id',
         key: 'empoyee_id'
      },
      {
         title: <span className="text-gray-400">Утас</span>,
         align: 'center',
         dataIndex: 'phone',
         key: 'phone'
      },
      {
         title: <span className="text-gray-400">Цахим хаяг</span>,
         align: 'center',
         dataIndex: 'email',
         key: 'email'
      },
      {
         title: <span className="text-gray-400">Албан тушаал</span>,
         align: 'center',
         dataIndex: 'emp_position',
         key: 'emp_position'
      },
      {
         title: <span className="text-gray-400">Албан хэлтэс</span>,
         align: 'center',
         dataIndex: 'emp_department',
         key: 'emp_department'
      }
   ];
   const data = [
      {
         key: '1',
         name: 'Түдэв Уянга',
         empoyee_id: 'LA-0231',
         phone: '+976 99105125',
         email: 'tuyanga@tenplus.com',
         emp_position: 'Маркетинг',
         emp_department: 'Хөгжүүлэлт'
      },
      {
         key: '2',
         col1: '2',
         col2: '02/05/2023',
         device: 'Android s13',
         ip: '101.234.12.110'
      }
   ];
   // rowSelection object indicates the need for row selection
   const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record) => ({
         disabled: record.name === 'Disabled User',
         // Column configuration not to be checked
         name: record.name
      })
   };
   return (
      <div>
         <AppHeader title="Холбоо барих" icon={cilPhone} />
         <div className="flex flex-row items-center !px-10 justify-between">
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <UserAddOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#8e88f8',
                     backgroundColor: '#dad7fe',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Нийт ажилчид</span>
                     <Progress percent={30} strokeColor="#8e88f8" trailColor="#dad7fe" showInfo={false} />
                  </div>
               </div>
            </Card>
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <FileOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#34b53a',
                     backgroundColor: '#e2fbd7',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Ажлаас гарсан</span>
                     <Progress percent={30} strokeColor="#34b53a" trailColor="#e2fbd7" showInfo={false} />
                  </div>
               </div>
            </Card>
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <TagOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#ffe5d3',
                     backgroundColor: '#ff3a29',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Гарах хүсэлт илгээсэн</span>
                     <Progress percent={30} strokeColor="#ff3a29" trailColor="#ffe5d3" showInfo={false} />
                  </div>
               </div>
            </Card>
            <Card
               style={{
                  width: 320
               }}
               className="employee-stat-card border-0"
            >
               <AlignLeftOutlined
                  style={{
                     fontSize: 24,
                     padding: 12,
                     color: '#fffae6',
                     backgroundColor: '#ffb200',
                     borderRadius: '50%'
                  }}
               />
               <div className="flex flex-col !ml-5 !w-full justify-between">
                  <span className="font-bold">120</span>
                  <div className="flex flex-col">
                     <span className="">Анкет илгээсэн</span>
                     <Progress percent={30} strokeColor="#ffb200" trailColor="#fffae6" showInfo={false} />
                  </div>
               </div>
            </Card>
         </div>
         <div className="!px-10 !my-2">
            <div className="flex justify-end !my-3 items-center">
               <RangePicker
                  defaultValue={[dayjs(now, dateFormat), dayjs(now.add(-1, 'month'), dateFormat)]}
                  format={dateFormat}
                  className="!rounded"
                  style={{ height: 35 }}
               />
               {isGird ? (
                  <BarsOutlined
                     className="main-color !ml-3 cursor-pointer"
                     style={{ fontSize: 20 }}
                     onClick={() => setIsGrid(false)}
                  />
               ) : (
                  <AppstoreOutlined
                     className="main-color !ml-3 cursor-pointer"
                     style={{ fontSize: 20 }}
                     onClick={() => setIsGrid(true)}
                  />
               )}
               <PrinterOutlined className="main-color !ml-3 cursor-pointer" style={{ fontSize: 20 }} />
               <DownloadOutlined className="main-color !ml-3 cursor-pointer" style={{ fontSize: 20 }} />
            </div>
            {isGird ? (
               <GridView />
            ) : (
               <div className="flex flex-row !gap-4">
                  <Table
                     columns={columns}
                     dataSource={data}
                     className="basis-full"
                     bordered
                     size="small"
                     onRow={(record, rowIndex) => {
                        return {
                           onDoubleClick: (event) => {}
                        };
                     }}
                     rowSelection={{
                        type: 'checkbox',
                        ...rowSelection
                     }}
                  />
               </div>
            )}
         </div>
      </div>
   );
}

export default index;
