import { call, delay, select } from 'redux-saga/effects';
import Idx from 'idx';
import Toast from 'react-native-toast-message';
import axiosInstance from '../../resources/axios-instance';

function* HttpClient(payload, authentication) {
  
  const data = { ...payload };

  // eslint-disable-next-line no-console
  if(authentication){
    const authToken = yield select(({ user: { userToken } }) => userToken);
    if (authToken) {
      data.headers = { 'Authorization': `token ${authToken}` };
    } else {
      return {
        error: true,
        result: null,
      };
    }
  }

  try {
    const { data: result, headers: { 'x-authorization': authenticationToken = '' }} = yield call(axiosInstance, data)

    return {
      error: null,
      result,
    };
  } catch (error: any) {
    // eslint-disable-next-line no-console
    if (Idx(error, _ => _.code)) {
      if (error.code === 'ECONNABORTED') {
        const message = "Servers down, please try again later";
        Toast.show({
          text1: message,
        });
      } else if (error.code === 401) {
        yield delay(250);
        Toast.show({
          text1: error.message,
        });
      } else if (error.code === 402) {
        // show nothing
      } else {
        Toast.show({
          text1: error.message,
        });
      }
    } else {
      Toast.show({
        text1: error.message,
      });
    }

    return {
      error,
      result: null,
    };
  }
}

export default HttpClient;
