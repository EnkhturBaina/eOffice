import React, { useState } from 'react';
import { Button, Select, DatePicker, Input, Table, Popover, Modal, message } from 'antd';
import { PlusCircleOutlined, DownloadOutlined, PrinterOutlined, MoreOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import DTL from './DTL';

function Tab3() {
   const { RangePicker } = DatePicker;
   const { TextArea } = Input;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();
   const [messageApi, contextHolder] = message.useMessage();

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenReject, setIsModalOpenReject] = useState(false);
   const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);

   const [selectedUserData, setSelectedUserData] = useState(null);
   const [tempUserData, setTempUserData] = useState(null);

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
   const showModalReject = () => {
      setIsModalOpenReject(true);
   };
   const handleOkReject = () => {
      setIsModalOpenReject(false);
   };
   const handleCancelReject = () => {
      setIsModalOpenReject(false);
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

   const successFnc = () => {
      messageApi.open({
         type: 'success',
         content: 'Та амжилттай баталгаажууллаа.'
      });
   };
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
         title: <span className="text-gray-400">Үүсгэсэн огноо</span>,
         align: 'center',
         dataIndex: 'created_date',
         key: 'created_date'
      },
      {
         title: <span className="text-gray-400">Дуусах огноо</span>,
         align: 'center',
         dataIndex: 'end_date',
         key: 'end_date'
      },
      {
         title: <span className="text-gray-400">Шалтгаан</span>,
         align: 'center',
         dataIndex: 'reason',
         key: 'reason'
      },
      {
         title: <span className="text-gray-400">Статус</span>,
         align: 'center',
         dataIndex: 'status',
         key: 'status'
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
                  setTempUserData(record);
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
         created_date: '30 Apr, 2020',
         end_date: '30 Apr, 2020',
         reason: 'Өөрийн хүсэлтээр',
         status: 'Идэвхтэй'
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
      <div
         className="flex flex-col !w-36"
         onMouseLeave={() => {
            handleClosePop();
            setTempUserData(null);
         }}
      >
         {contextHolder}
         <Button
            type="text"
            className="text-left"
            onClick={() => {
               setSelectedUserData(tempUserData);
               handleClosePop();
            }}
         >
            Дэлгэрэнгүй
         </Button>
         <Button
            type="text"
            className="text-left"
            onClick={() => {
               showModalReject();
               handleClosePop();
            }}
         >
            Цуцлах
         </Button>
         <Button
            type="text"
            className="text-left"
            onClick={() => {
               successFnc();
               handleClosePop();
            }}
         >
            Батлах
         </Button>
      </div>
   );

   return (
      <div>
         <div className="flex justify-end">
            <Button type="primary" className="flex items-center" size="middle" onClick={showModalCreate}>
               <span className="text-sm">Гарах хүсэлт</span>
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
            <div className="!mb-4">
               <p className="!mb-1">Компани</p>
               <Input placeholder="Шилжүүлэх компанийн нэр" />
            </div>
            <div className="!mb-4">
               <p className="!mb-1">Хэлтэс</p>
               <Input placeholder="Шилжүүлэх хэлтэс" />
            </div>
            <div className="!mb-4">
               <p className="!mb-1 text-sm">Шилжүүлсэн ажилтан</p>
               <Input placeholder="Шилжүүлсэн ажилтаны нэр" />
            </div>
            <div className="!mb-4">
               <p className="!mb-1">Шилжүүлсэн огноо</p>
               <Input placeholder="Шилжүүлсэн огноо" />
            </div>
         </Modal>
         <Modal
            title={<span className="main-color">Цуцлах болсон шалтгаанаа бичнэ үү.</span>}
            open={isModalOpenReject}
            onOk={handleOkReject}
            onCancel={handleCancelReject}
            cancelText="Хаах"
            okText="Илгээх"
            className="modal-with-count"
         >
            <div>
               <TextArea rows={4} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={250} />
            </div>
         </Modal>
         <Modal
            title={<span className="main-color">Гарах хүсэлт гаргах болсон шалтгаанаа бичнэ үү.</span>}
            open={isModalOpenCreate}
            onOk={handleOkCreate}
            onCancel={handleCancelCreate}
            cancelText="Хаах"
            okText="Илгээх"
            className="modal-with-count"
         >
            <div>
               <TextArea rows={8} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={500} />
            </div>
         </Modal>
      </div>
   );
}

export default Tab3;
