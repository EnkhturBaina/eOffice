import {
  Button,
  Divider,
  Input,
  Form,
  Space,
  InputNumber,
  DatePicker,
} from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";

function EducationUpdate(props) {
  console.log("props", props);
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const [form] = Form.useForm();
  const updateEducation = async (values) => {
    console.log("values", values);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.post(values)
      .then((response) => {
        console.log("updateEducation", response);
        if (response.status === 201) {
        }
      })
      .catch((error) => {
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {});
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <Form
        form={form}
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          general: [
            {
              schoolName: null,
              startYear: null,
              endYear: null,
              countryId: null,
              cityId: null,
              type: 1,
            },
          ],
          university: [
            {
              schoolName: null,
              startYear: null,
              endYear: null,
              countryId: null,
              cityId: null,
              occupation: null,
              degree: null,
              diplomNumber: null,
              grade: null,
              type: 2,
            },
          ],
          training: [
            {
              fineProfession: null,
              startDate: null,
              endDate: null,
              organizationName: null,
              certificateNumber: null,
              type: 3,
            },
          ],
        }}
      >
        <span className="main-color font-semibold">А.Ерөнхий боловсрол</span>
        <Divider className="my-1" />
        <Form.List name="general">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-1">
                    <Form.Item
                      {...restField}
                      hidden
                      name={[name, "type"]}
                      label={null}
                      className="custom-form-item"
                      initialValue={1}
                    ></Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "schoolName"]}
                      label={
                        <span className="text-xs text-slate-500">Сургууль</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "startYear"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Элссэн он
                        </span>
                      }
                      className="custom-form-item"
                    >
                      {/* <DatePicker
                        onChange={onChange}
                        picker="year"
                        format={"YYYY"}
                      /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "endYear"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Төгссөн он
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "countryId"]}
                      label={
                        <span className="text-xs text-slate-500">Улс</span>
                      }
                      className="custom-form-item"
                    >
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "cityId"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Аймаг, хот
                        </span>
                      }
                      className="custom-form-item"
                    >
                      {/* <Input size="small" /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                  </div>
                  {fields.length > 1 ? (
                    <DeleteOutlined
                      onClick={() => {
                        remove(name);
                      }}
                      className="text-xl text-rose-500 !px-2.5 leading-none cursor-pointer"
                      style={{ marginTop: 15 }}
                    />
                  ) : null}
                </Space>
              ))}
              <Form.Item className="text-right">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  className="!w-2/12"
                >
                  Мөр нэмэх
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <span className="main-color font-semibold">Б.Дээд боловсрол</span>
        <Divider className="my-1" />
        <Form.List name="university">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-1">
                    <Form.Item
                      {...restField}
                      hidden
                      name={[name, "type"]}
                      label={null}
                      className="custom-form-item"
                      initialValue={2}
                    ></Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "schoolName"]}
                      label={
                        <span className="text-xs text-slate-500">Сургууль</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "startYear"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Элссэн он
                        </span>
                      }
                      className="custom-form-item"
                    >
                      {/* <Input size="small" /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "endYear"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Төгссөн он
                        </span>
                      }
                      className="custom-form-item"
                    >
                      {/* <Input size="small" /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "countryId"]}
                      label={
                        <span className="text-xs text-slate-500">Улс</span>
                      }
                      className="custom-form-item"
                    >
                      {/* <Input size="small" /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "cityId"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Аймаг, хот
                        </span>
                      }
                      className="custom-form-item"
                    >
                      {/* <Input size="small" /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "occupation"]}
                      label={
                        <span className="text-xs text-slate-500">Мэргэжил</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "degree"]}
                      label={
                        <span className="text-xs text-slate-500">Зэрэглэл</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "diplomNumber"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Дипломны дугаар
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "grade"]}
                      label={
                        <span className="text-xs text-slate-500">Дүн</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                  </div>
                  {fields.length > 1 ? (
                    <DeleteOutlined
                      onClick={() => {
                        remove(name);
                      }}
                      className="text-xl text-rose-500 !px-2.5 leading-none cursor-pointer"
                      style={{ marginTop: 15 }}
                    />
                  ) : null}
                </Space>
              ))}
              <Form.Item className="text-right">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  className="!w-2/12"
                >
                  Мөр нэмэх
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <span className="main-color font-semibold">
          В. Мэргэжлийн чиглэлээр хамрагдаж байсан сургалт
        </span>
        <Divider className="my-1" />
        <Form.List name="training">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-1">
                    <Form.Item
                      {...restField}
                      hidden
                      name={[name, "type"]}
                      label={null}
                      className="custom-form-item"
                      initialValue={3}
                    ></Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "fineProfession"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Нарийн мэргэжлийн нэр
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "startDate"]}
                      label={
                        <span className="text-xs text-slate-500">Авсан он</span>
                      }
                      className="custom-form-item"
                    >
                      {/* <Input size="small" /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "endDate"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Хугацаа дуусах он
                        </span>
                      }
                      className="custom-form-item"
                    >
                      {/* <Input size="small" /> */}
                      <InputNumber size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "organizationName"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Байгууллага/сургууль
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "certificateNumber"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Гэрчилгээний №
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                  </div>
                  {fields.length > 1 ? (
                    <DeleteOutlined
                      onClick={() => {
                        remove(name);
                      }}
                      className="text-xl text-rose-500 !px-2.5 leading-none cursor-pointer"
                      style={{ marginTop: 15 }}
                    />
                  ) : null}
                </Space>
              ))}
              <Form.Item className="text-right">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  className="!w-2/12"
                >
                  Мөр нэмэх
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() =>
              form
                .validateFields()
                .then((values) => {
                  updateEducation(values);
                })
                .catch((error) => {
                  console.log(error);
                })
            }
          >
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EducationUpdate;
