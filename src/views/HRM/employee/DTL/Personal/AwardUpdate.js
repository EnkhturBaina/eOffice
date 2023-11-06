import {
  Button,
  Divider,
  Input,
  Form,
  Space,
  InputNumber,
  DatePicker,
} from "antd";
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import mn_MN from "antd/es/date-picker/locale/mn_MN";
import dayjs from "dayjs";
const dateFormat = "YYYY-MM-DD";

function AwardUpdate(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateAward = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postAward(values)
      .then((response) => {
        // console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getAward();
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
      ...(props.awardData?.length !== 0 && {
        awards: props.awardData?.map((data) => ({
          ...data,
          date: dayjs(data.date, dateFormat),
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
          awards: [
            {
              awardName: null,
              type: null,
              sNumber: null,
              sName: null,
              bonus: null,
              reason: null,
              date: null,
            },
          ],
        }}
      >
        <div className="mt-2">
          <span className="main-color font-bold">Шагнал урамшуулал</span>
        </div>
        <Divider className="my-1" />
        <Form.List name="awards">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-4">
                    <Form.Item
                      {...restField}
                      name={[name, "awardName"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Шагналын нэр
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "type"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Шагналын төрөл
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "sNumber"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Шийдвэрийн дугаар
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <InputNumber
                        className="hide-input-arrow"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "sName"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Шийдвэрийн нэр
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "bonus"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Шагнасан байгууллага
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "reason"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Шагнагдсан шалтгаан
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "date"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Шагнуулсан огноо
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
                  updateAward(values);
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

export default AwardUpdate;
