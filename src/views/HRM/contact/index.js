import React, { useState } from 'react';
import { AppHeader } from 'src/components';
import { cilPhone } from '@coreui/icons';
import { Table } from 'antd';
import avatar from '../../../assets/images/avatars/1.jpg';
import GridView from './GridView';
import Stats from './Stats';
import Toolbar from './Toolbar';

function index() {
   const [isGrid, setIsGrid] = useState(false);

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
         <Stats />
         <div className="!px-10 !my-2">
            <Toolbar isGrid={isGrid} setIsGrid={setIsGrid} />
            {isGrid ? (
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
