import Axios from 'axios';
import { GET_NEWS_LIST, GET_NEWS_ITEM_DETAIL } from './constant';

export const getNewsList = () => async dispatch => {
  await Axios.get('/api/news/', { params: { limit: 10 } }).then(res => {
    dispatch({
      type: GET_NEWS_LIST,
      payload: res.data.news
    });
  });
};

export const getNewsItemDetail = slug => async dispatch => {
  await Axios.get('/api/news/item/' + slug).then(res => {
    dispatch({
      type: GET_NEWS_ITEM_DETAIL,
      payload: res.data.newsItem
    });
  });
};
