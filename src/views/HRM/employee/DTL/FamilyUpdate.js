import { Button, Divider, Input, Form, Space, DatePicker, Select } from "antd";
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import dayjs from "dayjs";
import mn_MN from "antd/es/date-picker/locale/mn_MN";
const dateFormat = "YYYY-MM-DD";
import familyPersons from "../../../../references/familyPersons.json";
import CountryServices from "../../../../services/settings/country";

function FamilyUpdate(props) {
  const [loading, setLoading] = useState(false);
  const [cityData, setCityData] = useState("");

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateFamily = async (values) => {
    values?.families?.map((el) => {
      el.birthDate = dayjs(el.birthDate).format(dateFormat);
    });

    //  setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postFamily(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getFamily();
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
      families: props.familyData?.map((data) => ({
        ...data,
        birthDate: dayjs(data.birthDate, dateFormat),
      })),
    });
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const getCities = async () => {
    await CountryServices.get({ type: 2 })
      .then((res) => {
        setCityData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
  };

  useEffect(() => {
    getCities();
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
          families: [
            {
              whoIs: null,
              lName: null,
              fName: null,
              jobType: null,
              desc: null,
              jobName: null,
              rank: null,
              occupation: null,
              birthDate: null,
              birthCityId: null,
              liveCityId: null,
            },
          ],
        }}
      >
        <span className="main-color font-bold">
          Гэр бүлийн гишүүдийн мэдээлэл
        </span>
        <Divider className="my-1" />
        <Form.List name="families">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-1">
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
                      name={[name, "lName"]}
                      label={
                        <span className="text-xs text-slate-500">Овог</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "fName"]}
                      label={
                        <span className="text-xs text-slate-500">Нэр</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "jobType"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажлын төрөл
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "desc"]}
                      label={
                        <span className="text-xs text-slate-500">Тайлбар</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "jobName"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажлын нэр
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "rank"]}
                      label={
                        <span className="text-xs text-slate-500">Зэрэглэл</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "occupation"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Ажил мэргэжил
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "birthDate"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Төрсөн он сар өдөр
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
                      name={[name, "birthCityId"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Төрсөн аймаг хот
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={cityData}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "liveCityId"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Амьдарч байгаа аймаг хот
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={cityData}
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
                  updateFamily(values);
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

export default FamilyUpdate;
