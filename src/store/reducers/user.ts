import {
  GET_REPOS_SUCCESS,
  GET_USER_INFO_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUESTED,
 LOGIN_SUCCESS,
 LOGOUT,
 LOGOUT_SUCCESS
} from '../actions/user-actions-types';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

const initialState = {
  isLoggedIn: AsyncStorage.getItem("isLoggedIn") || false,
  user: AsyncStorage.getItem("user") || null,
  client_id: Config.GITHUB_CLIENT_ID,
  client_secret: Config.GITHUB_CLIENT_SECRET,
  loginError: null,
  userToken: null,
  repos: null
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function user(state = initialState, { payload, type }) {
  switch (type) {

    case LOGIN_SUCCESS:
      AsyncStorage.setItem("isLoggedIn", "true")
      
      return {
        ...state,
        isLoggedIn: true,
        userToken: payload.access_token
      };

    case LOGIN_REQUESTED:
      return{
        ...state,
        loginError: ""
      }

    case LOGIN_FAILURE:
      return{
        ...state,
        loginError: payload
      }

    case GET_USER_INFO_SUCCESS:
      AsyncStorage.setItem("user", JSON.stringify(payload))
      return{
        ...state,
        user: payload
      }

    case GET_REPOS_SUCCESS:
      return{
        ...state,
        repos: payload
      }

    case LOGOUT_SUCCESS: 
      AsyncStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        userToken:null
      };
    
    default:
      return state;
  }
}