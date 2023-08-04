import React, { useState } from 'react';
import { Button, Select, DatePicker, Input, Table, Popover, Modal } from 'antd';
import { PlusCircleOutlined, DownloadOutlined, PrinterOutlined, MoreOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

function Tab4() {
   const { RangePicker } = DatePicker;
   const { TextArea } = Input;
   const { Search } = Input;
   const dateFormat = 'YYYY/MM/DD';
   var now = dayjs();

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenReason, setIsModalOpenReason] = useState(false);

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
         title: '№',
         align: 'center',
         dataIndex: 'col1',
         key: 'col1'
      },
      {
         title: 'Овог, нэр',
         align: 'center',
         dataIndex: 'name',
         key: 'name'
      },
      {
         title: 'Компанийн нэр,рд',
         align: 'center',
         dataIndex: 'company_reg',
         key: 'company_reg'
      },
      {
         title: 'Хаанаас',
         align: 'center',
         dataIndex: 'emp_from',
         key: 'emp_from'
      },
      {
         title: 'Хүсэлт илгээсэн огноо',
         align: 'center',
         dataIndex: 'request_date',
         key: 'request_date'
      },
      {
         title: 'Үүсгэсэн огноо',
         align: 'center',
         dataIndex: 'created_date',
         key: 'created_date'
      },
      {
         title: 'Үүсгэсэн огноо',
         align: 'center',
         dataIndex: 'end_date',
         key: 'end_date'
      },
      {
         title: 'Төлөв',
         align: 'center',
         dataIndex: 'emp_status',
         key: 'emp_status'
      },
      {
         title: 'Мэдээлэл',
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

   return (
      <div>
         <div className="flex justify-end">
            <Button type="primary" className="flex items-center" size="middle">
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
         <Table columns={columns} dataSource={data} pagination={false} className="" bordered />
         <Modal
            title="Шилжүүлэх"
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
            title="Ажлаас чөлөөлөх болох шалтгаан"
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

export default Tab4;
