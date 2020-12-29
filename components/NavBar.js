import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import CLink from './commons/CLink';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from './user/actions';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends Component {
  onLogout = () => {
    this.props.logoutUser(Router);
  };
  render() {
    const { user } = this.props;
    const { nameList } = this.props.home;
    let personalInsurance = [],
      businessInsurance = [];
    if (nameList.length)
      for (const el of nameList) {
        el.type === 'Khách hàng cá nhân'
          ? personalInsurance.push(
              <CLink route='bao-hiem' params={{ slug: el.slug }} key={el.slug}>
                <NavDropdown.Item className='cursor-pointer' href={'/bao-hiem/' + el.slug}>
                  {el.name}
                </NavDropdown.Item>
              </CLink>
            )
          : businessInsurance.push(
              <CLink route='bao-hiem' params={{ slug: el.slug }} key={el.slug}>
                <NavDropdown.Item className='cursor-pointer' href={'/bao-hiem/' + el.slug}>
                  {el.name}
                </NavDropdown.Item>
              </CLink>
            );
      }
    return (
      <Navbar collapseOnSelect variant='light' expand='md' sticky='top' className='pdleft py-1 is-navbar'>
        <Navbar.Brand className='logo'>
          <CLink route='/'>
            <a href='/'>
              <img className='cursor-pointer' src='/static/image/logo.png' alt={'logo'} title='Bảo Hiểm UITI' />
              {' BẢO HIỂM UITI'}
            </a>
          </CLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className='chumenu' id='navbarSupportedContent'>
          <Nav className='is-nav-div' activeKey={false}>
            <div className='navbar-nav'>
              <NavDropdown title='Khách hàng cá nhân'>{personalInsurance}</NavDropdown>
              <NavDropdown title='Khách hàng doanh nghiệp'>{businessInsurance}</NavDropdown>
              <CLink route='tin-tuc'>
                <Nav.Link href='/tin-tuc' className='cursor-pointer pl-2'>
                  Tin tức
                </Nav.Link>
              </CLink>
            </div>
            <div className='navbar-nav mr-5 is-nav-rep'>
              {!user.isAuthenticated ? (
                <>
                  <CLink route='/login'>
                    <Nav.Link href='/login' className='cursor-pointer mr-3' style={{ padding: 8 }}>
                      <FontAwesomeIcon icon={faSignInAlt} className='ct-icon' />
                      {' Đăng nhập'}
                    </Nav.Link>
                  </CLink>
                  <CLink route='/register'>
                    <Nav.Link href='/register' className='cursor-pointer' style={{ padding: 8 }}>
                      <FontAwesomeIcon icon={faUserPlus} className='ct-icon' />
                      {' Đăng kí'}
                    </Nav.Link>
                  </CLink>
                </>
              ) : (
                <>
                  <NavDropdown
                    title={
                      <>
                        <i className='fas fa-user' />
                        {user.user.name}
                      </>
                    }>
                    <CLink route='/user/account'>
                      <NavDropdown.Item className='cursor-pointer' href='/user/account'>
                        Thông tin tài khoản
                      </NavDropdown.Item>
                    </CLink>
                    <CLink route='/user/order'>
                      <NavDropdown.Item className='cursor-pointer' href='/user/order'>
                        Quản lý đơn hàng
                      </NavDropdown.Item>
                    </CLink>
                    <NavDropdown.Item className='cursor-pointer' onClick={this.onLogout}>
                      Đăng xuất
                    </NavDropdown.Item>
                  </NavDropdown>
                  <CLink route='/user/cart'>
                    <Nav.Link href='/user/cart' className='pl-2'>
                      <>
                        <i className='fas fa-cart-plus' /> Giỏ hàng
                      </>
                    </Nav.Link>
                  </CLink>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
NavBar.propTypes = {
  logoutUser: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user,
  home: state.home
});

const mapDispatchToProps = {
  logoutUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
