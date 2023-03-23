import { Form, Input } from 'antd';
import clsx from 'clsx';
import classes from './AppFormItem.module.scss';
interface AppFormItemProps {
  name: string;
  label?: string;
  rules?: any[];
  placeholder?: string;
  type?: string;
  className?: string;
}

const AppFormItem = (props: AppFormItemProps) => {
  const { label, name, rules, placeholder, type, className } = props;
  return (
    <div className={clsx(classes.appFormItem, className)}>
      <Form.Item label={label} name={name} rules={rules || []}>
        <Input placeholder={placeholder} type={type || 'text'} />
      </Form.Item>
    </div>
  );
};
export default AppFormItem;
