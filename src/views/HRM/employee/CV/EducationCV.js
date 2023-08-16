import { Button, Divider, Input, Form, Space } from 'antd';
import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

function EducationCV() {
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
               general: [{ start_date: '', end_date: '', country: '', city: '', school: '', grade: '' }],
               deeed_bolowsrol: [{ start_date: '', end_date: '', country: '', city: '', occupation: '', grade: '' }],
               surgalt: [{ name: '', start_date: '', end_date: '', school: '', cert_no: '' }]
            }}
         >
            <span className="main-color font-semibold">А.Ерөнхий боловсрол</span>
            <Divider className="my-1" />
            <Form.List name="general">
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
                              name={[name, 'start_date']}
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
                              name={[name, 'end_date']}
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
                              name={[name, 'country']}
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
                              name={[name, 'city']}
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
                              name={[name, 'school']}
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
                              name={[name, 'grade']}
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
                              name={[name, 'start_date']}
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
                              name={[name, 'end_date']}
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
                              name={[name, 'country']}
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
                              name={[name, 'school']}
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
                              name={[name, 'occupation']}
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
                              name={[name, 'grade']}
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
            <span className="main-color font-semibold">В. Мэргэжлийн чиглэлээр хамрагдаж байсан сургалт</span>
            <Divider className="my-1" />
            <Form.List name="surgalt">
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
                              name={[name, 'name']}
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
                              name={[name, 'start_date']}
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
                              name={[name, 'end_date']}
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
                              name={[name, 'school']}
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
                              name={[name, 'cert_no']}
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
