import React, { useState } from 'react';
import { Button, Select, DatePicker, Input, Table, Popover, Modal, Tabs } from 'antd';
import { PlusCircleOutlined, DownloadOutlined, PrinterOutlined, MoreOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import DTL from './DTL';
import GeneralCV from './CV/GeneralCV';
import EducationCV from './CV/EducationCV';
import SkillCV from './CV/SkillCV';
import WorkCV from './CV/WorkCV';
import FamilyCV from './CV/FamilyCV';
import HistoryCV from './CV/HistoryCV';

function Tab4() {
   const { RangePicker } = DatePicker;
   const { TextArea } = Input;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenReason, setIsModalOpenReason] = useState(false);
   const [isModalOpenCV, setIsModalOpenCV] = useState(false);

   const [selectedUserData, setSelectedUserData] = useState(null);
   const [tempUserData, setTempUserData] = useState(null);

   const [openPopopver, setOpenPopopver] = useState({ show: false, popopverId: 0 });

   const handleOpenPop = (id) => {
      setOpenPopopver({ show: true, popopverId: id });
   };

   const handleClosePop = () => {
      setOpenPopopver({ show: false });
   };
   const showModalCV = () => {
      setIsModalOpenCV(true);
   };
   const handleOkCV = () => {
      setIsModalOpenCV(false);
   };
   const handleCancelCV = () => {
      setIsModalOpenCV(false);
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
   const items = [
      {
         key: '1',
         label: `Ерөнхий мэдээлэл`,
         children: <GeneralCV />
      },
      {
         key: '2',
         label: `Боловсрол`,
         children: <EducationCV />
      },
      {
         key: '3',
         label: `Ур чадвар`,
         children: <SkillCV />
      },
      {
         key: '4',
         label: `Ажил эрхлэлт`,
         children: <WorkCV />
      },
      {
         key: '5',
         label: `Гэр бүл`,
         children: <FamilyCV />
      },
      {
         key: '6',
         label: `Түүүхүүд`,
         children: <HistoryCV />
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

   const onChange = (key) => {
      console.log(key);
   };
   return (
      <div>
         <div className="flex justify-end">
            <Button type="primary" className="flex items-center" size="middle" onClick={showModalCV}>
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
            title={null}
            open={isModalOpenCV}
            onOk={handleOkCV}
            onCancel={handleCancelCV}
            cancelText="Хаах"
            okText="Үргэлжлүүлэх"
            className="modal-with-count"
            width={1000}
         >
            <div>
               <Tabs
                  defaultActiveKey="1"
                  items={items.map((el, index) => {
                     return {
                        label: <span className="text-xs">{el.label}</span>,
                        key: index,
                        children: el.children
                     };
                  })}
                  onChange={onChange}
                  className="employee-dtl-tab"
               />
            </div>
         </Modal>
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

export default Tab4;
