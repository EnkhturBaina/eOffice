import React, { useState } from 'react';
import { Button, Input, Table, Popover, Modal, Progress, Tooltip } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import DTL from '../DTL';
import avatar from '../../../../assets/images/avatars/1.jpg';
import CreateEmp from './CreateEmp';
import Toolbar from './Toolbar';

function index() {
   const { TextArea } = Input;

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenReason, setIsModalOpenReason] = useState(false);

   const [selectedUserData, setSelectedUserData] = useState(null);

   const [openPopopver, setOpenPopopver] = useState({ show: false, popopverId: 0 });

   const handleOpenPop = (id) => {
      setOpenPopopver({ show: true, popopverId: id });
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
         title: <span className="text-gray-400">Төлөв</span>,
         align: 'center',
         dataIndex: 'emp_status',
         key: 'emp_status'
      },
      {
         title: <span className="text-gray-400">Мэдээлэл</span>,
         align: 'center',
         key: 'action',
         render: (_, record) => (
            <div>
               <Tooltip title="Таны анкет бөглөлтийн гүйцэтгэл">
                  <Progress percent={30} size="small" style={{ width: 50 }} />
               </Tooltip>
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
            </div>
         )
      }
   ];
   const data = [
      {
         key: '1',
         name: 'Түдэв Уянга',
         empoyee_id: 'LA-0231',
         regnum: 'АБ11223344',
         company_reg: 'TenPlus ХХК',
         emp_department: 'Хөгжүүлэлт',
         emp_position: 'Маркетинг',
         join_date: '30 Apr, 2020',
         emp_salary: '120000000',
         emp_status: 'Идэвхтэй'
      },
      {
         key: '2',
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
            Шилжүүлэх
         </Button>
         <Button
            type="text"
            className="text-left"
            onClick={() => {
               showModalReason();
               handleClosePop();
            }}
         >
            Ажлаас чөлөөлөх
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
         <CreateEmp />
         <Toolbar />
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
            title={<span className="main-color">Ажлаас чөлөөлөх болох шалтгаан</span>}
            open={isModalOpenReason}
            onOk={handleOkReason}
            onCancel={handleCancelReason}
            cancelText="Хаах"
            okText="Болсон"
            className="modal-with-count"
         >
            <div>
               <TextArea rows={4} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={250} />
            </div>
         </Modal>
      </div>
   );
}

export default index;
