import {
  Button,
  Divider,
  Input,
  Form,
  Space,
  Select,
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
import CountryServices from "../../../../../services/settings/country";

function TrainingUpdate(props) {
  console.log("props", props);
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState("");
  const [cityData, setCityData] = useState("");

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateTraining = async (values) => {
    console.log("values", values);
    console.log("props", props.selectedUserData);
    setLoading(true);
    values.userId = props?.selectedUserData?.id;
    await UpdateWorkerData.postTraining(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getTraining();
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
      ...(props.trainingData?.length !== 0 && {
        trainings: props.trainingData?.map((data) => ({
          ...data,
          startDate: dayjs(data.startDate, dateFormat),
          endDate: dayjs(data.endDate, dateFormat),
        })),
      }),
    });
  };

  const getCountries = async () => {
    await CountryServices.get({ type: 1 })
      .then((res) => {
        setCountryData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
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
    strDataFnc();
    getCountries();
    getCities();
  }, []);

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onSearch = (value) => {
    console.log("search:", value);
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
          trainings: [
            {
              name: null,
              course: null,
              type: null,
              organiser: null,
              countryId: null,
              cityId: null,
              serNumber: null,
              startDate: null,
              endDate: null,
            },
          ],
        }}
      >
        <div className="mt-2">
          <span className="main-color font-bold">
            Сургалтанд хамрагдсан байдал
          </span>
        </div>
        <Divider className="my-1" />
        <Form.List name="trainings">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-4">
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Сургалтын нэр
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "course"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Сургалтын чиглэл
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
                          Сургалтын төрөл
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "organiser"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Зохион байгуулагч
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "countryId"]}
                      label={
                        <span className="text-xs text-slate-500">Улс</span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={countryData}
                        onSearch={onSearch}
                        filterOption={filterOption}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "cityId"]}
                      label={
                        <span className="text-xs text-slate-500">Аймаг</span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={cityData}
                        onSearch={onSearch}
                        filterOption={filterOption}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "serNumber"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Үнэмлэх №
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
                      name={[name, "startDate"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Эхэлсэн огноо
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
                          Дууссан огноо
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
                  updateTraining(values);
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
