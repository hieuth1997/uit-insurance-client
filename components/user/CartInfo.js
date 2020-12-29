import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCart, deleteCart } from './actions';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { srcImg } from '../../helpers/setup';
import { Link } from '../../server/routes';
import PaypalButton from '../commons/PaypalButton';

export class CartInfo extends Component {
  componentDidMount() {
    this.props.getCart();
  }
  static propTypes = {
    carts: PropTypes.object
  };
  onDeleteCart = ({ cartId, itemId }) => {
    this.props.deleteCart({ cartId, itemId });
  };
  onReload = () => {
    this.props.getCart();
  };
  render() {
    const { carts } = this.props;
    const content =
      carts && carts.items && carts.items.length ? (
        carts.items.map((item, key) => (
          <Row className='my_item_cart' key={key}>
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
              <div className='d-inline-flex'>
                <Button className='ml-3 mb-auto' variant='outline-info' onClick={() => this.onDeleteCart({ cartId: carts._id, itemId: item._id })}>
                  Xoá
                </Button>
              </div>
            </Col>
          </Row>
        ))
      ) : (
        <></>
      );
    return (
      <Container>
        <Row>
          <Col md='12' className='contact-form'>
            <h3 className='my_text_title_cart_new text-center '>Giỏ hàng của bạn</h3>
            <Row className='pt-4'>
              {carts && carts.items && carts.items.length ? (
                <>
                  <Col md='9'>{content}</Col>
                  <Col md='3'>
                    <div className='payment'>
                      <span className='mr-auto'>Tạm tính:</span>
                      <span className='ml-auto'>{carts.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                    <div className='payment'>
                      <span className='mr-auto'>Thành tiền:</span>
                      <span className='ml-auto'>
                        <h5 className='text-danger font-weight-bold m-0'>
                          {carts.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                        </h5>
                        <small className='text-secondary'>(Đã bao gồm VAT)</small>
                      </span>
                    </div>
                    <div className='mt-3'>
                      <PaypalButton cartId={carts._id} onReload={this.onReload} total={carts.total} />
                    </div>
                  </Col>
                </>
              ) : (
                <div className='text-center m-auto pt-5'>
                  <img src='/static/tablet.svg' width='300' />
                  <div className='p-3'>Không có sản phẩm nào trong giỏ hàng của bạn.</div>
                  <Link route='/'>
                    <Button variant='warning'>Mua sắm ngay.</Button>
                  </Link>
                </div>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  carts: state.user.carts
});

const mapDispatchToProps = {
  getCart,
  deleteCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartInfo);
