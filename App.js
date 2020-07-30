/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux';

let store = createStore();
const App = () => (
  <Provider store={store}>

  </Provider>
)
AppRegistry.registerComponent('tutorrialProject',()=>App)