import React from "react";
import { useState } from "react";
import { Input, Select, Button, Form } from "antd";

function SystemData() {
  const handleCancelCreate = () => {
    setIsModalOpenCreate(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="createEmployee"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="w-50"
      >
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 w-25">
          <Form.Item
            name="workDuty"
            label={
              <span className="text-xs text-slate-500">Ажлын чиг үүрэг</span>
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
            name="surname"
            label={
              <span className="text-xs text-slate-500">
                Системд хэрэглэх нэр
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
              <span className="text-xs text-slate-500">
                Системд нэвтрэх нэр
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
            name="surname"
            label={<span className="text-xs text-slate-500">Код</span>}
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
              <span className="text-xs text-slate-500">Хэрэглэгчийн төрөл</span>
            }
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select
              defaultValue="lucy"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="surname"
            label={
              <span className="text-xs text-slate-500">Цаг бүтгүүлэх эсэх</span>
            }
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select
              defaultValue="lucy"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="username"
            label={<span className="text-xs text-slate-500">Нөхцөл</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select
              defaultValue="lucy"
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
              ]}
            />
          </Form.Item>
          <Form.Item className="text-right !mt-4 !mb-0">
            <Button type="primary" htmlType="submit">
              Хадгалах
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default SystemData;
