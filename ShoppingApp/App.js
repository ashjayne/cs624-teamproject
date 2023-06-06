// ex01 - React Native Tutorial - Networking
import React, {Component,useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Login from './components/Login/Login';
import ProductGallery from './components/Products/ProductGallery';
import Cart from './components/Cart/Cart';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    username: '',
    password: ''
  }

/*  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }
*/

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Product Gallery" component={ProductGallery} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}