import { Form } from 'antd';
import { IForm } from './Form.config';

const FormComponent = (props: IForm) => {
  const { initialValues, onFinish, children, form, layout } = props;
  return (
    <Form
      name="basic"
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
      layout={layout || 'vertical'}
    >
      {children}
    </Form>
  );
};
export default FormComponent;
