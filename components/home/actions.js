import Axios from 'axios';
import { GET_INSURANCE_CATE, GET_NEWS_CATE, GET_BANNER, GET_INSURANCE_CATE_NAME_LIST } from './constants';

export const getBanner = () => async dispatch => {
  await Axios.get('/api/banner/').then(res => {
    dispatch({
      type: GET_BANNER,
      payload: res.data.banners
    });
  });
};

export const getInsuranceCateNameList = () => async dispatch => {
  await Axios.get('/api/insurance-cate/', { params: { select: 'name slug type' } }).then(res => {
    dispatch({
      type: GET_INSURANCE_CATE_NAME_LIST,
      payload: res.data.insuranceCategories
    });
  });
};

export const getInsuranceCate = () => async dispatch => {
  await Axios.get('/api/insurance-cate/').then(res => {
    dispatch({
      type: GET_INSURANCE_CATE,
      payload: res.data.insuranceCategories
    });
  });
};

export const getNewsCate = () => async dispatch => {
  await Axios.get('/api/news/', { params: { limit: 4 } }).then(res => {
    dispatch({
      type: GET_NEWS_CATE,
      payload: res.data.news
    });
  });
};
