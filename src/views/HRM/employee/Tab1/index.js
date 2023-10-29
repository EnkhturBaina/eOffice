import React, { useState, useEffect } from "react";
import { Button, Input, Table, Popover, Modal, Progress, Tooltip } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import DTL from "../DTL";
import avatar from "../../../../assets/images/avatars/1.jpg";
import Toolbar from "./Toolbar";
import CompanyServices from "../../../../services/settings/company";
import CreateEmp2 from "./CreateEmp2";
import Worker from "src/services/worker/worker";
import ReferenceService from "../../../../services/upload/ReferenceService";

function index() {
  const { TextArea } = Input;

  const [selectedBtn, setSelectedBtn] = useState(1);
  //["0=>TABLE", "1=>50:50", "2=>DTL"];
  const [dtlSize, setDtlSize] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenReason, setIsModalOpenReason] = useState(false);

  const [selectedUserData, setSelectedUserData] = useState(null);
  const [workerList, setWorkerList] = useState("");
  const [isLoadingWorker, setIsLoadingWorker] = useState(false);

  const [openPopopver, setOpenPopopver] = useState({
    show: false,
    popopverId: 0,
  });

  const getWorkers = async () => {
    setIsLoadingWorker(true);
    await Worker.get()
      .then((res) => {
        console.log("getWorkers", res);
        if (res?.data?.response) {
          setWorkerList(res.data.response.data);
        }
      })
      .catch((c) => {})
      .finally(() => {
        setIsLoadingWorker(false);
      });
  };

  useEffect(() => {
    getWorkers();
  }, []);

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

  const getCompanies = async () => {
    await CompanyServices.get()
      .then((t) => {
        console.log("T", t);
      })
      .catch((c) => {})
      .finally(() => {});
  };

  useEffect(() => {
    getCompanies();
  }, []);
  const columns = [
    {
      title: <span className="text-gray-400">Овог, нэр</span>,
      align: "center",
      dataIndex: "name",
      key: ["humans"],
      render: (_, record) => {
        return (
          <div className="flex flex-row items-center">
            <img
              src={avatar}
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            <div className="flex flex-col !ml-2 items-start">
              <span className="font-bold">{`${record.humans.firstName?.substr(
                0,
                1
              )}. ${record.humans.lastName}`}</span>
              <span className="text-gray-400 text-xs">
                {record.humans.regNumber}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      title: <span className="text-gray-400">Ажилчны ID</span>,
      align: "center",
      dataIndex: ["humans", "id"],
      key: ["humans", "id"],
    },
    {
      title: <span className="text-gray-400">Компанийн нэр,рд</span>,
      align: "center",
      dataIndex: ["companies", "name"],
      key: ["companies", "name"],
    },
    {
      title: <span className="text-gray-400">Хэлтэс нэгж</span>,
      align: "center",
      dataIndex: "emp_department",
      key: "emp_department",
    },
    {
      title: <span className="text-gray-400">Албан тушаал</span>,
      align: "center",
      dataIndex: "emp_position",
      key: "emp_position",
    },
    {
      title: <span className="text-gray-400">Ажилд орсон огноо</span>,
      align: "center",
      dataIndex: "join_date",
      key: "join_date",
    },
    {
      title: <span className="text-gray-400">Цалин</span>,
      align: "center",
      dataIndex: "emp_salary",
      key: "emp_salary",
    },
    {
      title: <span className="text-gray-400">Төлөв</span>,
      align: "center",
      dataIndex: "emp_status",
      key: "emp_status",
    },
    {
      title: <span className="text-gray-400">Мэдээлэл</span>,
      align: "center",
      key: "action",
      render: (_, record) => (
        <div>
          <Tooltip title="Таны анкет бөглөлтийн гүйцэтгэл">
            <Progress percent={30} size="small" style={{ width: 50 }} />
          </Tooltip>
          <Popover
            placement="left"
            content={content}
            trigger="click"
            open={openPopopver.show && openPopopver.popopverId == record.id}
            onOpenChange={() => {
              handleOpenPop(record.id);
            }}
          >
            <MoreOutlined />
          </Popover>
        </div>
      ),
    },
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
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const getFile = async (id) => {
    return await ReferenceService.getImage(id).then((response) => {
      const file = new Blob([response], { type: response.type });
      const fileUrl = URL.createObjectURL(file);
      console.log("fileUrl", fileUrl);
      return fileUrl;
    });
  };

  return (
    <div>
      <Toolbar selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />
      {selectedBtn == 1 ? (
        <>
          <div className="flex flex-row !gap-4">
            <Table
              rowKey={"id"}
              loading={isLoadingWorker}
              columns={columns}
              dataSource={workerList}
              className={
                dtlSize === 2
                  ? "hidden"
                  : dtlSize === 1
                  ? "basis-1/2"
                  : "basis-full"
              }
              bordered
              size="small"
              onRow={(record, rowIndex) => {
                return {
                  onDoubleClick: (event) => {
                    console.log("record", record);
                    setSelectedUserData(record);
                    setDtlSize(1);
                  },
                };
              }}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
            />
            {selectedUserData ? (
              <div
                className={
                  dtlSize === 2
                    ? "basis-full"
                    : dtlSize === 1
                    ? "basis-1/2"
                    : "basis-0"
                }
              >
                <DTL
                  selectedUserData={selectedUserData}
                  setSelectedUserData={setSelectedUserData}
                  dtlSize={dtlSize}
                  setDtlSize={setDtlSize}
                />
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
            title={
              <span className="main-color">Ажлаас чөлөөлөх болох шалтгаан</span>
            }
            open={isModalOpenReason}
            onOk={handleOkReason}
            onCancel={handleCancelReason}
            cancelText="Хаах"
            okText="Болсон"
            className="modal-with-count"
          >
            <div>
              <TextArea
                rows={4}
                placeholder="Шалтгаанаа бичнэ үү"
                showCount
                maxLength={250}
              />
            </div>
          </Modal>
        </>
      ) : (
        <CreateEmp2 selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />
      )}
    </div>
  );
}

export default index;

