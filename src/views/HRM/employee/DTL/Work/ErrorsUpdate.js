import { Button, Divider, Input, Form, Select } from "antd";
import React, { useState } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import mistakesType from "../../../../../references/mistakesType.json";
const { TextArea } = Input;

function ErrorsUpdate(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateMistakes = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postMistakes(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getMistakes();
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
        <span className="main-color font-semibold">Алдаа дутагдал</span>
        <Divider className="my-1" />
        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            name={"type"}
            label={<span className="text-xs text-slate-500">Төрөл</span>}
            className="custom-form-item"
          >
            <Select
              showSearch
              optionFilterProp="children"
              options={mistakesType}
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
            name={"mistakes"}
            label={
              <span className="text-xs text-slate-500">Алдаа дутагдал</span>
            }
            className="custom-form-item"
          >
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name={"reason"}
            label={
              <span className="text-xs text-slate-500">Шалтгаан тайлбар</span>
            }
            className="custom-form-item"
          >
            <TextArea rows={3} />
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
                  updateMistakes(values);
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

export default ErrorsUpdate;
