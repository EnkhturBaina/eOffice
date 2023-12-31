import React, { useState } from 'react';
import { Button, Select, Input, Table, Popover, Modal } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import DTL from '../DTL';
import Toolbar from './Toolbar';
import SendCV from './SendCV';

function index() {
   const { TextArea } = Input;

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenReason, setIsModalOpenReason] = useState(false);

   const [selectedUserData, setSelectedUserData] = useState(null);
   const [tempUserData, setTempUserData] = useState(null);

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
         label: 'Disabled'
      }
   ];
   const handleChange = (value) => {
      console.log(`selected ${value}`);
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
         title: <span className="text-gray-400">Компанийн нэр,рд</span>,
         align: 'center',
         dataIndex: 'company_reg',
         key: 'company_reg'
      },
      {
         title: <span className="text-gray-400">Хаанаас</span>,
         align: 'center',
         dataIndex: 'emp_from',
         key: 'emp_from'
      },
      {
         title: <span className="text-gray-400">Хүсэлт илгээсэн огноо</span>,
         align: 'center',
         dataIndex: 'request_date',
         key: 'request_date'
      },
      {
         title: <span className="text-gray-400">Үүсгэсэн огноо</span>,
         align: 'center',
         dataIndex: 'created_date',
         key: 'created_date'
      },
      {
         title: <span className="text-gray-400">Үүсгэсэн огноо</span>,
         align: 'center',
         dataIndex: 'end_date',
         key: 'end_date'
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
         company_reg: 'TenPlus ХХК',
         emp_from: 'Тайгам Алтай ХХК',
         request_date: '30 Apr, 2020',
         created_date: '30 Apr, 2020',
         end_date: '30 Apr, 2020',
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
      <div
         className="flex flex-col !w-36"
         onMouseLeave={() => {
            handleClosePop();
            setTempUserData(null);
         }}
      >
         <Button
            type="text"
            className="text-left"
            onClick={() => {
               showModal();
               handleClosePop();
            }}
         >
            Анкет цуцлах
         </Button>
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
               showModalReason();
               handleClosePop();
            }}
         >
            Ажилд авах
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
         <SendCV />
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
            title={<span className="main-color">Цуцлах болсон шалтгаанаа бичнэ үү.</span>}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText="Хаах"
            okText="Илгээх"
            className="modal-with-count"
         >
            <div>
               <TextArea rows={4} placeholder="Шалтгаанаа бичнэ үү" showCount maxLength={250} />
            </div>
         </Modal>
         <Modal
            title={null}
            open={isModalOpenReason}
            onOk={handleOkReason}
            onCancel={handleCancelReason}
            cancelText="Хаах"
            okText="Болсон"
            className="modal-with-count"
         >
            <div>
               <div className="!mb-4">
                  <p className="!mb-1">Компани сонгох</p>
                  <Select
                     defaultValue="lucy"
                     style={{
                        width: 450
                     }}
                     onChange={handleChange}
                     options={employee_list}
                     className="custom-tab-select !mx-2"
                  />
               </div>
               <div className="!mb-4">
                  <p className="!mb-1">Компани сонгох</p>
                  <Select
                     defaultValue="lucy"
                     style={{
                        width: 450
                     }}
                     onChange={handleChange}
                     options={employee_list}
                     className="custom-tab-select !mx-2"
                  />
               </div>
               <div className="!mb-4">
                  <p className="!mb-1">Алба хэлтэс сонгох</p>
                  <Select
                     defaultValue="lucy"
                     style={{
                        width: 450
                     }}
                     onChange={handleChange}
                     options={employee_list}
                     className="custom-tab-select !mx-2"
                  />
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default index;
