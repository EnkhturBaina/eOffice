import { Table } from 'antd';
import React from 'react';

function Shareholder() {
   const dataSource = [
      {
         key: '1',
         name: 'Mike',
         percent: '49%'
      },
      {
         key: '2',
         name: 'John',
         percent: '49%'
      }
   ];

   const columns = [
      {
         title: 'Овог, нэр',
         dataIndex: 'name',
         key: 'name'
      },
      {
         title: 'Хувьцааны хэмжээ',
         dataIndex: 'percent',
         key: 'percent'
      }
   ];
   return (
      <div>
         <div className="flex flex-row !my-4">
            <span className="main-color font-semibold">Хувьцаа эзэмшигчид</span>
         </div>
         <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
   );
}

export default Shareholder;
