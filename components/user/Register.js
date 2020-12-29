import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from './actions';
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import { isValid } from '../../helpers/validator';
import ReCAPTCHA from 'react-google-recaptcha';
const SITE_KEY = '6LeD4HUUAAAAANyybIAPL2CZ8OPL4URJEictfcCS';
import Router from 'next/router';

export class Register extends Component {
  static propTypes = {
    // prop: PropTypes
  };
  constructor(prop) {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      errors: {},
      load: false,
      value: ''
    };
    this._reCaptchaRef = React.createRef();
  }
  onBlur = e => {
    let { name } = e.target;
    let result = isValid({ [name]: this.state[name] }, 'register', name);
    result === true
      ? this.setState({
          errors: {
            ...this.state.errors,
            [name]: ''
          }
        })
      : this.setState({
          errors: {
            ...this.state.errors,
            [name]: result[name]
          }
        });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange = value => {
    this.setState({ value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      rePassword: this.state.rePassword
    };
    let result = isValid(newUser, 'register');
    result === true ? this.props.register(newUser, Router) : this.setState({ errors: result });
  };
  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Row className='my-form-login'>
          <Col md='6' className='my-bg-login' />
          <Form noValidate className='col-md-6 col-sm-8 contact-form mx-auto' onSubmit={this.onSubmit}>
            <h3 className='my_text_title text-center'>Đăng kí tài khoản</h3>
            <Form.Group>
              <Form.Label className='my_label_form'>Tên</Form.Label>
              <Form.Control
                type='text'
                className='my_input'
                name='name'
                aria-describedby='helpId'
                placeholder=' Nhập họ và tên'
                value={this.state.name}
                onChange={this.onChange}
                onBlur={this.onBlur}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className='my_label_form'>Email</Form.Label>
              <Form.Control
                type='email'
                className='my_input'
                name='email'
                aria-describedby='helpId'
                placeholder=' Nhập email'
                value={this.state.email}
                onChange={this.onChange}
                onBlur={this.onBlur}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className='my_label_form'>Mật khẩu</Form.Label>
              <Form.Control
                type='password'
                className='my_input'
                name='password'
                aria-describedby='helpId'
                placeholder=' Nhập mật khẩu'
                value={this.state.password}
                onChange={this.onChange}
                onBlur={this.onBlur}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='form-group '>
              <Form.Label className='my_label_form'>Nhập lại mật khẩu</Form.Label>
              <Form.Control
                type='password'
                className='my_input'
                name='rePassword'
                aria-describedby='helpId'
                placeholder=' Nhập lại mật khẩu'
                value={this.state.rePassword}
                onChange={this.onChange}
                onBlur={this.onBlur}
                isInvalid={!!errors.rePassword}
              />
              <Form.Control.Feedback type='invalid'>{errors.rePassword}</Form.Control.Feedback>
              <ReCAPTCHA
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '20px auto 0px'
                }}
                theme='light'
                ref={this._reCaptchaRef}
                sitekey={SITE_KEY}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button type='submit' className='my_btn_login' disabled={!this.state.value}>
              Đăng ký
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
