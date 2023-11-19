// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '../Login/LoginScreen';
import HomeScreen from '../screen/MainContainer';
import NavBar from '../components/Header/NavBar/NavBar';
import TopUpScreen from '../components/Top/Top'; // Create this screen
import TransferScreen from '../components/Transfer/Transfer'; // Create this screen
import UtilitiesScreen from '../components/Utility/Utilites'; // Create this screen
import GovernmentServicesScreen from '../components/Goverment/Goverment'; // Create this screen
import BankingScreen from '../components/Banking/Banking'; // Create this screen
import TravelScreen from '../components/Travel/TravelScreen'; // Create this screen
import PayForScreen from '../components/Payfor/Payfor'; // Create this screen
import EntertainmentScreen from '../components/Enter/Entertain'; // Create this screen
import UtilityScreen from '../components/util/Utility'; // Create this screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
          {/* <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />     */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NavBar" component={NavBar} options={{ headerTitle: '' }}  />
        <Stack.Screen name="TopUpScreen" component={TopUpScreen} />
        <Stack.Screen name="TransferScreen" component={TransferScreen} />
        <Stack.Screen name="UtilitiesScreen" component={UtilitiesScreen } />
        <Stack.Screen name="GovernmentServicesScreen" component={GovernmentServicesScreen} />
        <Stack.Screen name="BankingScreen" component={BankingScreen} />
        <Stack.Screen name="TravelScreen" component={TravelScreen} />
        <Stack.Screen name="PayForScreen" component={PayForScreen} />
        <Stack.Screen name="EntertainmentScreen" component={EntertainmentScreen} />
        <Stack.Screen name="UtilityScreen" component={UtilityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
