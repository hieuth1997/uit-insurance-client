import Axios from 'axios';
import setAuthToken from '../../helpers/setAuthToken';
import { SET_CURRENT_USER, GET_PROFILE, UPDATE_USER, GET_ERRORS_USER, GET_CART, GET_ORDER, GET_ORDER_DETAIL } from './constants';
import isExist from '../../helpers/isExist';
import { toast } from 'react-toastify';
import setup from '../../helpers/setup';

export const loginUser = userData => dispatch => {
  Axios.post('/api/auth/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token.accessToken);
      setAuthToken(token.accessToken);
      dispatch(setCurrentUser(res.data.user));
    })
    .catch(err => {
      toast.error(err.response.data.error);
      dispatch({
        type: GET_ERRORS_USER,
        payload: err.response.data.errors
      });
    });
};

export const getCart = () => async dispatch => {
  await setup();
  Axios.get('/api/cart')
    .then(res => {
      dispatch({
        type: GET_CART,
        payload: res.data.carts
      });
    })
    .catch(err => {
      toast.error(err.response.data.error);
    });
};

export const deleteCart = ({ cartId, itemId }) => async dispatch => {
  Axios.delete('/api/cart/' + cartId, { params: { itemId } })
    .then(res => {
      dispatch({
        type: GET_CART,
        payload: res.data.carts
      });
      toast.info('Xoá thành công.');
    })
    .catch(err => {
      toast.error(err.response.data.error);
    });
};

export const getOrder = ({ id, limit, page }) => async dispatch => {
  await setup();
  Axios.get('/api/order', { params: { id, limit, page } }).then(res =>
    dispatch({
      type: GET_ORDER,
      payload: res.data
    })
  );
};

export const getOrderDetail = id => async dispatch => {
  await setup();
  Axios.get('/api/order/id/' + id).then(res =>
    dispatch({
      type: GET_ORDER_DETAIL,
      payload: res.data.order
    })
  );
};

export const register = (userData, Router) => dispatch => {
  Axios.post('/api/auth/register', userData)
    .then(res => {
      setTimeout(() => {
        Router.push('/login');
      }, 1000);
      toast.success('Đăng kí thành công.');
    })
    .catch(err => {
      toast.error(err.response.data.error);
      dispatch({
        type: GET_ERRORS_USER,
        payload: err.response.data.errors
      });
    });
};

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const getCurrentUser = dispatch => {
  Axios.get('/api/auth/profile').then(res => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data.user
    });
  });
};

export const getCurrentProfile = id => dispatch => {
  Axios.get('/api/user/' + id).then(res =>
    dispatch({
      type: GET_PROFILE,
      payload: res.data.user
    })
  );
};

export const updateUser = (id, updatedInfo) => dispatch => {
  Axios.patch('/api/user/' + id, isExist(updatedInfo))
    .then(res => {
      dispatch({
        type: UPDATE_USER,
        payload: res.data.user
      });
      toast.success('Cập nhật thành công.');
    })
    .catch(err => {
      toast.error(err.response.data.error);
    });
};

export const logoutUser = Router => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  setTimeout(() => {
    Router.push('/');
  }, 1000);
};

export const uploadAvatar = async picture => {
  const data = new FormData();
  data.append('picture', picture);
  const res = await Axios.post('/api/user/picture', data, { params: { width: 100, height: 100 } });
  return res.data;
};
