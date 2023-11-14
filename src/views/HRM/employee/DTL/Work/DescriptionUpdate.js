import { Button, Divider, Input, Form, Upload } from "antd";
import React, { useState, useEffect } from "react";
import { FileAddOutlined, EyeOutlined } from "@ant-design/icons";
import { decryptData, openNofi } from "src/features/comman";
import ReferenceService from "../../../../../services/upload/ReferenceService";
import updateWorkerData from "src/services/worker/updateWorkerData";
const { TextArea } = Input;

function DescriptionUpdate(props) {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  let tokens = decryptData("tokens");
  const headers = {
    Authorization: `Bearer ${tokens.accessToken}`,
    "x-api-key": `${process.env.REACT_APP_API_KEY}`,
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
    form.setFieldValue("file", info?.fileList[0]?.response?.response?.id);
    setFileList(info.fileList);
  };

  const [form] = Form.useForm();

  const updateDescription = async (values) => {
    setLoading(true);
    values.userId = props?.selectedUserData?.id;
    values.type = 2;

    await updateWorkerData
      .postDescription(values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 201) {
          setTimeout(() => {
            //1sec ===> Устгаад нэмж байгаа учраас ШИНЭ датагаа авж амжхигүй байх шиг байгаан
            props.getFnc();
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
    form.setFieldsValue(props.scheduleData);
  };

  useEffect(() => {
    strDataFnc();
  }, []);

  const getFile = async (file_id) => {
    return await ReferenceService.getImage(file_id).then((response) => {
      // console.log("RES", response);
      const file = new Blob([response.data], {
        type: response.data.type,
      });
      const fileUrl = URL.createObjectURL(file);
      return fileUrl;
    });
  };

  const onPreview = async (fileId) => {
    await getFile(fileId).then((response) => {
      window.open(response);
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
        <Divider className="my-1" />
        <div className="grid grid-cols-1 gap-x-4">
          <Form.Item
            name={"text"}
            label={<span className="text-xs text-slate-500">Тодорхойлолт</span>}
            className="custom-form-item"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <TextArea rows={3} />
          </Form.Item>
          <Form.Item label="" className="mt-2" name="file">
            <Upload
              maxCount={1}
              headers={headers}
              action={`${process.env.REACT_APP_DEV_URL}local-files/fileUpload`}
              fileList={fileList}
              onChange={handleChangUpload}
              onRemove={handleRemove}
              beforeUpload={beforeUpload}
              name="file"
            >
              <Button icon={<FileAddOutlined />}>Файл сонгох</Button>
            </Upload>
            <Button
              type="link"
              onClick={() => {
                onPreview(form.getFieldValue("file"));
              }}
              size="small"
              className="flex items-center"
            >
              <EyeOutlined />
              Харах
            </Button>
          </Form.Item>
        </div>
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
                  updateDescription(values);
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

export default DescriptionUpdate;
