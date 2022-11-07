import React, { CSSProperties } from 'react';

export interface IButton {
  type?:
    | 'default'
    | 'primary'
    | 'ghost'
    | 'dashed'
    | 'link'
    | 'text'
    | undefined;
  htmlType?: 'submit' | 'reset' | 'button';
  title: string;
  onClick?: () => void;
  block?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  icon?: React.ReactNode;
}
