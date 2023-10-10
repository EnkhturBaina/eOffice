import React, { useEffect } from "react";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Input, Modal, Button, Form, Divider, Tabs } from "antd";
import GeneralData from "./createEmp/GeneralData";
import SystemData from "./createEmp/SystemData";
import ContactData from "./createEmp/ContactData";
import CountryServices from "../../../../services/settings/country";

function CreateEmp2() {
  const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
  const [countryData, setCountryData] = useState("");
  const [cityData, setCityData] = useState("");

  const showModalCreate = () => {
    setIsModalOpenCreate(true);
  };
  const handleOkCreate = () => {
    setIsModalOpenCreate(false);
  };
  const handleCancelCreate = () => {
    setIsModalOpenCreate(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getCountries = async () => {
    await CountryServices.get({ type: 1 })
      .then((res) => {
        console.log("getCountries", res);
        setCountryData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
  };
  const getCities = async () => {
    await CountryServices.get({ type: 2 })
      .then((res) => {
        console.log("getCities", res);
        setCityData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Ерөнхий мэдээлэл`,
      children: <GeneralData countryData={countryData} cityData={cityData} />,
    },
    {
      key: "2",
      label: `Систем`,
      children: <SystemData />,
    },
    {
      key: "3",
      label: `Холбоо барих`,
      children: <ContactData />,
    },
  ];

  useEffect(() => {
    getCountries();
    getCities();
  }, []);
  return (
    <div className="bg-white px-3 pb-3">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <Modal
        title={<span className="main-color">Ерөнхий мэдээлэл</span>}
        open={isModalOpenCreate}
        className="modal-with-count"
        width={1000}
        footer={false}
        maskClosable={false}
        onCancel={handleCancelCreate}
      >
        <Divider className="my-1" />
        <Form
          name="createEmployee"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            <Form.Item
              name="username"
              label={
                <span className="text-xs text-slate-500">
                  Эцэг /эх/-ийн нэр
                </span>
              }
              className="custom-form-item"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={<span className="text-xs text-slate-500">Өөрийн нэр</span>}
              className="custom-form-item"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={
                <span className="text-xs text-slate-500">
                  Регистрийн дугаар
                </span>
              }
              className="custom-form-item"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={
                <span className="text-xs text-slate-500">Компанийн нэр</span>
              }
              className="custom-form-item"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={
                <span className="text-xs text-slate-500">Хэлтэс нэгж</span>
              }
              className="custom-form-item"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={
                <span className="text-xs text-slate-500">Албан тушаал</span>
              }
              className="custom-form-item"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={<span className="text-xs text-slate-500">Цалин</span>}
              className="custom-form-item"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={<span className="text-xs text-slate-500">Гар утас</span>}
              className="custom-form-item"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="username"
              label={
                <span className="text-xs text-slate-500">Цахим шуудан</span>
              }
              className="custom-form-item"
            >
              <Input />
            </Form.Item>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <Form.Item
                  name="username"
                  label={
                    <span className="text-xs text-slate-500">Аймаг, хот</span>
                  }
                  className="custom-form-item"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="username"
                  label={
                    <span className="text-xs text-slate-500">Сум, дүүрэг</span>
                  }
                  className="custom-form-item"
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <Form.Item
                  name="username"
                  label={
                    <span className="text-xs text-slate-500">Баг, хороо</span>
                  }
                  className="custom-form-item"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="username"
                  label={
                    <span className="text-xs text-slate-500">Хороолол</span>
                  }
                  className="custom-form-item"
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <Form.Item
                  name="username"
                  label={<span className="text-xs text-slate-500">Байшин</span>}
                  className="custom-form-item"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="username"
                  label={
                    <span className="text-xs text-slate-500">
                      Хаалганы дугаар
                    </span>
                  }
                  className="custom-form-item"
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
          </div>
          <Form.Item className="text-right !mt-4 !mb-0">
            <Button onClick={handleCancelCreate} className="!mr-2">
              Хаах
            </Button>
            <Button type="primary" htmlType="submit">
              Болсон
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default CreateEmp2;

