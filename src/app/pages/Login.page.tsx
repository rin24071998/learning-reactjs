import { Form } from 'antd';
import React from 'react';
import LoginComponent from '../component/Login/LoginComponent';
import ButtonComponent from '../share/button/ButtonComponent';
import FormComponent from '../share/form/FormComponent';
import FormItem from '../share/formItem/FormItem';

export default function Loginpage() {
  const [form] = Form.useForm();
  console.log(form);
  const onFinish = (values: any) => {
    console.log(values);
  };
  return <LoginComponent />;
}
