import { LOGIN, LOGOUT } from '../Actions/authActions';

const initialState = {
  authenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { authenticated: true };
    case LOGOUT:
      return { authenticated: false };
    default:
      return state;
  }
};

export default authReducer;