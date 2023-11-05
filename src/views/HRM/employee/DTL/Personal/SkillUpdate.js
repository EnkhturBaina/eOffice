import { Button, Divider, Form, Space, Segmented } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import techType from "../../../../../references/techType.json";

function SkillUpdate(props) {
  const [loading, setLoading] = useState(false);
  const [itemData, setItemData] = useState([]);

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateTech = async (values) => {
    setLoading(true);
    await UpdateWorkerData.postTechItems(itemData)
      .then((response) => {
        // console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getTechItems();
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
    let array = [];
    props.skillData?.map((data, i) =>
      array.push({
        userId: props?.selectedUserData?.id,
        itechId: data.id,
        value: 2,
      })
    );
    setItemData(array);
  };

  useEffect(() => {
    strDataFnc();
  }, []);

  return (
    <div>
      <Form
        form={form}
        name="itechItems"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <div className="mt-2">
          <span className="main-color font-bold">Хувийн ур чадвар</span>
        </div>
        <Divider className="my-1" />
        {props.skillData
          ?.filter((obj) => obj.itechType === 2)
          ?.map((el, index) => {
            return (
              <Space key={index} className="block" align="baseline">
                <div className="grid grid-cols-3 gap-x-4">
                  <Form.Item
                    name={el.id}
                    label={
                      <span className="text-xs text-slate-500">{el.name}</span>
                    }
                    className="custom-form-item"
                  >
                    <Segmented
                      options={techType}
                      onChange={(e) => {
                        const newState = itemData.map((obj) => {
                          if (obj.itechId === parseInt(el.id)) {
                            return { ...obj, value: e };
                          }
                          return obj;
                        });

                        setItemData(newState);
                      }}
                    />
                  </Form.Item>
                </div>
              </Space>
            );
          })}
        <div className="mt-2">
          <span className="main-color font-bold">Харилцааны ур чадвар</span>
        </div>
        <Divider className="my-1" />
        {props.skillData
          ?.filter((obj) => obj.itechType === 3)
          ?.map((el, index) => {
            return (
              <Space key={index} className="block" align="baseline">
                <div className="grid grid-cols-3 gap-x-4">
                  <Form.Item
                    name={el.id}
                    label={
                      <span className="text-xs text-slate-500">{el.name}</span>
                    }
                    className="custom-form-item"
                  >
                    <Segmented
                      options={techType}
                      onChange={(e) => {
                        const newState = itemData.map((obj) => {
                          if (obj.itechId === parseInt(el.id)) {
                            return { ...obj, value: e };
                          }
                          return obj;
                        });

                        setItemData(newState);
                      }}
                    />
                  </Form.Item>
                </div>
              </Space>
            );
          })}
        <div className="mt-2">
          <span className="main-color font-bold">Бүлгээр ажиллах чадвар</span>
        </div>
        <Divider className="my-1" />
        {props.skillData
          ?.filter((obj) => obj.itechType === 4)
          ?.map((el, index) => {
            return (
              <Space key={index} className="block" align="baseline">
                <div className="grid grid-cols-3 gap-x-4">
                  <Form.Item
                    name={el.id}
                    label={
                      <span className="text-xs text-slate-500">{el.name}</span>
                    }
                    className="custom-form-item"
                  >
                    <Segmented
                      options={techType}
                      onChange={(e) => {
                        const newState = itemData.map((obj) => {
                          if (obj.itechId === parseInt(el.id)) {
                            return { ...obj, value: e };
                          }
                          return obj;
                        });

                        setItemData(newState);
                      }}
                    />
                  </Form.Item>
                </div>
              </Space>
            );
          })}
        <div className="mt-2">
          <span className="main-color font-bold">Бусад</span>
        </div>
        <Divider className="my-1" />
        {props.skillData
          ?.filter((obj) => obj.itechType === 5)
          ?.map((el, index) => {
            return (
              <Space key={index} className="block" align="baseline">
                <div className="grid grid-cols-3 gap-x-4">
                  <Form.Item
                    name={el.id}
                    label={
                      <span className="text-xs text-slate-500">{el.name}</span>
                    }
                    className="custom-form-item"
                  >
                    <Segmented
                      options={techType}
                      onChange={(e) => {
                        const newState = itemData.map((obj) => {
                          if (obj.itechId === parseInt(el.id)) {
                            return { ...obj, value: e };
                          }
                          return obj;
                        });

                        setItemData(newState);
                      }}
                    />
                  </Form.Item>
                </div>
              </Space>
            );
          })}
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
                  updateTech(values);
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
