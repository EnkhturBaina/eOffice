import {
  Button,
  Divider,
  Input,
  Form,
  Space,
  Select,
  Checkbox,
  DatePicker,
} from "antd";
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import doctorType from "../../../../../references/doctorType.json";
import dayjs from "dayjs";
import mn_MN from "antd/es/date-picker/locale/mn_MN";
const dateFormat = "YYYY-MM-DD";
const { TextArea } = Input;

function HealthUpdate(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateDoctor = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postDoctor(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getDoctor();
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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const strDataFnc = () => {
    form.setFieldsValue({
      ...(props.doctorData?.length !== 0 && {
        doctors: props.doctorData?.map((data) => ({
          ...data,
          date: dayjs(data.date, dateFormat),
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
          doctors: [
            {
              info: null,
              type: null,
              date: null,
              isDoctor: null,
            },
          ],
        }}
      >
        <span className="main-color font-bold">Эрүүл мэндийн үзлэг</span>
        <Divider className="my-1" />
        <Form.List name="doctors">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-1 gap-x-4">
                    <div className="grid grid-cols-2 gap-x-4">
                      <Form.Item
                        {...restField}
                        name={[name, "type"]}
                        label={
                          <span className="text-xs text-slate-500">
                            Үзлэгийн төрөл
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
                          showSearch
                          optionFilterProp="children"
                          options={doctorType}
                        />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "date"]}
                        label={
                          <span className="text-xs text-slate-500">
                            Үзлэгт орсон огноо
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
                        <DatePicker
                          onChange={onChange}
                          className="custom-datepicker"
                          format={dateFormat}
                          locale={mn_MN}
                        />
                      </Form.Item>
                    </div>

                    <Form.Item
                      {...restField}
                      name={[name, "info"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Бусад тайлбар
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <TextArea rows={3} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "isDoctor"]}
                      label={null}
                      className="custom-form-item"
                      valuePropName="checked"
                    >
                      <Checkbox onChange={onChangeCheck}>
                        <span className="text-xs text-slate-500">
                          Эмчлүүлэх шаардлагтай эсэх
                        </span>
                      </Checkbox>
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
                  updateDoctor(values);
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

export default HealthUpdate;
