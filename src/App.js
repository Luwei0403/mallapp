import React, {Component} from 'react';
import {create} from 'dva-core';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import member from './models/member';
import product from './models/product';
import cart from './models/cart';
import carousel from './models/carousel';
import BootSplash from 'react-native-bootsplash'; 

const app = create();
app.model(member);
app.model(product);
app.model(cart);
app.model(carousel);
app.start();
const store = app._store;

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </Provider>
    );
  }
}
