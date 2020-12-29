import { PayPalButton } from 'react-paypal-button-v2';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Axios from 'axios';
import PropTypes from 'prop-types';

export default class PaypalButton extends Component {
  static propTypes = {
    cartId: PropTypes.string.isRequired,
    onReload: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
  };
  state = {
    ready: false
  };
  render() {
    if (typeof window !== 'undefined')
      return (
        <PayPalButton
          style={{ display: this.state.ready ? 'initial' : 'none' }}
          onButtonReady={() => this.setState({ ready: true })}
          amount={(this.props.total / 22000).toFixed(2)}
          options={{
            clientId: 'AaF-qHHKS7xuKza-6pDOZp5TKFsReK4a9F3s9P8cN1wudsD4MhPfT7D00U5hSXNYlQv3m0PnRjdyvPnz'
          }}
          onError={err => {
            toast.error('Mua hàng thất bại!');
          }}
          onCancel={data => {
            toast.info('Mua hàng bị hủy!');
          }}
          onSuccess={(details, data) => {
            toast.info('Giao dịch đang được xử lý...');
            Axios.get('/api/cart/pay/' + this.props.cartId, { params: { orderId: data.orderID } }).then(res => {
              if (res.data.success) {
                toast.success('Giao dịch thành công!');
                setTimeout(() => {
                  this.props.onReload();
                }, 1000);
              } else toast.error('Đã xãy ra lỗi, vui lòng kiểm tra lại!');
            });
          }}
        />
      );
    else return <></>;
  }
}
