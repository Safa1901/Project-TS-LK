import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Login } from '../components/Pages/Login/Login';
// import { RegisterInput } from '../../pages/register.page';
import { IGenericResponse } from '../types/User';
// import { userApi } from './userApi';
// import { getTypeDevice } from 'helpers/device';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/auth/`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { access_token: string; status: string },
      Login
    > 
    ({
      query(data) {
        return {
          url: 'https://officedev-lk.ohrana-neva.ru/api3/login/password',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
    verifyEmail: builder.mutation<
      IGenericResponse,
      { verificationCode: string }
    >({
      query({ verificationCode }) {
        return {
          url: `verifyemail/${verificationCode}`,
          method: 'GET',
        };
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
//   useRegisterUserMutation,
//   useLogoutUserMutation,
//   useVerifyEmailMutation,
} = authApi;
