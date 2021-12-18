import { createAction } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const login = createAction(LOGIN);

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = createAction(LOGIN_FAILURE);

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const loginRequested = createAction(LOGIN_REQUESTED);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const GET_USER_INFO = 'GET_USER_INFO';
export const getUserInfo = createAction(GET_USER_INFO);

export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const getUserInfoSuccess = createAction(GET_USER_INFO_SUCCESS);

export const GET_REPOS = 'GET_REPOS';
export const getRepos = createAction(GET_REPOS);

export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const getReposSuccess = createAction(GET_REPOS_SUCCESS);

export const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = createAction(LOGOUT_SUCCESS);

