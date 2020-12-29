import React from 'react';
import Head from '../components/Header';
import Login from '../components/user/Login';
import { srcHst } from '../helpers/setup';

const LoginPage = () => (
  <>
    <Head title='Đăng nhập - Bảo hiểm UITI' url={srcHst('login')} />
    <Login />
  </>
);

export default LoginPage;
