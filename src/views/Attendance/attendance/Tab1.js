import React from 'react';
import Toolbar from './Toolbar';
import { Badge, Table, Tag } from 'antd';
import avatar from '../../../assets/images/avatars/1.jpg';
import { MoreOutlined } from '@ant-design/icons';

function Tab1() {
   const dataSource = [
      {
         key: '1',
         name: 'Mike',
         company_name: 'Downing Street',
         company_reg: 32,
         emp_department: '10 Downing Street',
         regnum: 'АБ11223344',
         att_day: 'att_day',
         schedule: 'Чөлөөт',
         status: 'Томилолт',
         in_time: '09:00/09:05',
         out_time: '18:00/18:00',
         work_time: '9',
         active_time: '0',
         more_time: '0',
         x_time: '5 мин'
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
         align: 'center',
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
         key: 'company_reg',
         align: 'center',
         render: (_, record) => (
            <div className="flex flex-col !ml-2">
               <span>{record.company_name}</span>
               <span className="text-gray-400 text-xs">{record.company_reg}</span>
            </div>
         )
      },
      {
         title: <span className="text-gray-400">Хэлтэс, албан тушаал</span>,
         align: 'center',
         dataIndex: 'emp_department',
         key: 'emp_department',
         align: 'center'
      },
      {
         title: <span className="text-gray-400">Өдөр</span>,
         dataIndex: 'att_day',
         key: 'att_day',
         align: 'center'
      },
      {
         title: <span className="text-gray-400">Хуваарь</span>,
         dataIndex: 'schedule',
         key: 'schedule',
         align: 'center',
         render: (_, record) => (
            <Badge status="success" text={<span className="text-green-500">{record.schedule}</span>} />
         )
      },
      {
         title: <span className="text-gray-400">Төлөв</span>,
         dataIndex: 'status',
         key: 'status',
         align: 'center',
         render: (_, record) => <Tag color="volcano">{record.status}</Tag>
      },
      {
         title: <span className="text-gray-400">Ирэх/Ирсэн</span>,
         dataIndex: 'in_time',
         key: 'in_time',
         align: 'center'
      },
      {
         title: <span className="text-gray-400">Явах/Явсан</span>,
         dataIndex: 'out_time',
         key: 'out_time',
         align: 'center'
      },
      {
         title: <span className="text-gray-400">Ажилласан цаг</span>,
         dataIndex: 'work_time',
         key: 'work_time',
         align: 'center'
      },
      {
         title: <span className="text-gray-400">Идэвхийн цаг</span>,
         dataIndex: 'active_time',
         key: 'active_time',
         align: 'center'
      },
      {
         title: <span className="text-gray-400">Илүү цаг</span>,
         dataIndex: 'more_time',
         key: 'more_time',
         align: 'center'
      },
      {
         title: <span className="text-gray-400">Х/цаг</span>,
         dataIndex: 'x_time',
         key: 'x_time',
         align: 'center'
      },
      {
         title: <MoreOutlined />,
         dataIndex: 'x_time',
         key: 'x_time',
         align: 'center',
         render: (_, record) => <MoreOutlined className="cursor-pointer" />
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
