import { Form, Input } from 'antd';
import { IFormItem } from './FormItem.config';

const FormItem = (props: IFormItem) => {
  const { label, name, rules, placeholder } = props;
  return (
    <Form.Item label={label} name={name} rules={rules || []}>
      <Input placeholder={placeholder} />
    </Form.Item>
  );
};
export default FormItem;
