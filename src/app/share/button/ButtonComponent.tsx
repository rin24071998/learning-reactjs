import { Button } from 'antd';
import { IButton } from './Button.config';
const ButtonComponent = (props: IButton) => {
  const { type, htmlType, title, onClick, block, style } = props;
  return (
    <Button
      type={type}
      htmlType={htmlType || 'button'}
      onClick={onClick}
      block={block || true}
      style={style}
    >
      {title}
    </Button>
  );
};
export default ButtonComponent;
