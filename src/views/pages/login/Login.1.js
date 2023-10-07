import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "src/context/AuthContext";
import login_logo from "../../../assets/login_logo.png";
import { Input, Checkbox, Button, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import CIcon from "@coreui/icons-react";
import { cilArrowRight } from "@coreui/icons";
import fb from "../../../assets/images/login/fb.png";
import google from "../../../assets/images/login/google.png";
import linkedin from "../../../assets/images/login/linkedin.png";
import { useState } from "react";
import { openNofi } from "src/features/comman";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm] = Form.useForm();
  const { login, user, remember_me } = useContext(AuthContext);
  // newtertsn ued login ruu oroh ued butsaagad daӨshboardru ywulah
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="bg-white min-vh-100 d-flex flex-column !p-10">
      <img align="start" src={login_logo} width={160} height={72} />
      <Form
        form={loginForm}
        initialValues={{
          email: remember_me,
          remember_me: !!remember_me,
        }}
      >
        <div className="flex flex-col items-center">
          <span className="main-color text-2xl font-semibold text-center !p-2 !mx-10 !my-6">
            Байгууллагын нөөцийн удирдлагын системд тавтай морил
          </span>
          <span className="text-xl font-semibold text-center !p-2 !mx-5 !my-4 !mt-1">
            Нэвтрэх
          </span>

          <div className="flex mt-1 flex-col w-1/5">
            <div className="basis-1/5">
              <span className="text-xs mt-1">Имэйл</span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Имэйл заавал",
                  },
                  {
                    type: "email",
                    message: "Имэйл хэлбэр буруу",
                  },
                ]}
                name="email"
              >
                <Input
                  type="email"
                  placeholder="Имэйл"
                  className="mt-1"
                  size="large"
                />
              </Form.Item>
            </div>
            <div className="basis-1/5 !mt-2">
              <span className="text-xs mt-1">Нууц үг</span>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Нууц үг заавал",
                  },
                ]}
                name="password"
              >
                <Input.Password
                  placeholder="*************"
                  className="mt-1"
                  size="large"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-row justify-between w-1/5 my-2">
            <Form.Item noStyle name="remember_me" valuePropName="checked">
              <Checkbox>Намайг сана</Checkbox>
            </Form.Item>
            <div>
              <span className="text-xs main-color cursor-pointer">
                Нууц үг мартсан ?
              </span>
            </div>
          </div>
          <Button
            type="primary"
            className="w-1/5 flex items-center justify-center"
            size="large"
            loading={isLoading}
            onClick={() => {
              loginForm
                .validateFields()
                .then(async (values) => {
                  setIsLoading(true);
                  const data = await login(values);
                  console.log("data", data);
                })
                .catch((error) => {
                  setIsLoading(false);
                  error.errorFields?.map((err) => {
                    openNofi("error", "Алдаа", err.errors[0]);
                  });
                });
            }}
          >
            <span>Нэвтрэх</span>
            <CIcon icon={cilArrowRight} size="lg" className="ml-2" />
          </Button>
          <div className="flex flex-row justify-end w-1/5 my-3 items-center">
            <span className="text-xs">Өөр бүртгэл байхгүй ?</span>
            <Link
              to="/register"
              className="text-xs main-color cursor-pointer ml-2"
            >
              Бүртгүүлэх
            </Link>
          </div>
          <div className="flex flex-row justify-evenly w-1/5 my-4 items-center">
            <div
              className="border rounded items-center flex justify-center cursor-pointer"
              style={{ width: 50, height: 50 }}
            >
              <img src={fb} width={30} height={30} />
            </div>
            <div
              className="border rounded items-center flex justify-center cursor-pointer"
              style={{ width: 50, height: 50 }}
            >
              <img src={google} width={30} height={30} />
            </div>
            <div
              className="border rounded items-center flex justify-center cursor-pointer"
              style={{ width: 50, height: 50 }}
            >
              <img src={linkedin} width={30} height={30} />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
