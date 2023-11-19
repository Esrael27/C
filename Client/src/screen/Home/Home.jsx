import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from Expo
import Balance from './Balance/Balance';


const HomeScreen = () => {

  return (
    <>
     <Balance />
    </>
  );
};

export default HomeScreen;
