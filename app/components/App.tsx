import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import catsReducer from '../reducers/cats.reducer';
import AsyncStorage from '@react-native-community/async-storage';

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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Text style={styles.text}>Hello World !</Text>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export default App;