import { GET_ITEM_CATE, GET_ITEM_CATE_DETAIL, GET_ITEM_TYPE } from './constants';

const initialState = {
  list: [],
  cate: '',
  itemDetail: {}
};

function insuranceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM_CATE:
      return {
        ...state,
        list: action.payload.insuranceList,
        cate: action.payload.insuranceCate
      };
    case GET_ITEM_TYPE:
      return {
        ...state,
        list: action.payload
      };
    case GET_ITEM_CATE_DETAIL:
      return {
        ...state,
        itemDetail: action.payload
      };
    default:
      return state;
  }
}

export default insuranceReducer;
