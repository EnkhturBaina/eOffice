import React, { useState } from 'react';
import { Button, Select, DatePicker, Input, Table, Modal, Tag, Divider } from 'antd';
import { PlusCircleOutlined, DownloadOutlined, PrinterOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import avatar from '../../../assets/images/avatars/1.jpg';

function Tab1() {
   const { RangePicker } = DatePicker;
   const { Search } = Input;
   const { TextArea } = Input;
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
                  Зөвшөөрөх
               </Tag>
               <Tag color="error" className="cursor-pointer">
                  Татгалзах
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
            title={<span className="main-color">Чөлөө авах хүсэлт илгээх.</span>}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText="Хаах"
            okText="Илгээх"
            width={1000}
         >
            <div>
               <span className="main-color">Ажилчны мэдээлэл.</span>
               <Divider className="my-1" />
               <div className="grid grid-cols-5 gap-x-4 gap-y-2">
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Компани сонгох<span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Овог, нэр<span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Регистерийн дугаар<span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Албан хэлтэс<span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        И-Мэйл<span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
               </div>
               <span className="main-color">Чөлөөний талаарх мэдээлэл.</span>
               <Divider className="my-1" />
               <div className="grid grid-cols-4 gap-x-4 gap-y-2">
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Чөлөө авч буй шалтгаан
                        <span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Чөлөөний төрөл
                        <span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Цалинтай чөлөө эсэх
                        <span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-slate-500 !mb-1">
                        Чөлөө авах өдөр<span className="text-red-500"> *</span>
                     </span>
                     <Input placeholder="" size="small" />
                  </div>
               </div>
               <div className="grid grid-cols-1 gap-x-4 gap-y-2">
                  <span className="text-slate-500">Нэмэлт мэдээлэл.</span>
                  <TextArea rows={4} showCount maxLength={250} />
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default Tab1;
