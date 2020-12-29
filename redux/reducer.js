import { combineReducers } from 'redux';
import userReducer from '../components/user/reducer';
import homeReducer from '../components/home/reducer';
import insuranceReducer from '../components/insurance/reducer';
import newsReducer from '../components/news/reducer';

export default combineReducers({
  user: userReducer,
  home: homeReducer,
  insurance: insuranceReducer,
  news: newsReducer
});
