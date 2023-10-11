import React from "react";
import { useState } from "react";
import { Input, Button, Form } from "antd";

const { TextArea } = Input;

function ContactData() {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 w-25">
        <Form.Item
          name="workMail"
          label={<span className="text-xs text-slate-500">Албаны И-мэйл</span>}
          className="custom-form-item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="personalMail"
          label={<span className="text-xs text-slate-500">Хувийн И-мэйл</span>}
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
          name="mobile"
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
          name="mobileOther"
          label={
            <span className="text-xs text-slate-500">Утасны дугаар 2</span>
          }
          className="custom-form-item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label={<span className="text-xs text-slate-500">Хаяг байршил</span>}
          className="custom-form-item"
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
      </div>
    </div>
  );
}

export default ContactData;
