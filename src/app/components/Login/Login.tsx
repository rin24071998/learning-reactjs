import { CONSTANTS } from '@Constants/constant';
import { rulesLogin } from '@Helper/validation/login';
import AppButton from '@Share/AppButton/AppButton';
import AppForm from '@Share/AppForm/AppForm';
import AppFormItem from '@Share/AppFormItem/AppFormItem';
import { Form } from 'antd';
import classes from './Login.module.scss';
export default function Login() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <AppForm form={form} onFinish={onFinish}>
          <>
            <AppFormItem
              name={CONSTANTS.field.EMAIL}
              label="Email"
              rules={rulesLogin.email}
            />
            <AppFormItem
              name={CONSTANTS.field.PASSWORD}
              label="Password"
              type="password"
              rules={rulesLogin.password}
            />
            <Form.Item shouldUpdate>
              {() => (
                <AppButton
                  name="Login"
                  onClick={() => form.submit()}
                  disabled={
                    !(
                      form.getFieldValue('email')?.length &&
                      form.getFieldValue('password')?.length
                    ) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                />
              )}
            </Form.Item>
          </>
        </AppForm>
      </div>
    </div>
  );
}
