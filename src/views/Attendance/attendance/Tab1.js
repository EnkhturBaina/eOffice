import React from 'react';
import Toolbar from './Toolbar';
import { Table } from 'antd';
import avatar from '../../../assets/images/avatars/1.jpg';

function Tab1() {
   const dataSource = [
      {
         key: '1',
         name: 'Mike',
         age: 32,
         address: '10 Downing Street',
         regnum: 'АБ11223344'
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
         title: <span className="text-gray-400">Овог, нэр</span>,
         align: 'center',
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
         title: <span className="text-gray-400">Компанийн нэр,рд</span>,
         align: 'center',
         dataIndex: 'company_reg',
         key: 'company_reg'
      },
      {
         title: <span className="text-gray-400">Хэлтэс, албан тушаал</span>,
         align: 'center',
         dataIndex: 'emp_department',
         key: 'emp_department'
      },
      {
         title: <span className="text-gray-400">Өдөр</span>,
         dataIndex: 'name',
         key: 'name'
      },
      {
         title: <span className="text-gray-400">Хуваарь</span>,
         dataIndex: 'age',
         key: 'age'
      },
      {
         title: <span className="text-gray-400">Төлөв</span>,
         dataIndex: 'address',
         key: 'address'
      },
      {
         title: <span className="text-gray-400">Ирэх/Ирсэн</span>,
         dataIndex: 'address',
         key: 'address'
      },
      {
         title: <span className="text-gray-400">Явах/Явсан</span>,
         dataIndex: 'address',
         key: 'address'
      },
      {
         title: <span className="text-gray-400">Ажилласан цаг</span>,
         dataIndex: 'address',
         key: 'address'
      },
      {
         title: <span className="text-gray-400">Идэвхийн цаг</span>,
         dataIndex: 'address',
         key: 'address'
      },
      {
         title: <span className="text-gray-400">Илүү цаг</span>,
         dataIndex: 'address',
         key: 'address'
      },
      {
         title: <span className="text-gray-400">Х/цаг</span>,
         dataIndex: 'address',
         key: 'address'
      }
   ];
   return (
      <div>
         <Toolbar />
         <Table dataSource={dataSource} columns={columns} size="small" bordered />
      </div>
   );
}

export default Tab1;
