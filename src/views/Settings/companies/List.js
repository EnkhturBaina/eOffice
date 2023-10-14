import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Divider,
  Input,
  Modal,
  Form,
  DatePicker,
  Select,
  InputNumber,
  Checkbox,
} from "antd";
import avatar from "../../../assets/images/avatars/1.jpg";
import {
  MenuUnfoldOutlined,
  LinkOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import Company from "../../../services/company/company";
import { openNofi } from "src/features/comman";
import companyTreeIType from "../../../references/companyTreeIType.json";

function List(props) {
  const [companyList, setCompanyList] = useState([]);
  const [treeList, setTreeList] = useState([]);
  const [defaultType, setDefaultType] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const getCompanyList = async () => {
    setCompanyList([]);
    setIsLoading(true);
    await Company.getCompany()
      .then((response) => {
        console.log("getCompany List =======>", response);
        if (response.status === 200) {
          setCompanyList(response.data?.response?.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const getTreeList = async () => {
    setTreeList([]);
    setIsLoading(true);
    await Company.getTree()
      .then((response) => {
        console.log("getTreeList =======>", response);
        if (response.status === 200) {
          setTreeList(response.data?.response?.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const createTree = async (values) => {
    if (values.type == 0) {
      // values.mid =
    }
    await Company.postTree(values)
      .then((response) => {
        console.log("Res createTree =====>", response);
        if (response.status === 201) {
          setIsModalOpen(false);
          form.resetFields();
          openNofi("success", "Амжилттай", "Бүртгэгдлээ.");
        }
      })
      .catch((error) => {
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {});
  };
  const onChangeCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  useEffect(() => {
    //  getCompanyList();
    getTreeList();
  }, []);

  useEffect(() => {
    if (selectedRowData?.type === 2) {
      companyTreeIType.map((el) => {
        if (el.value === 0) {
          setDefaultType([el]);
        }
      });
    } else if (selectedRowData?.type === 0) {
      companyTreeIType.map((el) => {
        if (el.value === 1) {
          setDefaultType([el]);
        }
      });
    }
    //  if (selectedRowData?.type === 2) {
    //    )
    //    setDefaultType(0);
    //  } else if (selectedRowData?.type === 0) {
    //    setDefaultType(1);
    //  }
  }, [selectedRowData]);

  const columns = [
    {
      title: <span className="text-gray-400">Компаний нэр</span>,
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex flex-row items-center">
          <img src={avatar} width={32} height={32} className="!mr-2" />
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      title: <span className="text-gray-400">Регистрийн дугаар</span>,
      dataIndex: "reg_num",
      key: "reg_num",
    },
    {
      title: <span className="text-gray-400">Гүйцэтгэх удирдлага</span>,
      dataIndex: "ceo",
      key: "ceo",
    },
    {
      title: <span className="text-gray-400">Хоблоо барих</span>,
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: <span className="text-gray-400">Үйлдэл</span>,
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex flex-row items-center justify-around">
          <MenuUnfoldOutlined
            onClick={() => {
              props.setActionType("DTL");
            }}
            className="main-color cursor-pointer"
            style={{ fontSize: 18 }}
          />
          <LinkOutlined
            onClick={() => {
              props.setActionType("Relation");
            }}
            className="main-color cursor-pointer"
            style={{ fontSize: 18 }}
          />
          <AppstoreAddOutlined
            onClick={() => {
              console.log("rec", record);
              setTimeout(() => {
                showModal();
              }, 500);
              setDefaultType(record.type);
              setSelectedRowData(record);
            }}
            className="main-color cursor-pointer"
            style={{ fontSize: 18 }}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={treeList}
        size="small"
        bordered
        className="companies-list-table"
        rowKey={"id"}
      />
      <Modal
        title={<span className="main-color">Бүртгэх</span>}
        open={isModalOpen}
        onCancel={() => {
          handleCancel();
          console.log("AA");
          form.resetFields();
          setDefaultType([]);
        }}
        maskClosable={false}
        footer={false}
        className="modal-with-count"
        width={400}
      >
        <div>
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            form={form}
            // initialValues={{
            //   type: null,
            //   name: null,
            //   shortName: null,
            //   isActive: null,
            //   isDevice: null,
            // }}
            initialValues={{ type: defaultType && defaultType[0] }}
          >
            <div>
              <Divider className="my-1" />
              <div className="grid grid-cols-1">
                <Form.Item
                  name="type"
                  label={<span className="text-xs text-slate-500">Төрөл</span>}
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                  // initialValue={defaultType && defaultType[0]}
                >
                  <Select
                    //   labelInValue
                    options={defaultType}
                    //   value={defaultType && defaultType[0]}
                    defaultValue={defaultType && defaultType[0]}
                    //   defaultActiveFirstOption={true}
                  />
                </Form.Item>
                <Form.Item
                  name="name"
                  label={<span className="text-xs text-slate-500">Нэр</span>}
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
                <Form.Item
                  name="shortName"
                  label={
                    <span className="text-xs text-slate-500">Богино нэр</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
                <Form.Item
                  name="isActive"
                  label={null}
                  className="custom-form-item"
                >
                  <Checkbox onChange={onChangeCheck} checked={false}>
                    <span className="text-xs text-slate-500">
                      Идэвхтэй эсэх
                    </span>
                  </Checkbox>
                </Form.Item>
                <Form.Item
                  name="isDevice"
                  label={null}
                  className="custom-form-item"
                >
                  <Checkbox onChange={onChangeCheck} checked={false}>
                    <span className="text-xs text-slate-500">isDevice</span>
                  </Checkbox>
                </Form.Item>
              </div>
            </div>
            <Form.Item className="text-right !mt-4 !mb-0">
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  form
                    .validateFields()
                    .then((values) => {
                      createTree(values);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                Бүртгэх
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default List;

