import { Button } from 'antd';
import { CSSProperties } from 'react';

interface AppButtonProps {
  type?:
    | 'default'
    | 'primary'
    | 'ghost'
    | 'dashed'
    | 'link'
    | 'text'
    | undefined;
  htmlType?: 'submit' | 'reset' | 'button';
  name?: string;
  onClick?: () => void;
  block?: boolean;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  loading?:
    | boolean
    | {
        delay?: number;
      };
}
const AppButton = (props: AppButtonProps) => {
  const {
    type,
    htmlType,
    name,
    onClick,
    block,
    style,
    children,
    disabled,
    loading,
  } = props;
  return (
    <Button
      type={type || 'primary'}
      htmlType={htmlType || 'button'}
      onClick={onClick}
      block={block || true}
      style={style}
      loading={loading}
      disabled={disabled}
    >
      {name}
      {children}
    </Button>
  );
};
export default AppButton;
