import {
  Button,
  Divider,
  Input,
  Modal,
  Form,
  DatePicker,
  InputNumber,
} from "antd";
import React from "react";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import mn_MN from "antd/es/date-picker/locale/mn_MN";
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD";
import Company from "../../../services/company/company";
import { openNofi } from "src/features/comman";

function CreateCompany() {
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

  const createCompany = async (values) => {
    values.licenseDate = dayjs(values.licenseDate).format(dateFormat);
    values.attentDate = dayjs(values.attentDate).format(dateFormat);

    await Company.postCompany(values)
      .then((response) => {
        console.log("Res createCompany =====>", response);
        if (response.status === 201) {
          setIsModalOpen(false);
          openNofi("warning", "Амжилттай", "Коипани бүртгэгдлээ.");
        }
      })
      .catch((error) => {
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {});
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
            <span className="text-sm">Компани бүртгэх</span>
            <PlusCircleOutlined />
          </Button>
        </div>
        <Modal
          title={<span className="main-color">Компани бүртгэх</span>}
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
                    name="name"
                    label={
                      <span className="text-xs text-slate-500">
                        Компаний нэр
                      </span>
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
                    name="licenseDate"
                    label={
                      <span className="text-xs text-slate-500">
                        Систем ашиглах хугацаа
                      </span>
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
                    <DatePicker
                      onChange={onChange}
                      className="custom-datepicker"
                      format={dateFormat}
                      locale={mn_MN}
                    />
                  </Form.Item>
                  <Form.Item
                    name="attentDate"
                    label={
                      <span className="text-xs text-slate-500">
                        Анхааруулах хугацаа
                      </span>
                    }
                    className="custom-form-item"
                  >
                    <DatePicker
                      onChange={onChange}
                      className="custom-datepicker"
                      format={dateFormat}
                      locale={mn_MN}
                    />
                  </Form.Item>
                  <Form.Item
                    name="userCnt"
                    label={
                      <span className="text-xs text-slate-500">
                        Хэрэглэгчийн тоо
                      </span>
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
                    <InputNumber
                      min={1900}
                      max={2100}
                      className="hide-input-arrow"
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="dataHost"
                    label={
                      <span className="text-xs text-slate-500">Data URL</span>
                    }
                    className="custom-form-item"
                  >
                    <Input size="small" />
                  </Form.Item>
                  <Form.Item
                    name="dataDir"
                    label={
                      <span className="text-xs text-slate-500">
                        Data хавтас
                      </span>
                    }
                    className="custom-form-item"
                  >
                    <Input size="small" />
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
                        createCompany(values);
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

export default CreateCompany;

