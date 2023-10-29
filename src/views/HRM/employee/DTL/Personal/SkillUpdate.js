import { Button, Divider, Input, Form, Space, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import CountryServices from "../../../../../services/settings/country";
import { useEffect } from "react";

function SkillUpdate(props) {
  const [countryData, setCountryData] = useState("");
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const [form] = Form.useForm();
  const updateSkill = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postAptitude(values)
      .then((response) => {
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getSkill();
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
      ...(props.aptData?.length !== 0 && {
        aptitudes: props.aptData,
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
          aptitudes: [
            {
              sName: null,
              sYear: null,
              level: null,
              userId: props?.selectedUserData?.id,
            },
          ],
        }}
      >
        <span className="main-color font-semibold">Урлага спортын авьяас</span>
        <Divider className="my-1" />
        <Form.List name="aptitudes">
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
                      name={[name, "sName"]}
                      label={
                        <span className="text-xs text-slate-500">Төрөл</span>
                      }
                      className="custom-form-item"
                    >
                      <Input size="small" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "sYear"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Хичэллэсэн жил
                        </span>
                      }
                      className="custom-form-item"
                    >
                      <InputNumber
                        min={0}
                        className="hide-input-arrow"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "level"]}
                      label={
                        <span className="text-xs text-slate-500">
                          Зэрэг цол
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
                  updateSkill(values);
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

export default SkillUpdate;
