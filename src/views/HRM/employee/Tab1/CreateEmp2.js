import React, { useEffect } from "react";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Tabs } from "antd";
import GeneralData from "./createEmp/GeneralData";
import SystemData from "./createEmp/SystemData";
import ContactData from "./createEmp/ContactData";
import CountryServices from "../../../../services/settings/country";
import Human from "src/services/profile/human";
import { openNofi } from "src/features/comman";

function CreateEmp2(props) {
  const [form] = Form.useForm();
  const [countryData, setCountryData] = useState("");
  const [cityData, setCityData] = useState("");
  const [profileImgId, setProfileImgId] = useState(null);

  const getCountries = async () => {
    await CountryServices.get({ type: 1 })
      .then((res) => {
        console.log("getCountries", res);
        setCountryData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
  };
  const getCities = async () => {
    await CountryServices.get({ type: 2 })
      .then((res) => {
        console.log("getCities", res);
        setCityData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Ерөнхий мэдээлэл`,
      children: (
        <GeneralData
          form={form}
          countryData={countryData}
          cityData={cityData}
          profileId={profileImgId}
          setProfileImgId={setProfileImgId}
        />
      ),
    },
    {
      key: "2",
      label: `Систем`,
      children: <SystemData form={form} />,
    },
    {
      key: "3",
      label: `Холбоо барих`,
      children: <ContactData form={form} />,
    },
  ];

  useEffect(() => {
    getCountries();
    getCities();
  }, []);

  const saveHuman = async (values) => {
    values.profileId = profileImgId;
    await Human.post(values)
      .then((response) => {
        console.log("saveHuman", response);
        if (response.status === 201) {
          props.setSelectedBtn(1);
        }
      })
      .catch((error) => {
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {});
  };
  return (
    <div className="bg-white px-3 pb-3">
      <Form form={form} layout="vertical">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Form>
      <Button
        type="primary"
        className="mt-3"
        onClick={() =>
          form
            .validateFields()
            .then((values) => {
              console.log(values);
              saveHuman(values);
            })
            .catch((error) => {
              console.log(error);
            })
        }
      >
        Хадгалах
      </Button>
    </div>
  );
}

export default CreateEmp2;

