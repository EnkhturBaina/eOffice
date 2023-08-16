import React from 'react';
import uploadAvatar from '../../../../assets/uploadAvatar.png';
import uploadBtn from '../../../../assets/uploadBtn.png';
import { Button, Divider, Input, Form, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function GeneralCV() {
   const onFinish = (values) => {
      console.log('Received values of form:', values);
   };
   return (
      <div>
         <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            initialValues={{
               emergency: [{ who_is: '', last_name: '', first_name: '', phone: '' }]
            }}
         >
            <span className="main-color font-semibold">A. Хувийн мэдээлэл</span>
            <Divider className="my-1" />
            <div className="flex flex-row !mt-2 !mb-2">
               <div style={{ width: 140 }} className="flex flex-col items-center">
                  <img src={uploadAvatar} className="rounded-md" style={{ height: 130, width: 120 }} />
                  <img
                     src={uploadBtn}
                     className="rounded-md cursor-pointer"
                     style={{ height: 30, width: 130, marginTop: 10 }}
                  />
               </div>
               <div className="flex flex-col flex-1 !ml-3">
                  <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                     <Form.Item
                        name="family_name"
                        label={<span className="text-xs text-slate-500">Ургийн овог</span>}
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
                        label={<span className="text-xs text-slate-500">Эцэг /эх/-ийн нэр</span>}
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
                        label={<span className="text-xs text-slate-500">Өөрийн нэр</span>}
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
                        label={<span className="text-xs text-slate-500">Регистрийн дугаар</span>}
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
                        label={<span className="text-xs text-slate-500">Яс үндэс</span>}
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
                        label={<span className="text-xs text-slate-500">Иргэншил</span>}
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
            <span className="main-color font-semibold">Б.Холбоо барих</span>
            <Divider className="my-1" />
            <div className="grid grid-cols-4 gap-x-4 gap-y-2 !mb-2">
               <Form.Item
                  name="contact_phone"
                  label={<span className="text-xs text-slate-500">Гар утас</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_home_phone"
                  label={<span className="text-xs text-slate-500">Гэрийн утас</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_email"
                  label={<span className="text-xs text-slate-500">Имэйл хаяг</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_fb"
                  label={<span className="text-xs text-slate-500">Facebook</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
            </div>
            <span className="main-color font-semibold">В. Яаралтай тохиолдолд холбоо барих хүн</span>
            <Divider className="my-1" />
            <Form.List name="emergency">
               {(fields, { add, remove }) => (
                  <>
                     {fields.map(({ key, name, ...restField }) => (
                        <Space
                           key={key}
                           style={{
                              display: 'flex',
                              alignItems: 'center'
                           }}
                           align="baseline"
                        >
                           <Form.Item
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Таны юу болох</span>}
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
                              name={[name, 'first_name']}
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
                              name={[name, 'phone']}
                              label={<span className="text-xs text-slate-500">Утасны дугаар</span>}
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
                           {fields.length > 1 ? (
                              <DeleteOutlined
                                 onClick={() => {
                                    remove(name);
                                 }}
                                 className="text-xl text-rose-500 !px-2.5 leading-none cursor-pointer"
                                 style={{ marginTop: 15 }}
                              />
                           ) : null}
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
            <span className="main-color font-semibold">Г.Хаяг</span>
            <Divider className="my-1" />
            <div className="grid grid-cols-6 gap-x-4 gap-y-2 !mb-2">
               <Form.Item
                  name="contact_phone"
                  label={<span className="text-xs text-slate-500">Аймаг, хот</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_phone"
                  label={<span className="text-xs text-slate-500">Сум, дүүрэг</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_phone"
                  label={<span className="text-xs text-slate-500">Баг, хороо</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_phone"
                  label={<span className="text-xs text-slate-500">Хороолол</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_phone"
                  label={<span className="text-xs text-slate-500">Байшин</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
               <Form.Item
                  name="contact_phone"
                  label={<span className="text-xs text-slate-500">Хаалганы дугаар</span>}
                  className="custom-form-item"
               >
                  <Input size="small" />
               </Form.Item>
            </div>
            <Form.Item>
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}

export default GeneralCV;
