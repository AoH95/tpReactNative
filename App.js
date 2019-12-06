import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
        <MainTabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
