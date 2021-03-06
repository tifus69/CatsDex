import React, {useEffect} from 'react';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import {NativeRouter} from 'react-router-native';

import catsReducer from './reducers/cats.reducer';
import Router from './Router';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, catsReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const persistor = persistStore(store);

const App: React.FC = () => {
  useEffect(() => SplashScreen.hide(), []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeRouter>
          <Router />
        </NativeRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
