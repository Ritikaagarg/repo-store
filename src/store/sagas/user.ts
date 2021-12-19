import { all, call, put, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-toast-message';
import {
  getUserInfoSuccess,
  GET_USER_INFO,
  LOGIN,
  loginFailure,
  loginRequested,
  loginSuccess,
  getReposSuccess,
  GET_REPOS,
  LOGOUT,
  logoutSuccess,
  createRepoRequested,
  createRepoFailure,
  createRepoSuccess,
  CREATE_REPO,
} from '../actions/user-actions-types';
import httpClient from './http-client';
import Config from 'react-native-config';
import { navigate } from '../../navigation/root-navigation';

const {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET} = Config;

// eslint-disable-next-line require-yield
function* login({ payload: data }:any){
  yield put(loginRequested())
  const payload = {
    method:'post',
    url:`https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${data.code}`
  }
  const { error, result } = yield call(httpClient, payload, false);

  if (error) {
    if (error.code === 402) {
      const errorDetail = {
        code: error.code,
        ...JSON.parse(error.message),
      };

      Toast.show({ text1: errorDetail.message });
      yield put(loginFailure(errorDetail));
    } else {
      yield put(loginFailure(null));
    }
  } else {
    yield put(loginSuccess(result));
  }
}

function* getUserInfo(){
  const payload = {
    method:'get',
    url:'https://api.github.com/user'
  }
  const { error, result } = yield call(httpClient, payload, true);
  if (error) {
    if (error.code === 402) {
      const errorDetail = {
        code: error.code,
        ...JSON.parse(error.message),
      };
      Toast.show({ text1: errorDetail.message });
    } else {
      Toast.show({ text1: "There is some issue, please try again" });
    }
  } else {
    yield put(getUserInfoSuccess(result));
    
  }
}

function* getRepos({payload: {callback} }:any){
  const payload = {
    method:'get',
    url:'https://api.github.com/user/repos'
  }
  const { error, result } = yield call(httpClient, payload, true);
  if (error) {
    if (error.code === 402) {
      const errorDetail = {
        code: error.code,
        ...JSON.parse(error.message),
      };
      Toast.show({ text1: errorDetail.message });
    } else {
      Toast.show({ text1: "There is some issue, please try again" });
    }
  } else {
    yield put(getReposSuccess(result));
    if(callback){
      callback(result)
    } 
  }
}

function* createRepo({payload: {callback, query} }:any){
  yield put(createRepoRequested());
  const payload = {
    method:'post',
    url:'https://api.github.com/user/repos',
    data: query
  }

  const { error, result } = yield call(httpClient, payload, true);
  if (error) {
    if (error.code === 402) {
      const errorDetail = {
        code: error.code,
        ...JSON.parse(error.message),
      };
      createRepoFailure(errorDetail.message)
      Toast.show({ text1: errorDetail.message });
    } else {
      createRepoFailure(error)
      Toast.show({ text1: "There is some issue, please try again" });
    }
  } else {
    Toast.show({ text1: `${query.name} is created successfully` });
    yield put(createRepoSuccess(result));
    if(callback){
      callback()
    }
    navigate('Home')
  }
}

function* logout(){
  yield put(logoutSuccess())
}

function* User() {
  yield all([
    takeLatest(LOGIN, login),
    takeLatest(GET_USER_INFO, getUserInfo),
    takeLatest(GET_REPOS, getRepos),
    takeLatest(CREATE_REPO, createRepo),
    takeLatest(LOGOUT, logout)
  ]);
}

export default User;
