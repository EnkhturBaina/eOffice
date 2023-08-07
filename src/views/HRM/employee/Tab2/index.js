import React, { useState } from 'react';
import { Button, Table, Popover, Modal } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import DTL from '../DTL';
import Toolbar from './Toolbar';
import CreateEmp from './CreateEmp';

function index() {
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
      </div>
   );
}

export default index;
