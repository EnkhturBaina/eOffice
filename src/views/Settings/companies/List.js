import React from 'react';
import { Table } from 'antd';
import { useState } from 'react';
import avatar from '../../../assets/images/avatars/1.jpg';
import { MenuUnfoldOutlined, LinkOutlined } from '@ant-design/icons';

function List(props) {
   const columns = [
      {
         title: <span className="text-gray-400">Компаний нэр</span>,
         dataIndex: 'name',
         key: 'name',
         render: (_, record) => (
            <div className="flex flex-row items-center">
               <img src={avatar} width={32} height={32} className="!mr-2" />
               <span>{record.name}</span>
            </div>
         )
      },
      {
         title: <span className="text-gray-400">Регистрийн дугаар</span>,
         dataIndex: 'reg_num',
         key: 'reg_num'
      },
      {
         title: <span className="text-gray-400">Гүйцэтгэх удирдлага</span>,
         dataIndex: 'ceo',
         key: 'ceo'
      },
      {
         title: <span className="text-gray-400">Хоблоо барих</span>,
         dataIndex: 'contact',
         key: 'contact'
      },
      {
         title: <span className="text-gray-400">Үйлдэл</span>,
         dataIndex: 'action',
         key: 'action',
         render: (_, record) => (
            <div className="flex flex-row items-center justify-around">
               <MenuUnfoldOutlined
                  onClick={() => {
                     props.setActionType('DTL');
                  }}
                  className="main-color cursor-pointer"
                  style={{ fontSize: 18 }}
               />
               <LinkOutlined
                  onClick={() => {
                     props.setActionType('Relation');
                  }}
                  className="main-color cursor-pointer"
                  style={{ fontSize: 18 }}
               />
            </div>
         )
      }
   ];
   const data = [
      {
         key: 1,
         name: 'Тайгам алтай ХХК',
         reg_num: '1723647',
         ceo: 'Цогт Наранмандах',
         contact: '+976 9911 7864',
         action: 'New',
         children: [
            {
               key: 11,
               name: 'John Brown',
               age: 42,
               address: 'New York No. 2 Lake Park'
            },
            {
               key: 12,
               name: 'John Brown jr.',
               age: 30,
               address: 'New York No. 3 Lake Park',
               children: [
                  {
                     key: 121,
                     name: 'Jimmy Brown',
                     age: 16,
                     address: 'New York No. 3 Lake Park'
                  }
               ]
            },
            {
               key: 13,
               name: 'Jim Green sr.',
               age: 72,
               address: 'London No. 1 Lake Park',
               children: [
                  {
                     key: 131,
                     name: 'Jim Green',
                     age: 42,
                     address: 'London No. 2 Lake Park',
                     children: [
                        {
                           key: 1311,
                           name: 'Jim Green jr.',
                           age: 25,
                           address: 'London No. 3 Lake Park'
                        },
                        {
                           key: 1312,
                           name: 'Jimmy Green sr.',
                           age: 18,
                           address: 'London No. 4 Lake Park'
                        }
                     ]
                  }
               ]
            }
         ]
      },
      {
         key: 2,
         name: 'Joe Black',
         age: 32,
         address: 'Sydney No. 1 Lake Park'
      }
   ];

   return (
      <div>
         <Table columns={columns} dataSource={data} size="small" bordered className="companies-list-table" />
      </div>
   );
}

export default List;
