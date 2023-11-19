// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Login/LoginScreen'; // Assuming your LoginScreen component is in the same directory
import HomeScreen from './src/screen/MainContainer'; // Replace with the actual path to your HomeScreen component
import NavBar from './src/screen/Header/NavBar/NavBar'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
         name="LoginScreen"
         component={LoginScreen}
         options={{ headerShown: false }}
          />
        <Stack.Screen
         name="HomeScreen"
         component={HomeScreen}
         options={{ headerShown: false }}
         />
        
        <Stack.Screen
         name="NavBar"
         component={NavBar}
         options={{ headerTitle: '' }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

