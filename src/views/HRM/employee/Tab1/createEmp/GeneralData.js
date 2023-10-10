import React from "react";
import { useState } from "react";
import { Input, Select, Button, Form } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import avatarEmpty from "../../../../../assets/avatarEmpty.png";
import CountryServices from "../../../../../services/settings/country";
import genderRef from "../../../../../references/gender.json";
import yesNoRef from "../../../../../references/yesNo.json";

function GeneralData(props) {
  const [districtData, setDistrictData] = useState("");
  const handleCancelCreate = () => {
    setIsModalOpenCreate(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const getDistricts = async (parent_id) => {
    await CountryServices.get({ parentId: parent_id })
      .then((res) => {
        console.log("getCities", res);
        setDistrictData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
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
        <div className="flex text-center">
          <div className="mr-8">
            <img src={avatarEmpty} />
            <Button type="default" className="mt-3">
              <span className="!flex items-center">
                Зураг оруулах <FileAddOutlined className="ml-2" />
              </span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-100">
            <Form.Item
              name="familyName"
              label={
                <span className="text-xs text-slate-500">Ургийн овог</span>
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
              name="mCityId"
              label={
                <span className="text-xs text-slate-500">Төрсөн газар</span>
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
                options={props.cityData}
                showSearch
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={filterOption}
                onChange={(e) => {
                  getDistricts(e);
                }}
              />
            </Form.Item>
            <Form.Item
              name="firstName"
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
              name="mDistrictId"
              label={
                <span className="text-xs text-slate-500">Сум, дүүрэг</span>
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
                options={districtData}
                showSearch
                optionFilterProp="children"
                onSearch={onSearch}
                filterOption={filterOption}
                onChange={(e) => {
                  console.log("e", e);
                }}
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              label={
                <span className="text-xs text-slate-500">Ажилтны нэр</span>
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
              name="mCommittee"
              label={
                <span className="text-xs text-slate-500">Баг хороо, газар</span>
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
              name="regNumber"
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
              name="ndNumber"
              label={
                <span className="text-xs text-slate-500">
                  Нийгмийн даатгалын дугаар
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
              name="nation"
              label={
                <span className="text-xs text-slate-500">Үндэс угсаа</span>
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
              name="emdNumber"
              label={
                <span className="text-xs text-slate-500">
                  Эрүүл мэндийн даатгалын дугаар
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
              name="mcountryId"
              label={<span className="text-xs text-slate-500">Иргэншил</span>}
              className="custom-form-item"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Select
                showSearch
                optionFilterProp="children"
                options={props.countryData}
                onSearch={onSearch}
                filterOption={filterOption}
              />
            </Form.Item>
            <Form.Item
              name="driveNumber"
              label={
                <span className="text-xs text-slate-500">
                  Жолооны үнэмлэхний дугаар
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
              name="gender"
              label={<span className="text-xs text-slate-500">Хүйс</span>}
              className="custom-form-item"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Select options={genderRef} />
            </Form.Item>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <Form.Item
                  name="disabled"
                  label={
                    <span className="text-xs text-slate-500">
                      Хөгжлийн бэрхшээлтэй эсэх
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
                  <Select options={yesNoRef} />
                </Form.Item>
                <Form.Item
                  name="isMarried"
                  label={
                    <span className="text-xs text-slate-500">
                      Гэрэлсэн эсэх
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
          </div>
        </div>
        <Form.Item className="text-right !mt-4 !mb-0">
          <Button type="primary" htmlType="submit">
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default GeneralData;
