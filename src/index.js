import React, {Component} from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';
import TabContainer from './routers';
import store from '../store/configureStore';
// import configureStore from '../store/configureStore';
// const store = configureStore();

export default class AppComponent extends Component {

  render() {
    return (
      <Provider store={store}>
        <TabContainer/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyApp1', () => AppComponent);
