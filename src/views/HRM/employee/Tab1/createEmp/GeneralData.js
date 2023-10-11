import React, { useEffect } from "react";
import { useState } from "react";
import { Input, Select, Button, Form, Upload } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import avatarEmpty from "../../../../../assets/avatarEmpty.png";
import CountryServices from "../../../../../services/settings/country";
import ReferenceService from "../../../../../services/upload/ReferenceService";
import genderRef from "../../../../../references/gender.json";
import yesNoRef from "../../../../../references/yesNo.json";
import { decryptData, openNofi } from "src/features/comman";

function GeneralData(props) {
  // human-resource
  const [fileList, setFileList] = useState([]);
  const [districtData, setDistrictData] = useState("");
  let tokens = decryptData("tokens");

  const headers = {
    Authorization: `Bearer ${tokens.accessToken}`,
    "x-api-key": `${process.env.REACT_APP_API_KEY}`,
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const getDistricts = async (parent_id) => {
    await CountryServices.get({ parentId: parent_id })
      .then((res) => {
        console.log("getCities", res);
        setDistrictData(res.data.response.data);
      })
      .catch((c) => {})
      .finally(() => {});
  };
  const beforeUpload = () => {
    //Зураг upload хийхээс өмнө өмнөх зургийг устгах
    console.log("fileList", fileList);
    if (fileList.length !== 0) {
      handleRemove(fileList[0]);
    }
  };
  const handleRemove = async (info) => {
    //Зураг устгах
    setFileList(undefined);
    if (info.response?.response?.id) {
      const id = info.response?.response?.id;
      await ReferenceService.removeUploadImage(id).then((response) => {
        if (response.success) {
          openNofi("success", "Амжиллтай", "Устгагдав");
        }
      });
    }
  };

  const handleChangUpload = (info) => {
    console.log("info", info);
    props.setProfileImgId(info?.fileList[0]?.response?.response?.id);
    setFileList(info.fileList);
  };

  return (
    <div>
      <div className="flex text-center">
        <div className="mr-8">
          {fileList == "" ? <img src={avatarEmpty} className="mb-3" /> : null}
          <Form.Item label="" valuePropName="fileList">
            <Upload
              maxCount={1}
              headers={headers}
              action={`${process.env.REACT_APP_DEV_URL}local-files/fileUpload`}
              fileList={fileList}
              onChange={handleChangUpload}
              onRemove={handleRemove}
              beforeUpload={beforeUpload}
              listType="picture-circle"
              className="custom-upload"
              name="file"
            >
              Зураг сонгох
              <FileAddOutlined
                style={{
                  fontSize: 20,
                  color: "#6c757d",
                  marginLeft: 5,
                }}
              />
            </Upload>
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-100">
          <Form.Item
            name="familyName"
            label={<span className="text-xs text-slate-500">Ургийн овог</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mCityId"
            label={<span className="text-xs text-slate-500">Төрсөн газар</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select
              options={props.cityData}
              showSearch
              optionFilterProp="children"
              onSearch={onSearch}
              filterOption={filterOption}
              onChange={(e) => {
                getDistricts(e);
              }}
            />
          </Form.Item>
          <Form.Item
            name="firstName"
            label={
              <span className="text-xs text-slate-500">Эцэг /эх/-ийн нэр</span>
            }
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mDistrictId"
            label={<span className="text-xs text-slate-500">Сум, дүүрэг</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select
              options={districtData}
              showSearch
              optionFilterProp="children"
              onSearch={onSearch}
              filterOption={filterOption}
              onChange={(e) => {
                console.log("e", e);
              }}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            label={<span className="text-xs text-slate-500">Ажилтны нэр</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mCommittee"
            label={
              <span className="text-xs text-slate-500">Баг хороо, газар</span>
            }
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="regNumber"
            label={
              <span className="text-xs text-slate-500">Регистрийн дугаар</span>
            }
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ndNumber"
            label={
              <span className="text-xs text-slate-500">
                Нийгмийн даатгалын дугаар
              </span>
            }
            className="custom-form-item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nation"
            label={<span className="text-xs text-slate-500">Үндэс угсаа</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="emdNumber"
            label={
              <span className="text-xs text-slate-500">
                Эрүүл мэндийн даатгалын дугаар
              </span>
            }
            className="custom-form-item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mcountryId"
            label={<span className="text-xs text-slate-500">Иргэншил</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              options={props.countryData}
              onSearch={onSearch}
              filterOption={filterOption}
            />
          </Form.Item>
          <Form.Item
            name="driveNumber"
            label={
              <span className="text-xs text-slate-500">
                Жолооны үнэмлэхний дугаар
              </span>
            }
            className="custom-form-item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label={<span className="text-xs text-slate-500">Хүйс</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select options={genderRef} />
          </Form.Item>
          <div>
            <div className="grid grid-cols-2 gap-2">
              <Form.Item
                name="disabled"
                label={
                  <span className="text-xs text-slate-500">
                    Хөгжлийн бэрхшээлтэй эсэх
                  </span>
                }
                className="custom-form-item"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Select options={yesNoRef} />
              </Form.Item>
              <Form.Item
                name="isMarried"
                label={
                  <span className="text-xs text-slate-500">Гэрлэсэн эсэх</span>
                }
                className="custom-form-item"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Select options={yesNoRef} />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralData;
