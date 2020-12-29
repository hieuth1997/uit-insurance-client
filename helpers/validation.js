import Joi from 'joi';

export default {
  register: {
    name: Joi.string()
      .min(3)
      .max(128)
      .required()
      .label('Tên'),
    email: Joi.string()
      .email()
      .required()
      .label('Email'),
    password: Joi.string()
      .min(6)
      .max(32)
      .required()
      .label('mật khẩu'),
    rePassword: Joi.string()
      .label('Xác nhận mật khẩu')
      .when('password', {
        is: Joi.exist(),
        then: Joi.valid(Joi.ref('password'))
      })
  },
  login: {
    email: Joi.string()
      .email()
      .required()
      .label('Email'),
    password: Joi.string()
      .min(6)
      .max(32)
      .required()
      .label('Mật khẩu')
  },
  updateUser: {
    name: Joi.string()
      .min(3)
      .max(128)
      .label('Tên'),
    password: Joi.string()
      .min(6)
      .max(32)
      .label('Mật khẩu cũ'),
    newPassword: Joi.string()
      .min(6)
      .max(32)
      .label('Mật khẩu mới')
      .when('password', {
        is: Joi.exist(),
        then: Joi.required().invalid(Joi.ref('password'))
      }),
    reNewPassword: Joi.string()
      .min(6)
      .max(32)
      .label('Xác nhận mật khẩu mới')
      .when('password', {
        is: Joi.exist(),
        then: Joi.required().valid(Joi.ref('newPassword'))
      }),
    gender: Joi.string().valid(['male', 'female']),
    address: Joi.string()
  }
};
