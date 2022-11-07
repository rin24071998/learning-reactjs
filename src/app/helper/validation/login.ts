export const rulesLogin = {
  email: [
    {
      required: true,
      message: 'Please confirm your password!',
    },
    ({ getFieldValue }: any) => ({
      validator(_: any, value: any) {
        if (value?.length > 5) {
          return Promise.reject(new Error('max length'));
        }
        return Promise.resolve();
      },
    }),
  ],
};
