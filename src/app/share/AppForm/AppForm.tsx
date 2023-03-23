import { FieldData } from '@Interfaces/interfaces/form';
import { Form } from 'antd';
interface AppFormProps {
  name?: string;
  initialValues?: any;
  onFinish: (values: any) => void;
  children: React.ReactElement;
  form?: any;
  layout?: 'horizontal' | 'inline' | 'vertical';
  onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
  rest?: any;
}

const AppForm = (props: AppFormProps) => {
  const {
    name,
    initialValues,
    onFinish,
    children,
    form,
    layout,
    onFieldsChange,
    rest,
  } = props;
  return (
    <Form
      {...rest}
      name={name}
      initialValues={initialValues}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
      layout={layout || 'vertical'}
      onFieldsChange={onFieldsChange}
    >
      {children}
    </Form>
  );
};
export default AppForm;
