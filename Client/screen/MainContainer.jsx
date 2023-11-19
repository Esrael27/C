import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home/Home';
import AccountsScreen from './Accounts/Accounts';
import RecentsScreen from './Recents/Recents';

const homeName = "Home";
const accountsName = "Accounts";
const recentsName = "Recents";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === accountsName) {
                iconName = focused ? 'list' : 'list-outline';
              } else if (rn === recentsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: '#c999d3',
            labelStyle: { paddingBottom: 9, fontSize: 10 },
            style: { padding: 10, height: 70 },
          }}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={accountsName} component={AccountsScreen} />
          <Tab.Screen name={recentsName} component={RecentsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default MainContainer;
