import React from 'react';
import Head from '../components/Header';
import Register from '../components/user/Register';
import { srcHst } from '../helpers/setup';

const RegisterPage = () => (
  <div>
    <Head title='Đăng ký - Bảo hiểm UITI' url={srcHst('register')} />
    <Register />
  </div>
);

export default RegisterPage;
