import React from 'react';
import Head from '../../components/Header';
import Nav from '../../components/NavBar';
import AccountInfo from '../../components/user/AccountInfo';

const Account = () => {
  return (
    <div>
      <Head title='Trang thông tin khách hàng' />
      <AccountInfo />
    </div>
  );
};

export default Account;
