import { Button, Divider, Input, Form, DatePicker } from "antd";
import React, { useState } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
const { TextArea } = Input;
import mn_MN from "antd/es/date-picker/locale/mn_MN";
const dateFormat = "YYYY-MM-DD";

function VacationUpdate(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateVacation = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postVacation(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getVacation();
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
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <span className="main-color font-semibold">Ээлжийн амралт</span>
        <Divider className="my-1" />
        <div className="grid grid-cols-2 gap-x-4">
          <Form.Item
            name={"number"}
            label={<span className="text-xs text-slate-500">Тушаалын №</span>}
            className="custom-form-item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"startDate"}
            label={<span className="text-xs text-slate-500">Эхэлсэн</span>}
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
            name={"endDate"}
            label={<span className="text-xs text-slate-500">Дууссан</span>}
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
            name={"comment"}
            label={<span className="text-xs text-slate-500">Тайлбар</span>}
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
                  updateVacation(values);
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

export default VacationUpdate;
