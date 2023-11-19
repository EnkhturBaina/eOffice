import { Button, Divider, Input, Form, Select, InputNumber } from "antd";
import React, { useState } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import socialsType from "../../../../../references/socialsType.json";
const { TextArea } = Input;

function SocialWelfareUpdate(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateSocials = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postSocials(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getSocials();
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

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <span className="main-color font-semibold">Нийгмийн халамж</span>
        <Divider className="my-1" />
        <div className="grid grid-cols-3 gap-x-4">
          <Form.Item
            name={"unit"}
            label={
              <span className="text-xs text-slate-500">Мөнгөний төрөл</span>
            }
            className="custom-form-item"
          >
            <Select
              showSearch
              optionFilterProp="children"
              options={socialsType}
            />
          </Form.Item>
          <Form.Item
            name={"number"}
            label={<span className="text-xs text-slate-500">Тушаалын №</span>}
            className="custom-form-item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"type"}
            label={
              <span className="text-xs text-slate-500">Халамжийн төрөл</span>
            }
            className="custom-form-item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"reason"}
            label={
              <span className="text-xs text-slate-500">
                Олгосон шалтгаан тайлбар
              </span>
            }
            className="custom-form-item"
          >
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name={"money"}
            label={<span className="text-xs text-slate-500">Мөнгөн дүн</span>}
            className="custom-form-item"
          >
            <InputNumber
              className="hide-input-arrow"
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
        </div>
        <Form.Item className="mt-2">
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
                  updateSocials(values);
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

export default SocialWelfareUpdate;
