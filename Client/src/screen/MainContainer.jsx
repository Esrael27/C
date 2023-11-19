// MainContainer.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home/Home';
import DetailsScreen from './Accounts/Accounts';
import SettingsScreen from './Recents/Recents';
import Header from '../components/Header/Header';

const Tab = createBottomTabNavigator();

const HomeName = 'Home';
const DetailsName = 'Details';
const SettingsName = 'Settings';

function MainContainer() {
  return (
    <>
      <Header />

      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case HomeName:
                iconName = focused ? 'home' : 'home-outline';
                break;
              case DetailsName:
                iconName = focused ? 'list' : 'list-outline';
                break;
              case SettingsName:
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                iconName = 'ios-information-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;

            switch (route.name) {
              case HomeName:
                label = 'Home';
                break;
              case DetailsName:
                label = 'Details';
                break;
              case SettingsName:
                label = 'Settings';
                break;
              default:
                label = 'Unknown';
            }

            return <Text style={{ color }}>{label}</Text>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffefff',
          inactiveTintColor: 'grey',
          labelStyle: { fontSize: 12 },
        }}
        tabBarStyle={{ backgroundColor: 'red', height: 60, paddingTop: 5, paddingBottom: 5 }}>
        <Tab.Screen
          name={HomeName}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={DetailsName}
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={SettingsName}
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}

export default MainContainer;
