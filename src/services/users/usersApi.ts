import instance from '../axios.config';

class UsersApis {
  getUsersList = (request: any) =>
    instance.get('/users', {
      params: request,
    });
}

export const UsersApi = new UsersApis();
