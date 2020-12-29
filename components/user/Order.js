import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrder } from './actions';
import { Container, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from '../../server/routes';
import ReactPaginate from 'react-paginate';

export class Order extends Component {
  componentDidMount() {
    this.props.getOrder({ limit: 10, page: 1 });
  }
  state = {
    id: '',
    page: 1
  };
  static propTypes = {
    orders: PropTypes.array
  };
  onPageChange = data => {
    let page = data.selected + 1;
    this.setState({ page }, () => {
      this.props.getOrder({ id: this.state.id, limit: 10, page });
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSearch = () => {
    this.props.getOrder({ id: this.state.id, limit: 10 });
  };
  render() {
    const { orders, totalPage } = this.props;
    const content =
      orders && orders.length ? (
        orders.map((order, key) => (
          <tr key={key}>
            <td>
              <Link route='user/order/' params={{ slug: order.id }}>
                <a>{order.id}</a>
              </Link>
            </td>
            <td>{new Date(order.createdAt).toLocaleDateString('vi-vn')}</td>
            <td>{order.cart.items.map(item => ' ' + item.insuranceItemId.name).toString()}</td>
            <td>{order.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
            <td>{order.paid ? 'Đã thanh toán' : 'Đã hủy'}</td>
            <td>
              {order.status === 'completed' && 'hoàn tất'}
              {order.status === 'pending' && 'đang chờ'}
              {order.status === 'delivering' && 'đang giao'}
              {order.status === 'canceled' && 'đã huỷ'}
            </td>
          </tr>
        ))
      ) : (
        <></>
      );

    return (
      <Container>
        <div className='row '>
          <div className='col-md-12 contact-form'>
            <h3 className='my_text_title_cart_new text-center'>Đơn hàng</h3>
            <InputGroup className='w-50 ml-auto mt-4'>
              <FormControl placeholder='Tìm kiếm đơn hàng' name='id' value={this.state.id} onChange={this.onChange} />
              <InputGroup.Append>
                <Button variant='outline-secondary' onClick={this.onSearch}>
                  <b>Tìm kiếm</b>
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Table striped bordered hover responsive className='mt-3'>
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Ngày mua</th>
                  <th style={{ width: '30%' }}>Sản phẩm</th>
                  <th>Tổng tiền</th>
                  <th>Thanh toán</th>
                  <th>Giao hàng</th>
                </tr>
              </thead>
              <tbody>{content}</tbody>
            </Table>
            {totalPage > 1 && (
              <ReactPaginate
                previousLabel='<'
                nextLabel='>'
                breakLabel='...'
                breakClassName='page-link rounded-circle'
                pageCount={totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.onPageChange}
                containerClassName='pagination'
                pageClassName='page-item'
                pageLinkClassName='page-link rounded-circle'
                previousClassName='page-item'
                previousLinkClassName='page-link rounded-circle'
                nextClassName='page-item '
                nextLinkClassName='page-link rounded-circle'
                activeClassName='active'
                forcePage={Number(this.state.page--)}
              />
            )}
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.user.orders,
  totalPage: state.user.totalOrderPage
});

const mapDispatchToProps = {
  getOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
