import {
  SET_CURRENT_USER,
  GET_PROFILE,
  UPDATE_USER,
  GET_ERRORS_USER,
  GET_CART,
  REMOVE_CART,
  GET_ORDER,
  GET_ORDER_DETAIL
} from './constants';

const initialState = {
  isAuthenticated: false,
  loading: false,
  message: '',
  user: {},
  carts: {},
  orders: [],
  totalOrderPage: 0,
  order: {},
  errors: {}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.payload.email,
        loading: false,
        user: action.payload
      };
    case GET_PROFILE:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GET_ERRORS_USER:
      return {
        ...state,
        errors: action.payload
      };
    case GET_CART:
      return {
        ...state,
        carts: action.payload
      };
    case GET_ORDER:
      return {
        ...state,
        orders: action.payload.orders,
        totalOrderPage: action.payload.total_page
      };
    case GET_ORDER_DETAIL:
      return {
        ...state,
        order: action.payload
      };
    case REMOVE_CART:
      return {
        ...state,
        carts: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;
