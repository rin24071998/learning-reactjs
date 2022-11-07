import { Form } from 'antd';
import React from 'react';
import { rulesLogin } from '../../helper/validation/login';
import ButtonComponent from '../../share/button/ButtonComponent';
import FormComponent from '../../share/form/FormComponent';
import FormItem from '../../share/formItem/FormItem';

export default function LoginComponent() {
  const [form] = Form.useForm();
  console.log(form);
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <FormComponent form={form} onFinish={onFinish}>
        <>
          <FormItem name="email" label="email" rules={rulesLogin.email} />
          <FormItem name="password" label="password" />
          <ButtonComponent title="aaaa" onClick={() => form.submit()} />
        </>
      </FormComponent>
    </>
  );
}
