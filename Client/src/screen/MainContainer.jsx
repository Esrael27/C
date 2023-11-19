// MainContainer.js

import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home/Home'; // Replace with your actual HomeScreen component
import DetailsScreen from './Accounts/Accounts'; // Replace with your actual DetailsScreen component
import SettingsScreen from './Recents/Recents'; // Replace with your actual SettingsScreen component
import Header from '../components/Header/Header';

const Tab = createBottomTabNavigator();

const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';

function MainContainer() {
  
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;

            if (route.name === homeName) {
              label = 'Home';
            } else if (route.name === detailsName) {
              label = 'Details';
            } else if (route.name === settingsName) {
              label = 'Settings';
            }

            return <Text style={{ color }}>{label}</Text>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { fontSize: 12 },
          style: { height: 60, paddingTop: 5, paddingBottom: 5 },
        }}>
        <Tab.Screen
          name={homeName}
          component={HomeScreen} // Replace with your actual HomeScreen component
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={detailsName}
          component={DetailsScreen} // Replace with your actual DetailsScreen component
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={settingsName}
          component={SettingsScreen} // Replace with your actual SettingsScreen component
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}

export default MainContainer;
