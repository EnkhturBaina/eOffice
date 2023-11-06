import { Button, Divider, Input, Form, Space, DatePicker } from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import { useEffect } from "react";
import dayjs from "dayjs";
import mn_MN from "antd/es/date-picker/locale/mn_MN";
const dateFormat = "YYYY-MM-DD";

function WorkUpdate(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateWork = async (values) => {
    values?.experiences?.map((el) => {
      el.endDate = dayjs(el.endDate).format(dateFormat);
      el.startDate = dayjs(el.startDate).format(dateFormat);
    });

    //  setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postWork(values)
      .then((response) => {
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getWork();
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
      ...(props.workData?.length !== 0 && {
        experiences: props.workData?.map((workdata) => ({
          ...workdata,
          startDate: dayjs(workdata.startDate, dateFormat),
          endDate: dayjs(workdata.endDate, dateFormat),
        })),
      }),
    });
  };
  useEffect(() => {
    strDataFnc();
  }, []);

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
          experiences: [
            {
              workType: null,
              company: null,
              branch: null,
              career: null,
              endDate: null,
              startDate: null,
              reason: null,
            },
          ],
        }}
      >
        <span className="main-color font-semibold">Ажил эрхэлсэн байдал</span>
        <Divider className="my-1" />
        <Form.List name="experiences">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-4">
                    <Form.Item
                      {...restField}
                      name={[name, "workType"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ямар ажил хийж байсан
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "company"]}
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
                      name={[name, "branch"]}
                      label={
                        <span className="text-xs text-slate-500">Салбар</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "career"]}
                      label={
                        <span className="text-xs text-slate-500">Карьер</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "startDate"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажилд орсон огноо
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
                      {...restField}
                      name={[name, "endDate"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажилаас гарсан огноо
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
                      {...restField}
                      name={[name, "reason"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажилаас гарсан шалтгаан
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
                  updateWork(values);
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

export default WorkUpdate;
