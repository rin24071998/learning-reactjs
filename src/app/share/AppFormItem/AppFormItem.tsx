import { Form, Input } from 'antd';
interface AppFormItemProps {
  name: string;
  label?: string;
  rules?: any[];
  placeholder?: string;
  type?: string;
}

const AppFormItem = (props: AppFormItemProps) => {
  const { label, name, rules, placeholder, type } = props;
  return (
    <Form.Item label={label} name={name} rules={rules || []}>
      <Input placeholder={placeholder} type={type || 'text'} />
    </Form.Item>
  );
};
export default AppFormItem;
