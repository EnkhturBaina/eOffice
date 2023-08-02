import { Table } from 'antd';
import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

function LoginHistory() {
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
         render: (_, record) => (
            <DeleteOutlined
               className="text-lg main-color"
               onClick={() => {
                  console.log('REC', record);
               }}
            />
         )
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
         <p className="main-color font-bold">Хандалтын түүх</p>
         <div className="flex justify-start mt-1 flex-col">
            <div className="basis-1/4">
               <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="login-history-table"
                  style={{ backgroundColor: 'transparent' }}
               />
            </div>
         </div>
      </div>
   );
}

export default LoginHistory;
