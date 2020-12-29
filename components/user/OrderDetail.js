import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrderDetail } from './actions';
import { Container, Button, Col, Row } from 'react-bootstrap';
import { srcImg, srcHst } from '../../helpers/setup';
import { Link } from '../../server/routes';

export class OrderDetail extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    order: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.getOrderDetail(this.props.id);
  }
  render() {
    const { order, user } = this.props;
    const product =
      order &&
      order.cart &&
      order.cart.items.map((item, key) => (
        <Row className='my_item_cart m-0' key={key}>
          <Col md='3'>
            <img className='my_image_cart' src={srcImg(item.insuranceItemId.picture)} />
          </Col>
          <Col md='9'>
            <div className='d-flex'>
              <Link route={'/chi-tiet/' + item.insuranceItemId.slug}>
                <a className='chumenu' href={'/chi-tiet/' + item.insuranceItemId.slug}>
                  {item.insuranceItemId.name}
                </a>
              </Link>
              <div className='ml-auto'>{item.insuranceItemId.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
            </div>
            <p>Thể loại: {item.insuranceItemId.insuranceCate.type}</p>
            {item.contract && (
              <>
                <p>Hợp đồng:</p>
                <a target='_blank' href={srcImg(item.contract)}>
                  <img src='/static/pdf.svg' width='60' />
                </a>
              </>
            )}
          </Col>
        </Row>
      ));
    return (
      <>
        <Container>
          <Row className='contact-form'>
            <h3 className='my_text_title text-center '>Chi tiết đơn hàng</h3>
            <Col md='12' className='p-0'>
              <div>
                <h2 className='my_title'>Thông báo</h2>
              </div>
            </Col>
            <Row>
              <Col md='4'>
                <div>
                  <h2 className='my_title'>Thông tin người nhận</h2>
                  <Row>
                    <Col md='6'>Họ tên:</Col>
                    <Col md='6'>{user.name}</Col>
                    <Col md='6'>Địa chỉ:</Col>
                    <Col md='6'>{user.address}</Col>
                  </Row>
                </div>
              </Col>
              <Col md='4'>
                <div>
                  <h2 className='my_title'>Phương thức thanh toán</h2>
                  {order.order && (
                    <Row>
                      <Col md='6'>Phương thức:</Col>
                      <Col md='6' className='ml-auto'>
                        PayPal
                      </Col>
                      <Col md='6'>Mã hóa đơn:</Col>
                      <Col md='6' className='ml-auto'>
                        {order.order.id}
                      </Col>
                      <Col md='6'>Tổng thu:</Col>
                      <Col md='6'>
                        {order.order.purchase_units[0].amount.value} {order.order.purchase_units[0].amount.currency_code}
                      </Col>
                    </Row>
                  )}
                </div>
              </Col>
              <Col md='4'>
                <div>
                  <h2 className='my_title'>Trạng thái đơn hàng</h2>
                  <div>
                    {order.status === 'completed' && 'hoàn tất'}
                    {order.status === 'pending' && 'đang chờ'}
                    {order.status === 'delivering' && 'đang giao'}
                    {order.status === 'canceled' && 'đã huỷ'}
                  </div>
                </div>
              </Col>
            </Row>

            <Col md='12' className='p-0'>
              <div>
                <h2 className='my_title'>Sản phẩm</h2>
                {product}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  order: state.user.order,
  user: state.user.user
});

const mapDispatchToProps = {
  getOrderDetail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
