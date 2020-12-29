import { GET_INSURANCE_CATE, GET_NEWS_CATE, GET_BANNER, GET_INSURANCE_CATE_NAME_LIST } from './constants';

const initialState = {
  loading: false,
  message: '',
  insuranceCate: [],
  news: [],
  nameList: [],
  banners: []
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BANNER:
      return {
        ...state,
        loading: false,
        banners: action.payload
      };
    case GET_INSURANCE_CATE:
      return {
        ...state,
        loading: false,
        insuranceCate: action.payload
      };
    case GET_INSURANCE_CATE_NAME_LIST:
      return {
        ...state,
        loading: false,
        nameList: action.payload
      };
    case GET_NEWS_CATE:
      return {
        ...state,
        loading: false,
        news: action.payload
      };

    default:
      return state;
  }
}

export default homeReducer;
