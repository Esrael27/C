import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './Home.style';
const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <Text style={styles.text}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};



export default HomeScreen;
