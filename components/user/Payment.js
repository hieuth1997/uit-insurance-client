import React, { Component } from 'react';
import { InputGroup, FormControl, Container, Form } from 'react-bootstrap';
// import PropTypes from 'prop-types'

export default class Payment extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  state = {
    deliveryMethod: ''
  };
  onChange = value => {
    console.log(value);
  };
  render() {
    return (
      <Container>
        <div className='contact-form'>
          <h3 className='my_text_title text-center '>Thanh toán và đặt hàng</h3>
          <div>1. Chọn hình thức giao hàng</div>
          <Form.Check
            custom
            type='radio'
            value='slow'
            checked={this.state.deliveryMethod === 'slow'}
            onChange={this.onChange}
            label='Giao hàng chậm'
          />
          <Form.Check
            custom
            type='radio'
            value='normal'
            checked={this.state.deliveryMethod === 'normal'}
            onChange={this.onChange}
            label='Giao hàng tiêu chuẩn'
          />
          <Form.Check
            custom
            type='radio'
            value='fast'
            checked={this.state.deliveryMethod === 'fast'}
            onChange={this.onChange}
            label='Giao hàng nhanh'
          />
          <Form.Check
            custom
            type='radio'
            value='superfast'
            checked={this.state.deliveryMethod === 'superfast'}
            onChange={this.onChange}
            label='Giao hàng siêu tốc'
          />

          <div>2. Chọn hình thức thanh toán</div>
        </div>
      </Container>
    );
  }
}
