import { Button, Divider, Input, Modal, Form, Space } from 'antd';
import React from 'react';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';

function CreateCompany() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
   };
   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };

   const onFinish = (values) => {
      console.log('Received values of form:', values);
   };
   return (
      <div>
         <div className="flex flex-row items-center !px-10 justify-end">
            <div className="flex justify-end">
               <Button type="primary" className="flex items-center" size="middle" onClick={showModal}>
                  <span className="text-sm">Компани бүртгэх</span>
                  <PlusCircleOutlined />
               </Button>
            </div>
            <Modal
               title={<span className="main-color">Компани бүртгэх</span>}
               open={isModalOpen}
               onOk={handleOk}
               onCancel={handleCancel}
               cancelText="Хаах"
               okText="Бүртгэх"
               className="modal-with-count"
               width={1000}
            >
               <div>
                  <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" layout="vertical">
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <span className="main-color font-semibold">А.Ерөнхий боловсрол</span>
                           <Divider className="my-1" />
                           <div className="grid grid-cols-4 gap-4">
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Компани</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">УБД</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">РД</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Ө/хэлбэр</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                           </div>
                        </div>
                        <div>
                           <span className="main-color font-semibold">Б.Гүйцэтгэх удирдлага</span>
                           <Divider className="my-1" />
                           <div className="grid grid-cols-3 gap-4">
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Нэр</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Албан тушаал</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Утас</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                           </div>
                        </div>
                     </div>
                     <span className="main-color font-semibold">В.Төлөөлөн удирдах зөвлөл</span>
                     <Divider className="my-1" />
                     <Form.List name="emergency">
                        {(fields, { add, remove }) => (
                           <>
                              {fields.map(({ key, name, ...restField }) => (
                                 <Space
                                    key={key}
                                    align="center"
                                    className="grid grid-cols-4 gap-x-4 gap-y-2 items-center"
                                 >
                                    <Form.Item
                                       {...restField}
                                       name={[name, 'who_is']}
                                       label={<span className="text-xs text-slate-500">Нэр</span>}
                                       rules={[
                                          {
                                             required: true,
                                             message: (
                                                <span className="text-red-500" style={{ fontSize: 10 }}>
                                                   Шаардлагатай
                                                </span>
                                             )
                                          }
                                       ]}
                                       className="custom-form-item"
                                    >
                                       <Input placeholder="" size="small" />
                                    </Form.Item>
                                    <Form.Item
                                       {...restField}
                                       name={[name, 'last_name']}
                                       label={<span className="text-xs text-slate-500">Албан тушаал</span>}
                                       rules={[
                                          {
                                             required: true,
                                             message: (
                                                <span className="text-red-500" style={{ fontSize: 10 }}>
                                                   Шаардлагатай
                                                </span>
                                             )
                                          }
                                       ]}
                                       className="custom-form-item"
                                    >
                                       <Input placeholder="" size="small" />
                                    </Form.Item>
                                    <Form.Item
                                       {...restField}
                                       name={[name, 'first_name']}
                                       label={<span className="text-xs text-slate-500">Утас</span>}
                                       rules={[
                                          {
                                             required: true,
                                             message: (
                                                <span className="text-red-500" style={{ fontSize: 10 }}>
                                                   Шаардлагатай
                                                </span>
                                             )
                                          }
                                       ]}
                                       className="custom-form-item"
                                    >
                                       <Input placeholder="" size="small" />
                                    </Form.Item>
                                    <DeleteOutlined
                                       onClick={() => remove(name)}
                                       className="text-xl text-rose-500 !px-2.5 leading-none cursor-pointer"
                                    />
                                 </Space>
                              ))}
                              <Form.Item className="text-right">
                                 <Button type="dashed" onClick={() => add()} block className="!w-2/12">
                                    Мөр нэмэх
                                 </Button>
                              </Form.Item>
                           </>
                        )}
                     </Form.List>
                     <span className="main-color font-semibold">Г.Хувьцаа эзэмшигчид</span>
                     <Divider className="my-1" />
                     <Form.List name="emergency2">
                        {(fields, { add, remove }) => (
                           <>
                              {fields.map(({ key, name, ...restField }) => (
                                 <Space
                                    key={key}
                                    align="center"
                                    className="grid grid-cols-4 gap-x-4 gap-y-2 items-center"
                                 >
                                    <Form.Item
                                       {...restField}
                                       name={[name, 'who_is']}
                                       label={<span className="text-xs text-slate-500">Овог</span>}
                                       rules={[
                                          {
                                             required: true,
                                             message: (
                                                <span className="text-red-500" style={{ fontSize: 10 }}>
                                                   Шаардлагатай
                                                </span>
                                             )
                                          }
                                       ]}
                                       className="custom-form-item"
                                    >
                                       <Input placeholder="" size="small" />
                                    </Form.Item>
                                    <Form.Item
                                       {...restField}
                                       name={[name, 'last_name']}
                                       label={<span className="text-xs text-slate-500">Нэр</span>}
                                       rules={[
                                          {
                                             required: true,
                                             message: (
                                                <span className="text-red-500" style={{ fontSize: 10 }}>
                                                   Шаардлагатай
                                                </span>
                                             )
                                          }
                                       ]}
                                       className="custom-form-item"
                                    >
                                       <Input placeholder="" size="small" />
                                    </Form.Item>
                                    <Form.Item
                                       {...restField}
                                       name={[name, 'first_name']}
                                       label={<span className="text-xs text-slate-500">Хувьцааны хэмжээ</span>}
                                       rules={[
                                          {
                                             required: true,
                                             message: (
                                                <span className="text-red-500" style={{ fontSize: 10 }}>
                                                   Шаардлагатай
                                                </span>
                                             )
                                          }
                                       ]}
                                       className="custom-form-item"
                                    >
                                       <Input placeholder="" size="small" />
                                    </Form.Item>
                                    <DeleteOutlined
                                       onClick={() => remove(name)}
                                       className="text-xl text-rose-500 !px-2.5 leading-none cursor-pointer"
                                    />
                                 </Space>
                              ))}
                              <Form.Item className="text-right">
                                 <Button type="dashed" onClick={() => add()} block className="!w-2/12">
                                    Мөр нэмэх
                                 </Button>
                              </Form.Item>
                           </>
                        )}
                     </Form.List>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <span className="main-color font-semibold">Д.Холбоо барих</span>
                           <Divider className="my-1" />
                           <div className="grid grid-cols-3 gap-4">
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Утас</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Имэйл</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Вэбсайт</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                           </div>
                        </div>
                        <div>
                           <span className="main-color font-semibold">Е.Хаяг</span>
                           <Divider className="my-1" />
                           <div className="grid grid-cols-3 gap-4">
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Байршил</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Байшин</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                              <Form.Item
                                 name="family_name"
                                 label={<span className="text-xs text-slate-500">Хаалганы дугаар</span>}
                                 className="custom-form-item"
                                 rules={[
                                    {
                                       required: true,
                                       message: (
                                          <span className="text-red-500" style={{ fontSize: 10 }}>
                                             Шаардлагатай
                                          </span>
                                       )
                                    }
                                 ]}
                              >
                                 <Input size="small" />
                              </Form.Item>
                           </div>
                        </div>
                     </div>
                     <Form.Item>
                        <Button type="primary" htmlType="submit">
                           Submit
                        </Button>
                     </Form.Item>
                  </Form>
               </div>
            </Modal>
         </div>
      </div>
   );
}

export default CreateCompany;
