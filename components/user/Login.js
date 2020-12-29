import React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { isValid } from '../../helpers/validator';
import Link from 'next/link';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  componentDidMount() {
    const email = document.getElementById('email').value.trim() || '';
    const password = document.getElementById('password').value.trim() || '';
    this.setState({
      email,
      password
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuthenticated) {
      Router.push('/');
    }
    if (nextProps.user.errors) {
      let tempErrors = { email: '', password: '' };
      let newErrors = Object.assign(tempErrors, nextProps.user.errors);
      this.setState({ errors: newErrors });
    }
  }
  onBlur = e => {
    let { name } = e.target;
    let result = isValid({ [name]: this.state[name] }, 'login', name);
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
            [name]: result[name] // errors[name] = result
          }
        });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    let result = isValid(userData, 'login');
    result === true ? this.props.loginUser(userData) : this.setState({ errors: result });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Row className='my-form-login'>
          <Col md='6' className='my-bg-login' />
          <Form noValidate className='col-md-6 col-sm-8 contact-form ' onSubmit={this.onSubmit}>
            <h3 className='my_text_title text-center'>Đăng nhập tài khoản</h3>
            <FormGroup>
              <Form.Label className='my_label_form'>Email</Form.Label>
              <Form.Control
                type='email'
                className='my_input'
                name='email'
                id='email'
                placeholder=' Nhập email'
                value={this.state.email}
                onChange={this.onChange}
                onBlur={this.onBlur}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Label className='my_label_form'>Mật khẩu</Form.Label>
              <Form.Control
                type='password'
                className='my_input'
                name='password'
                id='password'
                placeholder=' Nhập password'
                value={this.state.password}
                onChange={this.onChange}
                onBlur={this.onBlur}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
            </FormGroup>
            <Button type='submit' className='my_btn_login'>
              Đăng nhập
            </Button>
            <br />
            <span className='my_label_form mt-5'>
              Chưa có tài khoản.
              <Link href='/register'>
                <a href='/register' className='my_a text-warning'>
                  Đăng kí ngay!
                </a>
              </Link>
            </span>
          </Form>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
