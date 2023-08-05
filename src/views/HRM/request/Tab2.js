import React, { useState } from 'react';
import { Button, Select, DatePicker, Input, Table, Modal, Tag } from 'antd';
import { PlusCircleOutlined, DownloadOutlined, PrinterOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import avatar from '../../../assets/images/avatars/1.jpg';

function Tab2() {
   const { RangePicker } = DatePicker;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
      setIsModalOpen(true);
   };
   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };
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

   const columns = [
      {
         title: <span className="text-gray-400">Овог, нэр</span>,
         align: 'center',
         dataIndex: 'name',
         key: 'name',
         render: (_, record) => (
            <div className="flex flex-row items-center">
               <img src={avatar} width={30} height={30} style={{ borderRadius: '50%' }} />
               <span>{record.name}</span>
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
         title: <span className="text-gray-400">Ажилладаг компани</span>,
         align: 'center',
         dataIndex: 'company',
         key: 'company'
      },
      {
         title: <span className="text-gray-400">Чөлөөний төрөл</span>,
         align: 'center',
         dataIndex: 'req_type',
         key: 'req_type'
      },
      {
         title: <span className="text-gray-400">Хугацаа</span>,
         align: 'center',
         dataIndex: 'duration',
         key: 'duration'
      },
      {
         title: <span className="text-gray-400">Төлөв</span>,
         align: 'center',
         key: 'status',
         render: (_, record) => (
            <div>
               <Tag color="success" className="cursor-pointer">
                  Чөлөө олгосон
               </Tag>
            </div>
         )
      }
   ];
   const data = [
      {
         key: '1',
         name: 'Түдэв Уянга',
         empoyee_id: 'LA-0231',
         company: 'TenPlus ХХК',
         req_type: 'Жирэмсэний чөлөө',
         duration: '2023.07.09 - 2024.07.09'
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
         <div className="flex justify-end">
            <Button type="primary" className="flex items-center" size="middle" onClick={showModal}>
               <span className="text-sm">Хүсэлт нэмэх</span>
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
         <Modal
            title={<span className="main-color">Шилжүүлэх</span>}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText="Хаах"
            okText="Илгээх"
         >
            <div></div>
         </Modal>
      </div>
   );
}

export default Tab2;
