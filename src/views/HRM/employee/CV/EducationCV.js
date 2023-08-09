import { Button, Divider, Input, Form, Space } from 'antd';
import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

function EducationCV() {
   const onFinish = (values) => {
      console.log('Received values of form:', values);
   };
   return (
      <div>
         <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" layout="vertical">
            <span className="main-color font-semibold">А.Ерөнхий боловсрол</span>
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
                              label={<span className="text-xs text-slate-500">Элссэн он</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Төгссөн он</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Улс</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Аймаг, хот</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Сургууль</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Дүн</span>}
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
            <span className="main-color font-semibold">Б.Дээд боловсрол</span>
            <Divider className="my-1" />
            <Form.List name="deeed_bolowsrol">
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
                              label={<span className="text-xs text-slate-500">Элссэн он</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Төгссөн он</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Улс</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Сургууль</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Мэргэжил</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Дүн</span>}
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
            <span className="main-color font-semibold">В. Мэргэжлийн чиглэлээр хамрагдаж байсан сургалт</span>
            <Divider className="my-1" />
            <Form.List name="deeed_bolowsrol">
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
                              label={<span className="text-xs text-slate-500">Нарийн мэргэжлийн нэр</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Авсан он</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Хугацаа дуусах он</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Байгууллага/сургууль</span>}
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
                              {...restField}
                              name={[name, 'who_is']}
                              label={<span className="text-xs text-slate-500">Гэрчилгээний №</span>}
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
            <Form.Item>
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}

export default EducationCV;
