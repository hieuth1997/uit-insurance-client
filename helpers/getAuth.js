import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { logoutUser, getCurrentUser } from '../components/user/actions';

const getAuth = store => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    localStorage.setItem('expiredIn', decoded.exp);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = '/login';
    } else {
      getCurrentUser(store.dispatch);
    }
  }
};
export default getAuth;
