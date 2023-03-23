import Login from '@Component/Login/Login';
import { Form } from 'antd';

export default function Loginpage() {
  const [form] = Form.useForm();
  console.log(form);
  const onFinish = (values: any) => {
    console.log(values);
  };
  return <Login />;
}
