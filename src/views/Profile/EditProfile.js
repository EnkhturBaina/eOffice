import React from "react";
import { CButton, CForm, CFormInput, CFormTextarea } from "@coreui/react";
import { Input, Form, Space, Button } from "antd";

function EditProfile(props) {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <div>
      <CForm>
        <p className="main-color font-bold">Хувийн мэдээлэл</p>
        <div className="border-t border-slate-300 !my-2"></div>
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item>
            <div className="flex justify-start gap-x-20">
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Ургийн овог</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">
                      Эцэг /эх/-ийн нэр
                    </span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
            </div>
            <div className="flex justify-start gap-x-20">
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Өөрийн нэр</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">
                      Регистрийн дугаар
                    </span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
            </div>
            <div className="flex justify-start gap-x-20">
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Яс үндэс</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Иргэншил</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
            </div>
            <div className="flex justify-start gap-x-20">
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">
                      Албан байгууллага
                    </span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Албан тушаал</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
            </div>
            <p className="main-color font-bold mt-3">Холбогдох мэдээлэл</p>
            <div className="border-t border-slate-300 !my-2"></div>
            <div className="flex justify-start gap-x-20">
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Гар утас</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Гэрийн утас</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
            </div>
            <div className="flex justify-start gap-x-20">
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Имэйл хаяг</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Facebook</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
            </div>
            <div className="flex justify-start gap-x-20">
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">Linked In</span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
              <div className="basis-1/6">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">
                      Оршин суудаг улс
                    </span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input size="small" />
                </Form.Item>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="basis-5/12">
                <Form.Item
                  name="family_name"
                  label={
                    <span className="text-xs text-slate-500">
                      Оршин суудаг хот
                    </span>
                  }
                  className="custom-form-item"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span className="text-red-500" style={{ fontSize: 10 }}>
                          Шаардлагатай
                        </span>
                      ),
                    },
                  ]}
                >
                  <TextArea
                    rows={2}
                    placeholder="maxLength is 6"
                    maxLength={6}
                  />
                </Form.Item>
              </div>
            </div>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <CButton
          color="dark"
          variant="ghost"
          className={`!mt-5 profile-menu-button main-bg-color text-white`}
          onClick={() => props.setIsEdit(false)}
          size="sm"
        >
          Засах
        </CButton>
        <CButton
          color="dark"
          variant="outline"
          className={`!mt-5 !ml-3 text-black disable-button-hover`}
          onClick={() => props.setIsEdit(false)}
          size="sm"
        >
          Буцах
        </CButton>
      </CForm>
    </div>
  );
}

export default EditProfile;

