import React from "react";
import { useState } from "react";
import { Input, Button, Form } from "antd";

const { TextArea } = Input;

function ContactData() {
  const handleCancelCreate = () => {
    setIsModalOpenCreate(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <Form
        name="createEmployee"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="w-75"
      >
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 w-25">
          <Form.Item
            name="surname"
            label={
              <span className="text-xs text-slate-500">Албаны И-мэйл</span>
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
              <span className="text-xs text-slate-500">Хувийн И-мэйл</span>
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
              <span className="text-xs text-slate-500">Утасны дугаар 1</span>
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
              <span className="text-xs text-slate-500">Утасны дугаар 2</span>
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
            label={<span className="text-xs text-slate-500">Хаяг байршил</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <TextArea
              showCount
              maxLength={100}
              style={{
                height: 120,
                marginBottom: 24,
              }}
              onChange={onChange}
              placeholder="can resize"
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

export default ContactData;
