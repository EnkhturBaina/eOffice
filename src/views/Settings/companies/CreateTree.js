import {
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
import React from "react";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import mn_MN from "antd/es/date-picker/locale/mn_MN";
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD";
import Company from "../../../services/company/company";
import { openNofi } from "src/features/comman";
import companyTreeIType from "../../../references/companyTreeIType.json";

function CreateTree() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

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
  return (
    <div>
      <div className="flex flex-row items-center !px-10 justify-end">
        <div className="flex justify-end">
          <Button
            type="primary"
            className="flex items-center"
            size="middle"
            onClick={showModal}
          >
            <span className="text-sm">Бүртгэх</span>
            <PlusCircleOutlined />
          </Button>
        </div>
        <Modal
          title={<span className="main-color">Бүртгэх</span>}
          open={isModalOpen}
          onCancel={handleCancel}
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
            >
              <div>
                <Divider className="my-1" />
                <div className="grid grid-cols-1">
                  <Form.Item
                    name="type"
                    label={
                      <span className="text-xs text-slate-500">Төрөл</span>
                    }
                    className="custom-form-item"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span
                            className="text-red-500"
                            style={{ fontSize: 10 }}
                          >
                            Шаардлагатай
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      optionFilterProp="children"
                      options={companyTreeIType}
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
                          <span
                            className="text-red-500"
                            style={{ fontSize: 10 }}
                          >
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
                          <span
                            className="text-red-500"
                            style={{ fontSize: 10 }}
                          >
                            Шаардлагатай
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input size="small" />
                  </Form.Item>
                  <Form.Item
                    name="pos"
                    label={null}
                    className="custom-form-item"
                  >
                    <Checkbox onChange={onChangeCheck}>
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
                    <Checkbox onChange={onChangeCheck}>
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
    </div>
  );
}

export default CreateTree;

