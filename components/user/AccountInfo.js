import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, updateUser, uploadAvatar } from './actions';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { isValid } from '../../helpers/validator';
import { srcImg } from '../../helpers/setup';

class Account extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      picture: '',
      gender: null,
      password: '',
      newPassword: '',
      reNewPassword: '',
      address: '',
      errors: {}
    };
  }
  componentDidMount() {
    const { email, gender, name, address, picture } = this.props.user.user;
    this.setState({
      name,
      email,
      address,
      gender,
      picture
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.user) {
      const { gender, email, name, address, picture } = nextProps.user.user;
      this.setState({
        ...this.state,
        name,
        email,
        address,
        gender,
        picture,
        password: '',
        newPassword: '',
        reNewPassword: ''
      });
    }
  }
  onBlur = e => {
    let { name } = e.target;
    let result = isValid({ [name]: this.state[name] }, 'updateUser', name);
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
  onChangeImg = e => {
    const target = e.target;
    if (target.files) {
      uploadAvatar(e.target.files[0]).then(res => {
        this.props.updateUser(this.props.user.user._id, { picture: res.path });
      });
    }
  };
  onChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    let updateUser = {
      name: this.state.name,
      gender: this.state.gender,
      address: this.state.address
    };
    if (this.state.password)
      updateUser = {
        ...updateUser,
        password: this.state.password,
        newPassword: this.state.newPassword,
        reNewPassword: this.state.reNewPassword
      };
    let result = isValid(updateUser, 'updateUser');
    result === true ? this.props.updateUser(this.props.user.user._id, updateUser) : this.setState({ errors: result });
  };
  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Row className='bga'>
          <Col md='6' sm='8' className='contact-form mx-auto'>
            <h3 className='my_text_title text-center'>Thông tin tài khoản</h3>
            <Form noValidate onSubmit={this.onSubmit}>
              <div className='justify-content-center'>
                <div className='form-group image-upload mx-auto' style={{ width: 100, height: 100 }}>
                  <label
                    htmlFor='file-input'
                    style={{
                      width: '100%',
                      height: '100%',
                      margin: '0'
                    }}>
                    <img
                      src={this.state.picture ? srcImg(this.state.picture) : '/static/picture.svg'}
                      className='img-thumbnail text-center rounded-circle img-fluid justify-content-center my_avatar'
                      title='change avatar'
                      style={{
                        cursor: 'pointer',
                        objectFit: 'cover',
                        width: '100px',
                        height: '100px'
                      }}
                      alt={this.state.picture}
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = '/static/picture.svg';
                      }}
                    />
                  </label>
                  <input id='file-input' type='file' className='d-none form-control' accept='image/*' onChange={this.onChangeImg} />
                </div>
              </div>
              <Form.Group className='row my_label'>
                <Form.Label className='col-md-4 my_label_form'>Email</Form.Label>
                <Form.Group className='col-md-8'>
                  <Form.Control
                    type='email'
                    name='email'
                    className='my_input my_holder'
                    value={this.state.email || ''}
                    onChange={this.onChange}
                    disabled
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group className='row my_label'>
                <Form.Label className='col-md-4 my_label_form'>Tên</Form.Label>
                <Form.Group className='col-md-8'>
                  <Form.Control
                    type='text'
                    name='name'
                    className='my_input my_holder'
                    value={this.state.name || ''}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    placeholder='Họ và tên'
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
              <Form.Group className='row my_label '>
                <Form.Label className='col-md-4 my_label_form'>Giới tính</Form.Label>
                <Form.Group className='col-md-8 my_form' style={{ width: '40%' }}>
                  <div className='custom-control custom-radio custom-control-inline'>
                    <Form.Control
                      type='radio'
                      id='customRadio1'
                      name='gender'
                      className='custom-control-input'
                      value='male'
                      checked={this.state.gender === 'male'}
                      onChange={this.onChange}
                    />
                    <Form.Label className='custom-control-label' htmlFor='customRadio1'>
                      Nam
                    </Form.Label>
                  </div>
                  <div className='custom-control custom-radio custom-control-inline'>
                    <Form.Control
                      type='radio'
                      id='customRadio2'
                      name='gender'
                      className='custom-control-input'
                      value='female'
                      checked={this.state.gender === 'female'}
                      onChange={this.onChange}
                    />
                    <Form.Label className='custom-control-label' htmlFor='customRadio2'>
                      Nữ
                    </Form.Label>
                  </div>
                </Form.Group>
              </Form.Group>
              <Form.Group className='row my_label'>
                <Form.Label className='col-md-4  my_label_form'>Địa chỉ</Form.Label>
                <Form.Group className='col-md-8'>
                  <Form.Control
                    type='text'
                    name='address'
                    className='my_input my_holder'
                    placeholder='Địa chỉ của bạn'
                    value={this.state.address}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.address}</Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
              <Form.Group className='row my_label'>
                <Form.Label className='col-md-4  my_label_form'>Mật khẩu cũ</Form.Label>
                <Form.Group className='col-md-8'>
                  <Form.Control
                    type='password'
                    name='password'
                    className='my_input my_holder'
                    placeholder='Mật khẩu từ 6 đến 18 ký tự'
                    value={this.state.password}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
              <Form.Group className=' row my_label'>
                <Form.Label className='col-md-4  my_label_form'>Mật khẩu mới</Form.Label>
                <Form.Group className='col-md-8'>
                  <Form.Control
                    type='password'
                    name='newPassword'
                    className='my_input my_holder'
                    placeholder='Mật khẩu từ 6 đến 18 ký tự'
                    value={this.state.newPassword}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    isInvalid={!!errors.newPassword}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.newPassword}</Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
              <Form.Group className=' row my_label'>
                <Form.Label className='col-md-4  my_label_form'>Xác nhận mật khẩu</Form.Label>
                <Form.Group className='col-md-8'>
                  <Form.Control
                    type='password'
                    name='reNewPassword'
                    className='my_input my_holder'
                    placeholder='Mật khẩu từ 6 đến 18 ký tự'
                    value={this.state.reNewPassword}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    isInvalid={!!errors.reNewPassword}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.reNewPassword}</Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
              <a className='my_a'>
                <Button type='submit' className='my_btn_login'>
                  Cập nhật thông tin
                </Button>
              </a>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
