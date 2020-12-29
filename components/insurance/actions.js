import Axios from 'axios';
import { GET_ITEM_CATE, GET_ITEM_CATE_DETAIL, BUY_ITEM_CATE, GET_ITEM_TYPE } from './constants';
import { toast } from 'react-toastify';

export const getCateItem = slug => async dispatch => {
  await Axios.get('/api/insurance-cate/list/' + slug).then(res => {
    dispatch({
      type: GET_ITEM_CATE,
      payload: res.data
    });
  });
};

export const getItemByType = slug => async dispatch => {
  const res = await Axios.get('/api/insurance-item/type/' + slug);
  dispatch({
    type: GET_ITEM_TYPE,
    payload: res.data.insuranceItems
  });
};

export const buyCateItem = insuranceItemId => async dispatch => {
  await Axios.post('/api/cart/', { insuranceItemId, quantity: 1 })
    .then(res => {
      dispatch({
        type: BUY_ITEM_CATE,
        payload: res.data
      });
      toast.success('Thêm vào giỏ hàng thành công!');
    })
    .catch(err => {
      err.response.data.statusCode === 409 ? toast.error('Sản phẩm đã có trong giỏ hàng') : toast.error('Thêm vào giỏ hàng thất bại');
    });
};

export const getItemDetail = slug => async dispatch => {
  await Axios.get('/api/insurance-item/item/' + slug).then(res => {
    dispatch({
      type: GET_ITEM_CATE_DETAIL,
      payload: res.data.insuranceItem
    });
  });
};
