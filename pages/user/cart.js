import React from 'react';
import Head from '../../components/Header';
import Nav from '../../components/NavBar';
import CartInfo from '../../components/user/CartInfo';

const Cart = () => {
  return (
    <>
      <Head title='Trang thông tin khách hàng' />
      <CartInfo />
    </>
  );
};

export default Cart;
