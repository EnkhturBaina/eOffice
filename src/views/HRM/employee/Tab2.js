import React, { useState } from 'react';
import { Button, Select, DatePicker, Input, Table, Popover, Modal, Progress, Tooltip } from 'antd';
import { PlusCircleOutlined, DownloadOutlined, PrinterOutlined, MoreOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import DTL from './DTL';

function Tab2() {
   const { RangePicker } = DatePicker;
   const { TextArea } = Input;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenReason, setIsModalOpenReason] = useState(false);
   const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);

   const [selectedUserData, setSelectedUserData] = useState(null);

   const [openPopopver, setOpenPopopver] = useState({ show: false, popopverId: 0 });

   const handleOpenPop = (id) => {
      setOpenPopopver({ show: true, popopverId: id });
   };

   const showModalCreate = () => {
      setIsModalOpenCreate(true);
   };
   const handleOkCreate = () => {
      setIsModalOpenCreate(false);
   };
   const handleCancelCreate = () => {
      setIsModalOpenCreate(false);
   };
   const handleClosePop = () => {
      setOpenPopopver({ show: false });
   };
   const showModal = () => {
      setIsModalOpen(true);
   };
   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };
   const showModalReason = () => {
      setIsModalOpenReason(true);
   };
   const handleOkReason = () => {
      setIsModalOpenReason(false);
   };
   const handleCancelReason = () => {
      setIsModalOpenReason(false);
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
         title: <span className="text-gray-400">№</span>,
         align: 'center',
         dataIndex: 'col1',
         key: 'col1'
      },
      {
         title: <span className="text-gray-400">Овог, нэр</span>,
         align: 'center',
         dataIndex: 'name',
         key: 'name'
      },
      {
         title: <span className="text-gray-400">Ажилчны ID</span>,
         align: 'center',
         dataIndex: 'empoyee_id',
         key: 'empoyee_id'
      },
      {
         title: <span className="text-gray-400">Компанийн нэр,рд</span>,
         align: 'center',
         dataIndex: 'company_reg',
         key: 'company_reg'
      },
      {
         title: <span className="text-gray-400">Хэлтэс нэгж</span>,
         align: 'center',
         dataIndex: 'emp_department',
         key: 'emp_department'
      },
      {
         title: <span className="text-gray-400">Албан тушаал</span>,
         align: 'center',
         dataIndex: 'emp_position',
         key: 'emp_position'
      },
      {
         title: <span className="text-gray-400">Ажилд орсон огноо</span>,
         align: 'center',
         dataIndex: 'join_date',
         key: 'join_date'
      },
      {
         title: <span className="text-gray-400">Цалин</span>,
         align: 'center',
         dataIndex: 'emp_salary',
         key: 'emp_salary'
      },
      {
         title: <span className="text-gray-400">Мэдээлэл</span>,
         align: 'center',
         key: 'action',
         render: (_, record) => (
            <Popover
               placement="left"
               content={content}
               trigger="click"
               open={openPopopver.show && openPopopver.popopverId == record.key}
               onOpenChange={() => {
                  handleOpenPop(record.key);
               }}
            >
               <MoreOutlined />
            </Popover>
         )
      }
   ];
   const data = [
      {
         key: '1',
         col1: '1',
         name: 'Түдэв Уянга',
         empoyee_id: 'LA-0231',
         company_reg: 'TenPlus ХХК',
         emp_department: 'Хөгжүүлэлт',
         emp_position: 'Маркетинг',
         join_date: '30 Apr, 2020',
         emp_salary: '120000000',
         emp_status: 'Идэвхтэй'
      },
      {
         key: '2',
         col1: '2',
         col2: '02/05/2023',
         device: 'Android s13',
         ip: '101.234.12.110'
      }
   ];

   const content = (
      <div className="flex flex-col !w-36" onMouseLeave={() => handleClosePop()}>
         <Button
            type="text"
            className="text-left"
            onClick={() => {
               showModal();
               handleClosePop();
            }}
         >
            Ажилд авах
         </Button>
         <Button
            type="text"
            className="text-left"
            onClick={() => {
               showModalReason();
               handleClosePop();
            }}
         >
            Шалтгаан
         </Button>
      </div>
   );

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
            <Button type="primary" className="flex items-center" size="middle" onClick={showModalCreate}>
               <span className="text-sm">Ажилтан бүртгэх</span>
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
               className={selectedUserData ? 'basis-3/5' : 'basis-full'}
               bordered
               size="small"
               onRow={(record, rowIndex) => {
                  return {
                     onDoubleClick: (event) => {
                        setSelectedUserData(record);
                     }
                  };
               }}
               rowSelection={{
                  type: 'checkbox',
                  ...rowSelection
               }}
            />
            {selectedUserData ? (
               <div className="basis-2/5">
                  <DTL selectedUserData={selectedUserData} setSelectedUserData={setSelectedUserData} />
               </div>
            ) : null}
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
         <Modal
            title={<span className="main-color">Ажлаас чөлөөлөх болох шалтгаан</span>}
            open={isModalOpenReason}
            onOk={handleOkReason}
            onCancel={handleCancelReason}
            cancelText="Хаах"
            okText="Болсон"
            className="modal-with-count"
         >
            <div></div>
         </Modal>
         <Modal
            title={<span className="main-color">Ерөнхий мэдээлэл</span>}
            open={isModalOpenCreate}
            onOk={handleOkCreate}
            onCancel={handleCancelCreate}
            cancelText="Хаах"
            okText="Болсон"
            className="modal-with-count"
            width={1000}
         >
            <div>
               <div className="grid grid-cols-3 gap-x-2">
                  <div>
                     <div className="">
                        <p className="!mb-1 text-sm">
                           Эцэг /эх/-ийн нэр<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                        <span className="text-xs">Криллээр бичнэ үү</span>
                     </div>
                  </div>
                  <div>
                     <div className="">
                        <p className="!mb-1 text-sm">
                           Өөрийн нэр<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                        <span className="text-xs">Криллээр бичнэ үү</span>
                     </div>
                  </div>
                  <div>
                     <div className="">
                        <p className="!mb-1 text-sm">
                           Регистерийн дугаар<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                        <span className="text-xs">Криллээр бичнэ үү</span>
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">
                           Компанийн нэр<span className="text-red-500"> *</span>
                        </p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Хэлтэс нэгж</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Албан тушаал</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Цалин</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Гар утас</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="!mb-4">
                        <p className="!mb-1 text-sm">Цахим шуудан</p>
                        <Input placeholder="" />
                     </div>
                  </div>
                  <div>
                     <div className="grid grid-cols-2 gap-2">
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Аймаг, хот</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Сум, дүүрэг</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className="grid grid-cols-2 gap-2">
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Баг, хороо</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Хороолол</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className="grid grid-cols-2 gap-2">
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Байшин</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                        <div>
                           <div className="!mb-4">
                              <p className="!mb-1 text-sm">Хаалганы дугаар</p>
                              <Input placeholder="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default Tab2;
