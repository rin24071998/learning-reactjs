import { Button } from 'antd';
import { CSSProperties } from 'react';
import clsx from 'clsx';
import classes from './AppButton.module.scss';
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
    className,
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
      className={clsx(classes.appButton, className)}
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
