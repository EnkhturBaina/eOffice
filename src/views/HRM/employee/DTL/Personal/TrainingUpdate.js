import { Button, Divider, Input, Form, Space, Select, InputNumber } from "antd";
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import familyPersons from "../../../../../references/familyPersons.json";
import jobType from "../../../../../references/jobType.json";

function TrainingUpdate(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateContact = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;
    // values?.contacts?.map((el) => {
    //   el.birthDate = dayjs(el.birthDate).format(dateFormat);
    // });

    await UpdateWorkerData.postContact(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getContact();
          }, 1000);
        }
      })
      .catch((error) => {
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };

  const strDataFnc = () => {
    form.setFieldsValue({
      ...(props.contactData?.length !== 0 && {
        contacts: props.contactData?.map((data) => ({
          ...data,
          // birthDate: dayjs(data.birthDate, dateFormat),
        })),
      }),
    });
  };

  useEffect(() => {
    strDataFnc();
  }, []);
  return (
    <div>
      <Form
        form={form}
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          contacts: [
            {
              lastName: null,
              firstName: null,
              birthDate: null,
              whoIs: null,
              jobType: null,
              workplace: null,
              work: null,
              profession: null,
              phone: null,
            },
          ],
        }}
      >
        <Divider className="my-1" />
        <Form.List name="contacts">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-4">
                    <Form.Item
                      {...restField}
                      name={[name, "lastName"]}
                      label={
                        <span className="text-xs text-slate-500">Овог</span>
                      }
                      className="custom-form-item"
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                      ]}
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "firstName"]}
                      label={
                        <span className="text-xs text-slate-500">Нэр</span>
                      }
                      className="custom-form-item"
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                      ]}
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "birthDate"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Төрсөн он
                        </span>
                      }
                      className="custom-form-item"
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
                      {...restField}
                      name={[name, "whoIs"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Таны хэн болох
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={familyPersons}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "jobType"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажил эрхлэлт
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={jobType}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "workplace"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажлын газар
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "work"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Албан тушаал
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "profession"]}
                      label={
                        <span className="text-xs text-slate-500">Мэргэжил</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "phone"]}
                      label={
                        <span className="text-xs text-slate-500">Утас</span>
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
                  className="!w-2/12 mt-2"
                >
                  Мөр нэмэх
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button
            htmlType="submit"
            onClick={() => {
              props.setIsUpdate(false);
            }}
            className="mr-2"
          >
            Буцах
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  updateContact(values);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            loading={loading}
          >
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TrainingUpdate;
