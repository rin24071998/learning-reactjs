import { rulesLogin } from '@Helper/validation/login';
import ButtonComponent from '@Share/button/ButtonComponent';
import FormComponent from '@Share/form/FormComponent';
import FormItem from '@Share/formItem/FormItem';
import { Form } from 'antd';

export default function LoginComponent() {
  const [form] = Form.useForm();
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
