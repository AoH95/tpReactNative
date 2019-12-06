import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from "../screen/HomeScreen";
import DetailsScreen from "../screen/DetailsScreen";
import SettingsScreen from "../screen/SettingsScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/Ionicons';

const detailsNavigator = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        Details: {screen: DetailsScreen}
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f411e',
            },
            headerTinColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);

const tabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: detailsNavigator,
        navigationOptions: {
            tabBarLabel: 'Accueil',
            tabBarIcon: ({tintColor}) => (
                <Icon color={tintColor} size={25} name={'ios-home'}/>
            ),
            barStyle: {backgroundColor: '#aa3ee0'}
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Paramètres',
            tabBarIcon: ({tintColor}) => (
                <Icon color={tintColor} size={25} name={'ios-settings'}/>
            ),
            barStyle: {backgroundColor: '#efa22d'}
        }
    }
},
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(tabNavigator);