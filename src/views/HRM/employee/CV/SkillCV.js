import { Button, Divider, Input, Form, Space, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import UpdateWorkerData from "../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import CountryServices from "../../../../services/settings/country";
import { useEffect } from "react";

function SkillCV() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const [form] = Form.useForm();
  const updateSkill = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;

    await UpdateWorkerData.postSkill(values)
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
  return (
    <div>
      <span className="main-color font-semibold">А.Гадаад хэлний мэдлэг</span>
      <Divider className="my-1" />
      <div className="grid grid-cols-5 gap-x-4 gap-y-2">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">
            Гадаад хэл<span className="text-red-500"> *</span>
          </span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">
            Ерөнхий түвшин<span className="text-red-500"> *</span>
          </span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">
            Бичих чадвар<span className="text-red-500"> *</span>
          </span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">
            Сонсох чадвар<span className="text-red-500"> *</span>
          </span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">
            Ярих чадвар<span className="text-red-500"> *</span>
          </span>
          <Input placeholder="" size="small" />
        </div>
      </div>
      <div className="flex justify-end !mt-2">
        <Button size="small">Мөр нэмэх</Button>
      </div>
      <span className="main-color font-semibold">Б.Авъяас чадвар</span>
      <Divider className="my-1" />
      <div className="grid grid-cols-3 gap-x-4 gap-y-2">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">Төрөл</span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">Хиээллэсэн жил</span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">Зэрэг, цол</span>
          <Input placeholder="" size="small" />
        </div>
      </div>
      <div className="flex justify-end !mt-2">
        <Button size="small">Мөр нэмэх</Button>
      </div>
      <span className="main-color font-semibold">В. Шагналын мэдээлэл</span>
      <Divider className="my-1" />
      <div className="grid grid-cols-4 gap-x-4 gap-y-2">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">Он</span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">Талбар</span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">Шагналын нэр</span>
          <Input placeholder="" size="small" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 !mb-1">Тайлбар</span>
          <Input placeholder="" size="small" />
        </div>
      </div>
      <div className="flex justify-end !mt-2">
        <Button size="small">Мөр нэмэх</Button>
      </div>
    </div>
  );
}

export default SkillCV;

