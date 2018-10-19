import React, { Component } from 'react';
import { 
  Image,
 } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeNav from '../a/router'
import ShopCartNav from '../b/router';
import MineNav from '../c/router';

const homeImg = require('../tabs/images/home.png')
const actHome = require('../tabs/images/actHome.png')

const shopImg = require('../tabs/images/shop.png');
const actShop = require('../tabs/images/actShop.png');

const mineImg = require('../tabs/images/mine.png')
const actMine = require('../tabs/images/actMine.png')

const imgStyle = {
    width: 20,
    height: 20,
    marginTop: 2,
    resizeMode: 'contain',
}
const StackConfig = {
    headerMode: 'screen',
    navigationOptions: {
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#FF4E4A',
          borderBottomColor: 'rgba(0, 0, 0, .0)',
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 20,
          alignItems: 'center',
          fontWeight: '400',
        },
        headerBackTitle: null,
        // headerBackTitleStyle: {
        //     color: '#fff',
        //     accessible: 'none',
        //     fontWeight: '400', 
        // },
        headerTintColor: '#fff',
        
    }
}

const tabConfig = {
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#FF4E4A',
        inactiveTintColor: '#e5e5e5',
        labelStyle: {
        paddingBottom: 5,
        },
        style: {
        backgroundColor: '#f9f9f9',
        borderTopColor: '#e5e5e5',
        }
    }
}

const HomeStack = createStackNavigator({ ...HomeNav },{...StackConfig })

HomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'Home') {
    navigationOptions.tabBarVisible = true;
  } else {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

const ShopCartStack = createStackNavigator({ ...ShopCartNav },{...StackConfig })
const MyProfileStack = createStackNavigator({ ...MineNav },{...StackConfig })

const TabContainer = createBottomTabNavigator(
    {
        Home:{
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: '主页',
                tabBarIcon: ({ focused }) => (
                  focused ? <Image style={imgStyle} source={actHome} /> :
                    <Image style={imgStyle} source={homeImg} />
                ),
            }
        },
        ShopCart:{
            screen: ShopCartStack,
            navigationOptions: {
              tabBarLabel: '购物车',
              tabBarIcon: ({ focused }) => (
                focused ? <Image style={imgStyle} source={actShop} /> :
                  <Image style={imgStyle} source={shopImg} />
              )
            }},
        MyProfile:{
            screen: MyProfileStack,
            navigationOptions: {
              tabBarLabel: '我的',
              tabBarIcon: ({ focused }) => (
                focused ? <Image style={imgStyle} source={actMine} /> :
                  <Image style={imgStyle} source={mineImg} />
              )
            }},
    },
    {    
        ...tabConfig
    }
)

export default TabContainer;