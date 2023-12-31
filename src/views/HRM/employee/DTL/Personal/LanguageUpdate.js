import { Button, Divider, Input, Form, Space, Select } from "antd";
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import languageLevel from "../../../../../references/languageLevel.json";
import CountryServices from "../../../../../services/settings/country";

function LanguageUpdate(props) {
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState("");

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const [form] = Form.useForm();
  const updateLanguage = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;
    await UpdateWorkerData.postLanguage(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getLanguage();
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
      ...(props.languageData?.length !== 0 && {
        languages: props.languageData?.map((data) => ({
          ...data,
          // birthDate: dayjs(data.birthDate, dateFormat),
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
  useEffect(() => {
    strDataFnc();
    getCountries();
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
          languages: [
            {
              name: null,
              exam: null,
              score: null,
              speak: null,
              read: null,
              write: null,
              listen: null,
              note: null,
            },
          ],
        }}
      >
        <div className="mt-2">
          <span className="main-color font-bold">Гадаад хэлний мэдлэг</span>
        </div>
        <Divider className="my-1" />
        <Form.List name="languages">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} className="block" align="baseline">
                  <div className="grid grid-cols-3 gap-x-4">
                    <Form.Item
                      {...restField}
                      hidden
                      name={[name, "userId"]}
                      label={null}
                      className="custom-form-item"
                      initialValue={props?.selectedUserData?.id}
                    ></Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Гадаад хэл
                        </span>
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
                      name={[name, "exam"]}
                      label={
                        <span className="text-xs text-slate-500">Шалгалт</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "score"]}
                      label={
                        <span className="text-xs text-slate-500">Оноо</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "speak"]}
                      label={
                        <span className="text-xs text-slate-500">Ярих</span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={languageLevel}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "listen"]}
                      label={
                        <span className="text-xs text-slate-500">Сонсох</span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={languageLevel}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "read"]}
                      label={
                        <span className="text-xs text-slate-500">Унших</span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={languageLevel}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "write"]}
                      label={
                        <span className="text-xs text-slate-500">Бичих</span>
                      }
                      className="custom-form-item"
                    >
                      <Select
                        showSearch
                        optionFilterProp="children"
                        options={languageLevel}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "note"]}
                      label={
                        <span className="text-xs text-slate-500">Тайлбар</span>
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
                  updateLanguage(values);
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

export default LanguageUpdate;
