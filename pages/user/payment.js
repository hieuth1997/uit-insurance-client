import React from 'react';
import Header from '../../components/Header';
import Payment from '../../components/user/Payment';

const paymentPage = props => {
  return (
    <>
      <Header title='Đơn hàng' />
      <Payment />
    </>
  );
};
paymentPage.getInitialProps = async ({ reduxStore }) => {
  return {};
};

export default paymentPage;
