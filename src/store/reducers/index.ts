import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';
import user from './user';

const config = {
  blacklist: ['app'],
  key: 'primary',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {
  user,
});

export type RootState = ReturnType<typeof reducers>

export default reducers;
