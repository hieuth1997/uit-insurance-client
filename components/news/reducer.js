import { GET_NEWS_LIST, GET_NEWS_ITEM_DETAIL } from './constant';

const initialState = {
  list: [],
  itemDetail: {}
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_LIST:
      return {
        ...state,
        list: action.payload
      };
    case GET_NEWS_ITEM_DETAIL:
      return {
        ...state,
        itemDetail: action.payload
      };
    default:
      return state;
  }
}

export default newsReducer;
