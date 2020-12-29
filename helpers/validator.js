import config from './validation';
import Joi from 'joi';

const joiOptions = {
  abortEarly: false,
  language: {
    key: '{{!label}} ',
    any: {
      required: 'chưa được nhập',
      empty: 'không được để trống',
      allowOnly: 'phải trùng khớp',
      invalid: 'phải khác với mật khẩu cũ'
    },
    string: {
      email: 'phải là email hợp lệ',
      base: 'phải là 1 chuỗi kí tự',
      min: 'phải ít nhất {{limit}} kí tự',
      max: 'không được vượt quá {{limit}} kí tự',
      length: 'phải đúng {{limit}} kí tự'
    },
    number: {
      greater: 'phải lớn hơn {{limit}}',
      min: 'phải từ {{limit}} trở lên'
    }
  }
};

export const isValid = (object, form, path = null) => {
  let result = Joi.validate(object, path ? { [path]: config[form][path] } : config[form], joiOptions);
  if (result.error) {
    let errors = {};
    result.error.details.forEach(err => {
      errors[err.path[0]] = err.message;
    });
    return errors;
  }
  return true;
};
