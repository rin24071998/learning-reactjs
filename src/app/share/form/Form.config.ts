import React from 'react';

export interface IForm {
  initialValues?: any;
  onFinish: (values: any) => void;
  children: React.ReactElement;
  form?: any;
  layout?: 'horizontal' | 'inline' | 'vertical';
}
