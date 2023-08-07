import { Table } from 'antd';
import React from 'react';

function Board() {
   const dataSource = [
      {
         key: '1',
         name: 'Mike',
         position: 'Гүйцэтгэх захирал',
         phone: '+976 9911 7864'
      },
      {
         key: '2',
         name: 'John',
         position: 'Гүйцэтгэх захирал',
         phone: '+976 9911 7864'
      }
   ];

   const columns = [
      {
         title: 'Нэр',
         dataIndex: 'name',
         key: 'name'
      },
      {
         title: 'Албан тушаал',
         dataIndex: 'position',
         key: 'position'
      },
      {
         title: 'Утас',
         dataIndex: 'phone',
         key: 'phone'
      }
   ];
   return (
      <div>
         <div className="flex flex-row !my-4">
            <span className="main-color font-semibold">Ерөнхий мэдээлэл</span>
         </div>
         <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
   );
}

export default Board;
