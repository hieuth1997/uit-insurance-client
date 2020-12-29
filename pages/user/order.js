import React from 'react';
import Order from '../../components/user/Order';
import Header from '../../components/Header';

const orderPage = props => {
  return (
    <>
      <Header title='Đơn hàng' />
      <Order />
    </>
  );
};

export default orderPage;
