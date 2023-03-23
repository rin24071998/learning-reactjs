import { CONSTANTS } from '@Constants/constant';
import { REGEX } from '@Helper/regex/regex';

export const rulesLogin = {
  [CONSTANTS.field.EMAIL]: [
    {
      required: true,
      message: 'Please enter your email!',
    },
    ({ getFieldValue }: any) => ({
      validator(_: any, value: any) {
        if (value?.length) {
          if (!REGEX.emailAddress?.test(value)) {
            return Promise.reject(new Error('Email is invalid! '));
          }
          return Promise.resolve();
        }
        return Promise.resolve();
      },
    }),
  ],
  [CONSTANTS.field.PASSWORD]: [
    {
      required: true,
      message: 'Please enter your password!',
    },
    ({ getFieldValue }: any) => ({
      validator(_: any, value: any) {
        if (value?.length > 32) {
          return Promise.reject(new Error('max length pasword'));
        }
        return Promise.resolve();
      },
    }),
  ],
};
