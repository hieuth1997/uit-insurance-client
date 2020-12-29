import React from 'react';
import Header from '../../components/Header';
import OrderDetail from '../../components/user/OrderDetail';

const orderDetailPage = ({ id }) => {
  return (
    <>
      <Header title='Đơn hàng' />
      <OrderDetail id={id} />
    </>
  );
};
orderDetailPage.getInitialProps = async ({ query, reduxStore }) => {
  return { id: query.slug };
};

export default orderDetailPage;
