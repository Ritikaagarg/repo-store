import React from 'react';
import { LogBox, SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import Navigator from './navigation';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store';
LogBox.ignoreAllLogs()

const { store, persistor } = configureStore();
const Src = () => {

  return(
   <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
          <Toast type="error" position="bottom" bottomOffset={20} />
        </PersistGate>
      </Provider>
   </SafeAreaView>
  )
}

export default Src;