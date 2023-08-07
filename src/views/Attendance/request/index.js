import { cilUser } from '@coreui/icons';
import React from 'react';
import { AppHeader } from 'src/components';
import CreateReq from './CreateReq';
import { Table, Tag } from 'antd';
import avatar from '../../../assets/images/avatars/1.jpg';
import { CheckSquareOutlined, StopOutlined, EditOutlined } from '@ant-design/icons';

function index() {
   const dataSource = [
      {
         key: '1',
         name: 'Mike',
         regnum: 'АБ11223344',
         age: 32,
         address: '10 Downing Street',
         req_type: 'Чөлөөтэй',
         start_date: '2023-07-10',
         end_date: '2023-07-10',
         total_time: '56 цаг',
         description: 'Бие өвдөж байгаа учраас',
         status: 'Шинэ',
         action: null
      },
      {
         key: '2',
         name: 'John',
         age: 42,
         address: '10 Downing Street'
      }
   ];

   const columns = [
      {
         title: 'Ажилтны нэр',
         dataIndex: 'name',
         key: 'name',
         render: (_, record) => (
            <div className="flex flex-row items-center">
               <img src={avatar} width={30} height={30} style={{ borderRadius: '50%' }} />
               <div className="flex flex-col !ml-2">
                  <span>{record.name}</span>
                  <span className="text-gray-400 text-xs">{record.regnum}</span>
               </div>
            </div>
         )
      },
      {
         title: 'Хүсэлтийн төрөл',
         dataIndex: 'req_type',
         key: 'req_type',
         align: 'center',
         render: (_, record) => <Tag color="volcano">{record.req_type}</Tag>
      },
      {
         title: 'Эхлэх огноо',
         dataIndex: 'start_date',
         align: 'center',
         key: 'start_date'
      },
      {
         title: 'Дуусах огноо',
         dataIndex: 'end_date',
         align: 'center',
         key: 'end_date'
      },
      {
         title: 'Нийт цаг',
         dataIndex: 'total_time',
         align: 'center',
         key: 'total_time'
      },
      {
         title: 'Тайлбар',
         dataIndex: 'description',
         align: 'center',
         key: 'description'
      },
      {
         title: 'Төлөв',
         dataIndex: 'status',
         align: 'center',
         key: 'status',
         render: (_, record) => <Tag color="volcano">{record.status}</Tag>
      },
      {
         title: 'Үйлдэл',
         dataIndex: 'action',
         align: 'center',
         key: 'action',
         render: (_, record) => (
            <div className="flex flex-row justify-evenly">
               <CheckSquareOutlined
                  onClick={() => {}}
                  className="text-teal-500 cursor-pointer"
                  style={{ fontSize: 18 }}
               />
               <StopOutlined onClick={() => {}} className="text-rose-500 cursor-pointer" style={{ fontSize: 18 }} />
               <EditOutlined onClick={() => {}} className="text-gray-500 cursor-pointer" style={{ fontSize: 18 }} />
            </div>
         )
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
         <AppHeader title="Хүсэлтүүд" icon={cilUser} />
         <div className="!px-10 !my-2">
            <CreateReq />
            <Table
               dataSource={dataSource}
               columns={columns}
               size="small"
               bordered
               onRow={(record, rowIndex) => {
                  return {
                     onDoubleClick: (event) => {}
                  };
               }}
               rowSelection={{
                  type: 'checkbox',
                  ...rowSelection
               }}
               className="!mt-4"
            />
         </div>
      </div>
   );
}

export default index;
