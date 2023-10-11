import React from "react";
import { useState } from "react";
import { Input, Select, Button, Form } from "antd";
import yesNoRef from "../../../../../references/yesNo.json";

function SystemData() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-2 w-25">
        <Form.Item
          name="workDuty"
          label={
            <span className="text-xs text-slate-500">Ажлын чиг үүрэг</span>
          }
          className="custom-form-item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="code"
          label={<span className="text-xs text-slate-500">Код</span>}
          className="custom-form-item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="username"
          label={
            <span className="text-xs text-slate-500">Хэрэглэгчийн төрөл</span>
          }
          className="custom-form-item"
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
          name="isRequest"
          label={
            <span className="text-xs text-slate-500">Цаг бүтгүүлэх эсэх</span>
          }
          className="custom-form-item"
        >
          <Select defaultValue="lucy" options={yesNoRef} />
        </Form.Item>
        <Form.Item
          name="username"
          label={<span className="text-xs text-slate-500">Нөхцөл</span>}
          className="custom-form-item"
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
      </div>
    </div>
  );
}

export default SystemData;
